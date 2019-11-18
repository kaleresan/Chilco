import jsonwebtoken from 'jsonwebtoken';
import { param } from 'express-validator';
import { Router, Request, Response } from 'express';

import { Account } from '@chilco/models';
import { checkValidation } from '@chilco/middlewares';
import {
    createSuccessResponse,
    createErrorResponse,
} from '@chilco/common-service';

import config from '../../config';

const getAuthTokenForUser = Router();

async function getAuthTokenForUserController(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        const { id: _id } = req.params;

        console.log(_id);

        const accountId = await Account.findOne({ _id });

        if (!accountId) {
            createErrorResponse(res, 400);
            return;
        }
        const token = jsonwebtoken.sign(
            { accountId: accountId._id },
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

getAuthTokenForUser.post(
    '/:id/authToken',
    [param('id').isMongoId(), checkValidation],
    getAuthTokenForUserController,
);
export { getAuthTokenForUser };
