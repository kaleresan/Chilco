import { routes } from './routes';
import {
    ServiceConfigType,
    createServiceConfig,
} from '@chilco/common-service';
import { Application } from 'express';
import {
    readAccountIdFromHeader,
} from '@chilco/middlewares';

export const config: ServiceConfigType = createServiceConfig({
    routes,
    proxyRoute: '/account',
    serviceName: 'service-account',
    setup: (app: Application) => {
        app.use(readAccountIdFromHeader);
    },
    port: 8081,
});
export default config;
