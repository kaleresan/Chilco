import { Application } from 'express';
import {
    ServiceConfigType,
    createServiceProxy,
    createServiceProxyConfigFromServiceConfig,
} from '@chilco/common-service';

import { config } from './config';

export function proxy(app: Application, proxyServiceConfig: ServiceConfigType) {
    const serviceProxy = createServiceProxyConfigFromServiceConfig(config, {
        isSecure: true
    });
    createServiceProxy(app, proxyServiceConfig, serviceProxy);
}
