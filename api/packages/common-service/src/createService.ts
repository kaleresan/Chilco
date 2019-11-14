import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import * as http from 'http';
import socketIO from 'socket.io';
import redis from 'socket.io-redis';
import session from 'express-session';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express, { Application, Request, Response, Router } from 'express';

import { generateKey } from '@chilco/generic';

import { createErrorResponse } from './createErrorResponse';

export interface ServiceConfigType {
    port: number;
    routes: Router;
    protocol: string;
    logType?: string;
    basePath: string;
    sessionConfig: any;
    proxyRoute: string;
    models?: Array<any>;
    mongodbURI?: string;
    serviceName: string;
    useSession: boolean;
    useWebsocket: boolean;
    websocketPath?: string;
    postgresdbURI?: string;
    websocket: (ws: any) => void;
    upgradeToWebsocket?: () => any;
    setup?: (app: Application) => void;
}

export function createServiceConfig(
    overwrite: ServiceConfigType | {},
): ServiceConfigType {
    return {
        basePath: '/',
        logType: 'dev',
        proxyRoute: '/',
        protocol: 'http',
        routes: Router(),
        sessionConfig: {},
        useSession: false,
        useWebsocket: false,
        websocket: () => {},
        serviceName: 'Service',
        websocketPath: '/socket.io',
        mongodbURI: 'mongodb://mongo/chilco',
        postgresdbURI: 'postgres://chilco:chilco@postgres:5432/chilco',
        port: parseInt(process.env.PORT) || 8080,
        ...overwrite,
    };
}

function websocketMiddleware(ws: any) {
    return (req: Request, res: Response, next: () => void): void => {
        // @ts-ignore
        req.websocket = ws;
        next();
    };
}

export function createService({
    port,
    setup,
    routes,
    logType,
    basePath,
    websocket,
    useSession,
    serviceName,
    useWebsocket,
    sessionConfig,
    websocketPath = '/',
}: ServiceConfigType): Application {
    const app = express();

    let io = null;
    let server: any = app;
    if (useWebsocket) {
        server = new http.Server(app);
        io = socketIO(server, { path: websocketPath });
        io.adapter(redis({ host: 'redis', port: 6379 }));
    }

    app.use(cors({ credentials: true, optionsSuccessStatus: 200 }));
    app.use(morgan(logType));

    app.use(helmet());
    app.use(compression());
    app.use(express.json());
    app.use(cookieParser());

    app.set('trust proxy', 1);
    if (useSession) {
        app.use(
            session({
                resave: false,
                saveUninitialized: true,
                key: `${serviceName}.sid`,
                secret: generateKey(32),
                ...sessionConfig,
            }),
        );
    }

    if (useWebsocket) {
        io.on('connection', ws => websocket(ws));
        io.on('error', err => console.error(err));
        app.use(websocketMiddleware(io));
    }

    if (setup) {
        setup(app);
    }

    app.use(basePath, routes);

    app.use('*', (req, res): void => {
        createErrorResponse(res, 404);
    });

    server.listen(port, (): void => {
        console.log(`${serviceName} is up and running...`);
    });

    return app;
}
