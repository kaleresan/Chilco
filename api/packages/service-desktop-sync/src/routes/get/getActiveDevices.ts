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
import { config as authServiceConfig } from '@chilco/service-authentication';

import { config } from '../../config';

const getActiveDevices = Router();

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

async function getActiveDevicesController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const devices: [string] = await new Promise((resolve, reject) => req.websocket.clients((err, clients) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(clients);
    }));

    createSuccessResponse(res,{ numberOfDevices: devices.length });
  } catch (err) {
    console.log(err);
    createErrorResponse(res, 400);
  }
}

getActiveDevices.get(
  '/devices',
  getActiveDevicesController,
);
export { getActiveDevices };
