import { routes } from './routes';
import {
    createServiceConfig,
    ServiceConfigType,
} from '@chilco/common-service';
import {
    getUsersModel,
    getProcessModel,
    getSettingsModel,
    getProcessGroupModel,
    getProcessToProgressGroupModel,
} from "@chilco/models";

interface AuthenticationConfigType extends ServiceConfigType {
    settings?: {
        resetURL: string;
        resetKey: string;
        authenticationKey: string;
    };
}

export const config: AuthenticationConfigType = createServiceConfig({
    routes,
    proxyRoute: '/',
    serviceName: 'service-users',
    models: [getUsersModel, getSettingsModel, getProcessModel, getProcessGroupModel, getProcessToProgressGroupModel],
});
export default config;
