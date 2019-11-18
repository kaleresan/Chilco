import { Application } from 'express';
import {
    createService,
    createMongoDBConnection,
} from '@chilco/common-service';

import config from './config';

export async function DesktopSyncService(): Promise<Application> {
    await createMongoDBConnection(config);
    return createService(config);
}
