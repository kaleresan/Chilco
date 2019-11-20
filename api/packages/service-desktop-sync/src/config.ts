import { routes } from './routes';
import {
    createServiceConfig,
    ServiceConfigType,
} from '@chilco/common-service';
import { Application } from "express";
import { websocket } from './websocket';
import { readAccountIdFromHeader } from "@chilco/middlewares";

interface AuthenticationConfigType extends ServiceConfigType {
    settings?: {
        jwtSecretKey: string;
    };
}

export const config: AuthenticationConfigType = createServiceConfig({
    routes,
    websocket,
    port: 8084,
    useWebsocket: true,
    isWebsocketSecure: true,
    proxyRoute: '/desktop-sync',
    websocketPath: '/socket.io',
    isWebsocketSecureOptional: true,
    serviceName: 'service-desktop-sync',
    setup: (app: Application) => {
        app.use(readAccountIdFromHeader);
    },
    settings: {
        jwtSecretKey:
          'u?f2h=wzgv5d#98e(ejhgei(twbedce<-f57t?edt$gooßüp<32ocqvkj:zawfzfg<öbg@b<9gt3iu109rßp4_kg!',
    }
});
export default config;
