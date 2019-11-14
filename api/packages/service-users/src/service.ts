import { Application } from 'express';
import {
    createService,
    createPostgresDBConnection,
} from '@chilco/common-service';

import config from './config';

export async function UsersService(): Promise<Application> {
    await createPostgresDBConnection(config);
    return createService(config);
}
