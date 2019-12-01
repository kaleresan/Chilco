import { Router, Request, Response } from 'express';

import {
    createErrorResponse,
    createSuccessResponse,
} from '@chilco/common-service';
import { config } from '../../config';

const getCurrentAccount = Router();

async function getCurrentAccountController(
    req: Request,
    res: Response,
): Promise<void> {
    try {
        // @ts-ignore
        const { account } = req;
        createSuccessResponse(
            res,
            account.addProfilePictureFileLinkToResponse(
                `${config.proxyRoute}/profilePicture`,
                account.getAuthResponse(),
            ),
        );
    } catch (err) {
        console.log(err);
        createErrorResponse(res, 400);
    }
}

getCurrentAccount.get('/', getCurrentAccountController);
export { getCurrentAccount };
