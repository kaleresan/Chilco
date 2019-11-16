import config from './config';
import { Application } from 'express';
import { createProxy } from '@chilco/common-service';

export async function APIGateway(): Promise<Application> {
    return createProxy(config);
}
