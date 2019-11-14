import { Application } from 'express';

import { createServiceConfig } from '@chilco/common-service';

// @ts-ignore
import { proxy as authenticationProxy } from '@chilco/service-authentication';

const config = createServiceConfig({
    port: 5000,
    serviceName: 'api-gateway',
});

config.setup = (app: Application) => {
    authenticationProxy(app, config);
};
export default config;
