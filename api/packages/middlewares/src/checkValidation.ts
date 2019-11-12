import { Response, Request } from 'express';
import { validationResult } from 'express-validator';

import { createErrorResponse } from '@chilco/common-service';

export function checkValidation(req: Request, res: Response, next: () => void) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        createErrorResponse(res, 422, errors);
        return;
    }

    next();
}
