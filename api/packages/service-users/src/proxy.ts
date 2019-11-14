import { Application } from 'express';
import {
    ServiceConfigType,
    createServiceProxy,
    createServiceProxyConfigFromServiceConfig,
    createBlacklistedRouteConfig,
} from '@chilco/common-service';

import { config } from './config';

export function proxy(app: Application, proxyServiceConfig: ServiceConfigType) {
    const serviceProxy = createServiceProxyConfigFromServiceConfig(config, {
        blacklist: [
            createBlacklistedRouteConfig('/', 'POST'),
            createBlacklistedRouteConfig('/:id/authToken', 'POST'),
        ],
    });
    createServiceProxy(app, proxyServiceConfig, serviceProxy);
}
