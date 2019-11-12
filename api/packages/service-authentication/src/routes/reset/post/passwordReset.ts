import jsonwebtoken from 'jsonwebtoken';
import { body } from 'express-validator';
import { Router, Request, Response } from 'express';

import { Account, ResetToken } from '@chilco/models';
import { checkValidation } from '@chilco/middlewares';
import { createSuccessResponse } from '@chilco/common-service';

import config from '../../../config';

import { getMailService } from '../../../serivces';
import { getAccountName } from '@chilco/generic';

const passwordReset = Router();

async function createResetToken(accountId: string, companyId: string) {
    const resetToken = new ResetToken({
        accountId,
        companyId,
    });
    await resetToken.save();
    return resetToken;
}

async function passwordResetController(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        createSuccessResponse(res);

        const {
            body: { email },
        } = req;

        const account = await Account.findOne({ email });

        if (!account) {
            return;
        }

        let resetToken = await ResetToken.findOne({
            accountId: account._id,
            companyId: account.company._id,
        });

        if (resetToken && resetToken.expire.getTime() < new Date().getTime()) {
            resetToken.remove();
            resetToken = await createResetToken(
                account.id,
                account.company._id,
            );
        }

        if (
            resetToken &&
            new Date(
                new Date().getTime() - resetToken.updatedAt.getTime(),
            ).getTime() <
                1000 * 60
        ) {
            return;
        }

        if (!resetToken) {
            resetToken = await createResetToken(
                account.id,
                account.company._id,
            );
        }

        resetToken.updatedAt = new Date();
        await resetToken.save();

        const token = jsonwebtoken.sign(
            { resetTokenId: resetToken._id },
            config.settings.resetKey,
            {
                expiresIn: '1 hour',
            },
        );

        const mailService = getMailService();

        await mailService.sendPasswordResetMail({
            to: account.email,
            name: getAccountName(account),
            resetURL: config.settings.resetURL + token,
        });
    } catch (e) {
        console.log(e);
        createSuccessResponse(res);
    }
}

passwordReset.post(
    '/',
    [body('email').isEmail(), checkValidation],
    passwordResetController,
);

export { passwordReset };
