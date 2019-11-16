import passwordHash from 'password-hash';
import { body } from 'express-validator';
import { Router, Request, Response } from 'express';

import { Account } from '@chilco/models';
import { checkValidation } from '@chilco/middlewares';
import {
    createErrorResponse,
    createSuccessResponse,
} from '@chilco/common-service';

const register = Router();

async function registerController(req: Request, res: Response): Promise<void> {
    try {
        const {
            body: {
                email,
                password,
                lastname,
                firstname,
            },
        } = req;

        if (await Account.findOne({ email })) {
            createErrorResponse(res, 400, {
                // eslint-disable-next-line quotes
                msg: "Invalid 'email' [database]",
            });
            return;
        }

        const account = new Account({
            email,
            lastname,
            firstname,
            password: passwordHash.generate(password),
        });
        await account.save();

        createSuccessResponse(res, account.getPublicResponse());
    } catch (e) {
        console.error(e);
        createErrorResponse(res, 500);
    }
}

register.post(
    '/register',
    [
        body('email')
            .isString()
            .isEmail(),
        body('password').isString(),
        body('firstname').isString(),
        body('lastname').isString(),
        checkValidation,
    ],
    registerController,
);

export { register };
