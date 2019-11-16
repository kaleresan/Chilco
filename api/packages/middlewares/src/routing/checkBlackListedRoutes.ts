import { Request, Response } from 'express';
import { BlacklistedRouteType } from '@chilco/types';
import { createErrorResponse } from '@chilco/common-service';

function replaceBlacklistPathParamsInPath(
    blacklistPath: string,
    param: string,
    path: string,
): string {
    const startPosition = blacklistPath.search(param);
    const endCuttedPath = path.slice(startPosition - 1, path.length);
    const startCuttedPath = path.slice(0, startPosition);
    const paramPath = endCuttedPath.replace(/\/[a-zA-Z0-9]*/, param);
    return startCuttedPath + paramPath;
}

export function checkBlackListedRoutes(
    basePath: string,
    blacklist: BlacklistedRouteType[],
): (req: Request, res: Response, next: () => void) => void {
    return (req: Request, res: Response, next: () => void) => {
        const path = req.path;
        const method = req.method;
        for (const blacklistedRoute of blacklist) {
            const {
                path: blacklistedPath,
                method: blacklistedMethod,
            } = blacklistedRoute;
            let replacedPath = path;
            const params = blacklistedPath.match(/:[a-z]*/g);
            if (params) {
                params.forEach(param => {
                    replacedPath = replaceBlacklistPathParamsInPath(
                        blacklistedPath,
                        param,
                        path,
                    );
                });
            }

            if (
                replacedPath === blacklistedPath &&
                method === blacklistedMethod
            ) {
                createErrorResponse(res, 404);
                return;
            }
        }

        next();
    };
}
