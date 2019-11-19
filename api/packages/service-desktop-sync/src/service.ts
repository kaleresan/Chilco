import {
    createService,
    createMongoDBConnection,
    createAuthenticatedSocket
} from '@chilco/common-service';

import config from './config';

export async function DesktopSyncService(): Promise<any> {
    await createMongoDBConnection(config);
    const { io } = createService(config);
    createAuthenticatedSocket(config, io);
}
