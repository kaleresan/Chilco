import { Request } from 'express';
import { ACCOUNT_ID_HEADER } from '@chilco/messages';

export function getAuthenticationHeader(req: Request) {
    return {
        [ACCOUNT_ID_HEADER]: req.headers[ACCOUNT_ID_HEADER],
    };
}
