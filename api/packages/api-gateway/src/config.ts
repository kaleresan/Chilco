import { Application } from 'express';

import { createServiceConfig } from '@chilco/common-service';

// @ts-ignore
import { proxy as authenticationProxy } from '@chilco/service-authentication';
// @ts-ignore
import { proxy as userSettingsProxy } from '@chilco/service-user-settings';
// @ts-ignore
import { proxy as usersProxy } from '@chilco/service-users';
// @ts-ignore
import { proxy as accountsProxy } from '@chilco/service-accounts';
// @ts-ignore
import { proxy as dashboardSyncProxy } from '@chilco/service-dashboard-sync';
// @ts-ignore
import { proxy as desktopSyncProxy } from '@chilco/service-desktop-sync';

const config = createServiceConfig({
    port: 5000,
    serviceName: 'api-gateway',
});

config.setup = (app: Application) => {
    authenticationProxy(app, config);
    userSettingsProxy(app, config);
    usersProxy(app, config);
    accountsProxy(app, config);
    dashboardSyncProxy(app, config);
    desktopSyncProxy(app, config);
};
export default config;
