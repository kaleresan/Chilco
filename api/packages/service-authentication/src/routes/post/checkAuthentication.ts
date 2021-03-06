import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
import { body } from 'express-validator';
import { Router, Request, Response } from 'express';

import {
    createErrorResponse,
    createSuccessResponse,
} from '@chilco/common-service';
import { checkValidation } from '@chilco/middlewares';

import config from '../../config';

const checkAuthentication = Router();

async function checkAuthenticationController(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        const {
            body: { token },
        } = req;

        const { accountId, deviceId } = await jsonwebtoken.verify(
            token,
            config.settings.authenticationKey,
        );

        if (
            !mongoose.Types.ObjectId.isValid(accountId)
        ) {
            createErrorResponse(res, 400);
            return;
        }

        createSuccessResponse(res, { accountId, deviceId, type: deviceId ? 'DEVICE' : 'ACCOUNT' });
    } catch (err) {
        createErrorResponse(res, 400);
    }
}

checkAuthentication.post(
    '/',
    [body('token').isString(), checkValidation],
    checkAuthenticationController,
);

export { checkAuthentication };
