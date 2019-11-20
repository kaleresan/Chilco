import { Request, Response } from 'express';
import {
    ServiceConfigType,
    createErrorResponse,
    createServiceCommunicator,
    getServiceResponseData,
} from '@chilco/common-service';
import {
    ACCOUNT_ID_HEADER,
    ACCESS_TOKEN_HEADER,
} from '@chilco/messages';
// @ts-ignore
import { config as authenticationServiceConfig } from '@chilco/service-authentication';

export function handleError(
    isSecurityOptional: boolean,
    res: Response,
    next: () => void,
) {
    if (isSecurityOptional) {
        next();
        return;
    }

    createErrorResponse(res, 401);
}

export function checkAuthentication(
    service: ServiceConfigType,
    isSecurityOptional: boolean = false,
): (req: Request, res: Response, next: () => void) => Promise<void> {
    const connection = createServiceCommunicator(
      authenticationServiceConfig,
      service,
    );

    return async (req: Request, res: Response, next: () => void) => {
        try {
            const token =
                req.headers[ACCESS_TOKEN_HEADER] ||
                req.query[ACCESS_TOKEN_HEADER];

            if (!token) {
                handleError(isSecurityOptional, res, next);
                return;
            }


            const { accountId } = getServiceResponseData(
                await connection.post('/', {
                    token,
                }),
            );

            if (!accountId) {
                handleError(isSecurityOptional, res, next);
                return;
            }

            req.headers[ACCOUNT_ID_HEADER] = accountId;
            next();
        } catch (e) {
            handleError(isSecurityOptional, res, next);
        }
    };
}
