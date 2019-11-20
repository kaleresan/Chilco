import { routes } from './routes';
import {
    createServiceConfig,
    ServiceConfigType,
} from '@chilco/common-service';
import { websocket } from './websocket';

interface AuthenticationConfigType extends ServiceConfigType {
    settings?: {
        jwtSecretKey: string;
    };
}

export const config: AuthenticationConfigType = createServiceConfig({
    routes,
    websocket,
    port: 8084,
    proxyRoute: '/dashboard-sync',
    useWebsocket: true,
    websocketPath: '/socket.io',
    serviceName: 'service-dashboard-sync',
    settings: {
        jwtSecretKey:
          'u?f2h=wzgv5d#98e(ejhgei(twbedce<-f57t?edt$gooßüp<32ocqvkj:zawfzfg<öbg@b<9gt3iu109rßp4_kg!',
    }
});
export default config;
