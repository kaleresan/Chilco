import { body } from 'express-validator';
import { Router, Request, Response } from 'express';

import { checkValidation } from '@chilco/middlewares';
import {
    createErrorResponse,
    createSuccessResponse,
} from '@chilco/common-service';

const changeAccount = Router();

async function changeAccountController(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        // @ts-ignore
        req.account.changeByObject(req.body);
        // @ts-ignore
        await req.account.save();
        createSuccessResponse(res);
    } catch (err) {
        console.log(err);
        createErrorResponse(res, 400);
    }
}

changeAccount.put(
    '/',
    [
        body('firstname')
            .isString()
            .optional(),
        body('lastname')
            .isString()
            .optional(),
    ],
    checkValidation,
    changeAccountController,
);
export { changeAccount };
