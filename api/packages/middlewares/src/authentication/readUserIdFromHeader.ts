import { ACCOUNT_ID_HEADER } from '@chilco/messages';
import { createErrorResponse } from '@chilco/common-service';

export function readAccountIdFromHeader(req, res, next) {
    req.accountId = req.headers[ACCOUNT_ID_HEADER];

    if (!req.accountId) {
        createErrorResponse(res, 401);
        return;
    }

    next();
}
