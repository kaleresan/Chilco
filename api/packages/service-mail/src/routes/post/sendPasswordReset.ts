import * as path from 'path';
import * as fs from 'fs';
import { Router } from 'express';
import { body } from 'express-validator';
import { checkValidation } from '@chilco/middlewares';

import { replacePlaceholders } from '../helper';
import { sendMailController, createMailData } from './sendMail';

const mailRouter = Router();

const passwordFile = path.resolve(
    __dirname,
    '..',
    '..',
    'static',
    'passwordReset.html',
);
const passwordResetHTML = fs.readFileSync(passwordFile, {
    encoding: 'utf-8',
});

const emailDefaults = {
    subject: 'Reset your password for your Chilco account!',
};

function createPasswordResetHtml(req, res, next) {
    const { name, resetURL, subject } = req.body;
    const replaceValues = {
        name,
        url: resetURL,
        title: subject || emailDefaults.subject,
    };

    req.body.subject = subject || emailDefaults.subject;
    req.body.html = replacePlaceholders(replaceValues, passwordResetHTML);

    next();
}

mailRouter.post(
    '/passwordReset',
    [
        body('to').isString(),
        body('name').isString(),
        body('resetURL').isString(),
        body('from')
            .isString()
            .optional(),
        body('subject')
            .isString()
            .optional(),
    ],
    checkValidation,
    createPasswordResetHtml,
    createMailData,
    sendMailController,
);
export { mailRouter as sendPasswordResetRouter };
