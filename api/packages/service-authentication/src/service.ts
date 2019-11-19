import {
    createService,
    createMongoDBConnection,
} from '@chilco/common-service';

import config from './config';

export async function AuthenticationService(): Promise<any> {
    await createMongoDBConnection(config);
    return createService(config);
}
