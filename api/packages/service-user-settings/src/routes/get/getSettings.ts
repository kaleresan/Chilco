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

    createSuccessResponse(res, {"setting":[{"Key":"Default1","Title":"Browser","Processes":["Firefox","Chrome"],"DoTimeRollover":true,"DailyPlaytime":"00:30:00"},{"Key":"Default2","Title":"Games","Processes":["Nidhogg","Stardew Valley","Unturned","Ace of Spades","Counterstrike Global Offensive"],"DoTimeRollover":true,"DailyPlaytime":"02:00:00"},{"Key":"Default3","Title":"Malicious Utilities","Processes":["cmd","PowerShell"],"DoTimeRollover":true,"DailyPlaytime":"00:00:00"},{"Key":"Default4","Title":"","Processes":["",""],"DoTimeRollover":true,"DailyPlaytime":"00:00:00"}]});
  } catch (err) {
    console.log(err);
    createErrorResponse(res, 400);
  }
}

getAllSettings.get('/', getAllSettingsController);
export { getAllSettings };
