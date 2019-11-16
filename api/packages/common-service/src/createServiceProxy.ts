import proxy from 'http-proxy-middleware';
import { Router, Application } from 'express';

import {
    checkAuthentication,
    checkBlackListedRoutes,
} from '@chilco/middlewares';

import { ServiceConfigType } from './createService';
import { BlacklistedRouteType } from '@chilco/types';
import { createErrorResponse } from './createErrorResponse';

export interface ProxyConfigType {
    route: string;
    target: string;
    next?: boolean;
    pathRewrite: any;
    isSecure?: boolean;
    websocketPath?: string;
    useWebsocket?: boolean;
    isSecurityOptional?: boolean;
    blacklist?: BlacklistedRouteType[];
}

export function getServiceURLFromServiceConfig(config: ServiceConfigType) {
    return `http://${config.serviceName}:${config.port}/`;
}

export function createServiceProxyConfigFromServiceConfig(
    config: ServiceConfigType,
    overwrite: object = {},
): ProxyConfigType {
    return {
        pathRewrite: null,
        useWebsocket: false,
        isSecurityOptional: false,
        route: config.proxyRoute || '/',
        target: getServiceURLFromServiceConfig(config),
        websocketPath: config.websocketPath || '/socket.io',
        isSecure: false,
        blacklist: [],
        ...overwrite,
    };
}

export function createServiceProxyConfig(
    overwrite: ProxyConfigType | {},
): ProxyConfigType {
    return {
        route: '/',
        blacklist: [],
        isSecure: false,
        pathRewrite: null,
        useWebsocket: false,
        isSecurityOptional: false,
        websocketPath: '/socket.io',
        target: 'http://localhost:8080/',
        ...overwrite,
    };
}

export function proxyController(config: any, proxy: any) {
    return (req, res, next) => {
        if (config.selfHandleResponse) {
            config.proxyRes = function(proxyResponse) {
                req.proxyResponse = proxyResponse;
                next();
            };
        }

        proxy(req, res, next);
    };
}

export function createBlacklistedRouteConfig(
    path: string = '/',
    method: string = 'GET',
): BlacklistedRouteType {
    return {
        path,
        method,
    };
}
export function createServiceProxy(
    app: Application | Router,
    proxyService: ServiceConfigType,
    {
        route,
        target,
        pathRewrite,
        blacklist = [],
        next = false,
        isSecure = false,
        useWebsocket = false,
        isSecurityOptional = false,
    }: ProxyConfigType,
) {
    if (isSecure) {
        app.use(route, checkAuthentication(proxyService, isSecurityOptional));
    }

    if (blacklist) {
        app.use(route, checkBlackListedRoutes(route, blacklist));
    }

    const proxyConfig = {
        target,
        secure: false,
        changeOrigin: true,
        protocolRewrite: 'http',
        selfHandleResponse: next,
        pathRewrite: { [route]: '/' },
        onError: (err, req, res) => {
            console.error('err', err);
            createErrorResponse(res, 503);
        },
    };

    if (useWebsocket) {
        // @ts-ignore
        proxyConfig.ws = true;
    }

    if (pathRewrite) {
        proxyConfig.pathRewrite = pathRewrite;
    }

    const proxyMiddleware = proxy(proxyConfig);
    app.use(route, proxyController(proxyConfig, proxyMiddleware));

    return { proxy: proxyMiddleware };
}
