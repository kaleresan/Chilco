import Multer from 'multer';
import { createErrorResponse } from '@chilco/common-service';

export function getFileFromRequest(field: string, config: any = {}) {
    const multerConfig = {
        storage: Multer.memoryStorage(),
        ...config,
    };

    return (req, res, next) => {
        Multer(multerConfig).single(field)(req, res, function(err) {
            if (err) {
                createErrorResponse(res, 400, {
                    msg: `Multer file parsing failed.\nMaybe wrong form field? (wanted '${field}')`,
                });
                return;
            }

            next();
        });
    };
}
