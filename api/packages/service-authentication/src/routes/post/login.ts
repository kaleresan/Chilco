import jsonwebtoken from 'jsonwebtoken';
import passwordHash from 'password-hash';
import { body } from 'express-validator';
import { Router, Request, Response } from 'express';

import { Account } from '@chilco/models';
import { checkValidation } from '@chilco/middlewares';
import {
    createSuccessResponse,
    createErrorResponse,
} from '@chilco/common-service';

import config from '../../config';

const login = Router();

async function loginController(req: Request, res: Response): Promise<void> {
    try {
        const {
            body: { email, password },
        } = req;

        const account = await Account.findOne({ email });

        if (!account) {
            createErrorResponse(res, 400);
            return;
        }

        if (!passwordHash.verify(password, account.password)) {
            createErrorResponse(res, 400);
            return;
        }

        const token = jsonwebtoken.sign(
            { accountId: account._id },
            config.settings.authenticationKey,
            {
                expiresIn: '1 days',
            },
        );

        createSuccessResponse(res, { token });
    } catch (e) {
        console.log(e);
        createErrorResponse(res, 500);
    }
}

login.post(
    '/login',
    [body('email').isEmail(), body('password').isString(), checkValidation],
    loginController,
);

export { login };
