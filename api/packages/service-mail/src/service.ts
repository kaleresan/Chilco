import { Application } from 'express';
import { createService } from '@chilco/common-service';

import config from './config';

export async function MailService(): Promise<Application> {
    return createService(config);
}
