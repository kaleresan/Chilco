import * as path from 'path';
import * as fs from 'fs';
import { Router } from 'express';
import { body } from 'express-validator';
import { checkValidation } from '@chilco/middlewares';

import { replacePlaceholders } from '../helper';
import { sendMailController, createMailData } from './sendMail';

const mailRouter = Router();

const confirmationFile = path.resolve(
    __dirname,
    '..',
    '..',
    'static',
    'confirmation.html',
);
const confirmationHTML = fs.readFileSync(confirmationFile, {
    encoding: 'utf-8',
});

const emailDefaults = {
    subject: 'Confirm your Chilco account!',
};

function createConfirmationHtml(req, res, next) {
    const { firstname, confirmUrl, subject } = req.body;
    const replaceValues = {
        firstname,
        url: confirmUrl,
        title: subject || emailDefaults.subject,
    };

    req.body.subject = subject || emailDefaults.subject;
    req.body.html = replacePlaceholders(replaceValues, confirmationHTML);

    next();
}

mailRouter.post(
    '/confirmation',
    [
        body('to').isString(),
        body('from')
            .isString()
            .optional(),
        body('subject')
            .isString()
            .optional(),
        body('firstname').isString(),
        body('confirmUrl').isString(),
    ],
    checkValidation,
    createConfirmationHtml,
    createMailData,
    sendMailController,
);
export { mailRouter as sendConfirmationRouter };
