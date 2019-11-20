import { Router, Request, Response } from 'express';

import {
  createErrorResponse,
  createSuccessResponse,
} from '@chilco/common-service';

import {
  Setting,
  ProcessGroup,
} from "@chilco/models";

const getAllSettings = Router();

async function getAllSettingsController(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const settings = await Setting.findAll({ where: { accountId: req.accountId }});

    createSuccessResponse(res, { settings });
  } catch (err) {
    console.log(err);
    createErrorResponse(res, 400);
  }
}

getAllSettings.get('/', getAllSettingsController);
export { getAllSettings };
