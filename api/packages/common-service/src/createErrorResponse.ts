import { Response } from 'express';
import { errorMessages } from '@chilco/messages';

export function createErrorResponseBody(errorCode: number, body = {}) {
    return {
        status: errorCode,
        msg: errorMessages[errorCode],
        error: true,
        ...body,
    };
}

export function createErrorResponse(
    res: Response,
    errorCode: number,
    body = {},
) {
    if (res.status) {
        res.status(errorCode).json(createErrorResponseBody(errorCode, body));
    }
}
