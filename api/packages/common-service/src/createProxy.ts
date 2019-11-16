import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express, { Application } from 'express';

import { ServiceConfigType } from './createService';
import { createErrorResponse } from './createErrorResponse';

export function createProxy({
    port,
    setup,
    routes,
    basePath,
    serviceName,
}: ServiceConfigType): Application {
    const app = express();

    app.use(helmet());
    app.use(compression());
    app.use(cookieParser());
    app.use(cors({ credentials: true, optionsSuccessStatus: 200 }));

    if (setup) {
        setup(app);
    }

    app.use(basePath, routes);

    app.use('*', (req, res): void => {
        createErrorResponse(res, 404);
    });

    app.listen(port, (): void => {
        console.log(`${serviceName} is up and running...`);
    });

    return app;
}
