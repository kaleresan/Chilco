import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { param } from 'express-validator';
import { Router, Request, Response } from 'express';

import {
  createErrorResponse,
  createServiceCommunicator,
  createSuccessResponse,
  getServiceResponseData,
} from '@chilco/common-service';
import { AuthToken } from '@chilco/models';
import { checkValidation } from '@chilco/middlewares';
import { config as authServiceConfig } from '@chilco/service-authentication';

import { config } from '../../config';
import { authorizeTokenAction } from '../../actions';

const registerNewDevice = Router();

async function getAccessToken(req) {
  const authenticationService = createServiceCommunicator(
    authServiceConfig,
    config,
  );
  const { token } = getServiceResponseData(
    await authenticationService.post(`/device/${req.accountId}/authToken`, { deviceName: 'info' }),
  );
  return token;
}

async function authorizeDashboardController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const { token } = req.params;

    const { id: _id } = jwt.verify(
      token,
      config.settings.jwtSecretKey,
    );
    if (!_id || !mongoose.Types.ObjectId.isValid(_id)) {
      createErrorResponse(res, 400);
      return;
    }

    const authToken = await AuthToken.findOne({
      _id,
    });

    if (!authToken) {
      createErrorResponse(res, 400);
      return;
    }
    const accessToken = await getAccessToken(req);
    // @ts-ignore
    authorizeTokenAction(req.websocket.to(token), accessToken);

    createSuccessResponse(res);
  } catch (err) {
    console.log(err);
    createErrorResponse(res, 400);
  }
}

registerNewDevice.post(
  '/register/:token',
  [param('token').isJWT().isString()],
  checkValidation,
  authorizeDashboardController,
);
export { registerNewDevice };
