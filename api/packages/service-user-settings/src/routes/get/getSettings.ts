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

    createSuccessResponse(res, {"settings":[{"Title":"Browsers","Processes":["Firefox","Chrome"],"LeftoverTime":"00:10:00","DoTimeRollover":true,"DateLastRun":"2019-11-20T12:39:23.8495909-08:00","DailyPlaytime":"00:30:00"}]});
  } catch (err) {
    console.log(err);
    createErrorResponse(res, 400);
  }
}

getAllSettings.get('/', getAllSettingsController);
export { getAllSettings };
