import jsonwebtoken from 'jsonwebtoken';
import { param } from 'express-validator';
import { Router, Request, Response } from 'express';

import { Account, Device } from '@chilco/models';
import { checkValidation } from '@chilco/middlewares';
import {
    createSuccessResponse,
    createErrorResponse,
} from '@chilco/common-service';

import config from '../../../config';

const getAuthTokenForDevice = Router();

async function getAuthTokenForDeviceController(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        const { id: _id } = req.params;

        const account = await Account.findOne({ _id });
        if (!account) {
            createErrorResponse(res, 400);
            return;
        }

        const device = new Device({ name: 'info', accountId: account._id });
        await device.save();

        const token = jsonwebtoken.sign(
            { accountId: account._id, deviceId: device._id },
            config.settings.authenticationKey
        );

        createSuccessResponse(res, { token });
    } catch (e) {
        console.log(e);
        createErrorResponse(res, 500);
    }
}

getAuthTokenForDevice.post(
    '/:id/authToken',
    [param('id').isMongoId(), checkValidation],
    getAuthTokenForDeviceController,
);
export { getAuthTokenForDevice };
