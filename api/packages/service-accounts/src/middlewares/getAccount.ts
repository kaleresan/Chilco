import { Account } from '@chilco/models';
import { Request, Response } from 'express';
import { createErrorResponse } from '@chilco/common-service';

export async function getAccountMiddleware(
    req: Request,
    res: Response,
    next: () => void,
): Promise<void> {
    try {
        const account = await Account.findOne({
            // @ts-ignore
            _id: req.accountId,
        });

        if (!account) {
            createErrorResponse(res, 401);
            return;
        }

        // @ts-ignore
        req.account = account;
        next();
    } catch (err) {
        console.log(err);
        createErrorResponse(res, 400);
    }
}
