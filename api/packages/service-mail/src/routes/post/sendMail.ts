import { Router, Response } from 'express';
import { body } from 'express-validator';
import { checkValidation } from '@chilco/middlewares';
import {
    createErrorResponse,
    createSuccessResponse,
} from '@chilco/common-service';

import config from './../../config';

const mailRouter = Router();

export function createMailData(req, res, next): void {
    const body = req.body;
    const defaults = {
        from: '"Chilco\'s Bot" <example@example.com>',
        text: 'No plain text available, please view the HTML instead.',
    };

    const mailData = {
        from: body.from || defaults.from,
        to: body.to, // recipient or comma seperated list of recipients
        subject: body.subject,
        text: body.text || defaults.text, // plain text
        html: body.html,
    };

    req.mailData = mailData;
    next();
}

export async function sendMailController(req, res: Response): Promise<void> {
    try {
        const { transport } = config;
        const { mailData } = req;

        await transport.sendMail(mailData);
        createSuccessResponse(res, 200);
    } catch (err) {
        console.log(err);
        createErrorResponse(res, 400);
    }
}

mailRouter.post(
    '/send',
    [
        body('from')
            .isString()
            .optional(),
        body('to').isString(),
        body('subject').isString(),
        body('text')
            .isString()
            .optional(),
        body('html').isString(),
    ],
    checkValidation,
    createMailData,
    sendMailController,
);
export { mailRouter as sendMailRouter };
