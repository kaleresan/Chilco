import jsonwebtoken from 'jsonwebtoken';
import passwordHash from 'password-hash';
import { body, param } from 'express-validator';
import { Router, Request, Response } from 'express';

import { Account, ResetToken } from '@chilco/models';
import { checkValidation } from '@chilco/middlewares';
import {
    createSuccessResponse,
    createErrorResponse,
} from '@chilco/common-service';

import { config } from '../../../config';

const changePassword = Router();

async function changePasswordController(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        const { token } = req.params;
        const { password } = req.body;

        const { resetTokenId: _id } = await jsonwebtoken.verify(
            token,
            config.settings.resetKey,
        );

        const resetToken = await ResetToken.findOne({ _id });

        if (!resetToken) {
            createErrorResponse(res, 400);
            return;
        }

        const account = await Account.findOne({ _id: resetToken.accountId });

        if (!account) {
            createErrorResponse(res, 400);
            return;
        }

        account.password = passwordHash.generate(password);
        await account.save();
        await resetToken.remove();

        createSuccessResponse(res);
    } catch (e) {
        console.log(e);
        createErrorResponse(res, 500);
    }
}

changePassword.post(
    '/:token',
    [param('token').isJWT(), body('password').isString(), checkValidation],
    changePasswordController,
);

export { changePassword };
