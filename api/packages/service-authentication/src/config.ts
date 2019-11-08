import { routes } from './routes';
import {
    createServiceConfig,
    ServiceConfigType,
} from '@chilco/common-service';

interface AuthenticationConfigType extends ServiceConfigType {
    settings?: {
        resetURL: string;
        resetKey: string;
        authenticationKey: string;
    };
}

export const config: AuthenticationConfigType = createServiceConfig({
    routes,
    proxyRoute: '/auth',
    serviceName: 'service-authentication',
    settings: {
        resetURL: 'https://auth.chilco.de/reset/',
        resetKey: 'ihybwnrf08qhb<Jg!§1t3zegRUD2KHJRU2B',
        authenticationKey:
            // eslint-disable-next-line
            "iz3b4r8901^^h4zg19o3i1b4^!(413?x1",
    },
});
export default config;
