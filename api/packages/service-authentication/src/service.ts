import { Application } from 'express';
import {
    createService,
    createMongoDBConnection,
} from '@chilco/common-service';

import config from './config';

export async function AuthenticationService(): Promise<Application> {
    await createMongoDBConnection(config);
    return createService(config);
}
