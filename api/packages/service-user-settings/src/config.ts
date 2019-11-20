import { routes } from './routes';
import {
    createServiceConfig,
    ServiceConfigType,
} from '@chilco/common-service';
import {
    getProcessModel,
    getSettingsModel,
    getProcessGroupModel,
    getProcessToProgressGroupModel,
} from "@chilco/models";
import { readAccountIdFromHeader } from "@chilco/middlewares";

interface AuthenticationConfigType extends ServiceConfigType {
    settings?: {
        resetURL: string;
        resetKey: string;
        authenticationKey: string;
    };
}

export const config: AuthenticationConfigType = createServiceConfig({
    routes,
    port: 8083,
    proxyRoute: '/settings',
    serviceName: 'service-user-settings',
    setup: (app) => {
        app.use(readAccountIdFromHeader);
    },
    models: [getSettingsModel, getProcessModel, getProcessGroupModel, getProcessToProgressGroupModel],
});
export default config;
