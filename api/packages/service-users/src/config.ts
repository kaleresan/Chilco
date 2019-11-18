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
    port: 8082,
    proxyRoute: '/users',
    serviceName: 'service-users',
});
export default config;
