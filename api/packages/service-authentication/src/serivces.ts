import { MailServiceBridge } from '@chilco/service-mail';

import config from './config';

export function getMailService() {
    return new MailServiceBridge(config);
}
