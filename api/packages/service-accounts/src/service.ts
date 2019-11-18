import { Application } from 'express';
import {
    createService,
    createMongoDBConnection,
} from '@chilco/common-service';

import config from './config';

export async function AccountService(): Promise<Application> {
    await createMongoDBConnection(config);
    return createService(config);
}
