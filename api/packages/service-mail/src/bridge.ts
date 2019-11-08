import {
    ServiceConfigType,
    createServiceCommunicator,
    getServiceResponseData,
} from '@chilco/common-service';

import config from './config';

export class MailServiceBridge {
    private service: any;
    private serviceConfig: ServiceConfigType;

    public constructor(serviceConfig: ServiceConfigType) {
        this.serviceConfig = serviceConfig;
        this.service = createServiceCommunicator(config, serviceConfig);
    }

    public async sendMail(body: {
        to: string;
        html: string;
        from?: string;
        text?: string;
        subject: string;
    }) {
        return getServiceResponseData(await this.service.post('/send', body));
    }

    public async sendPasswordResetMail(body: {
        to: string;
        name: string;
        from?: string;
        text?: string;
        subject?: string;
        resetURL: string;
    }) {
        return getServiceResponseData(
            await this.service.post('/passwordReset', body),
        );
    }

    public async sendConfirmationMail(body: {
        to: string;
        from?: string;
        text?: string;
        subject?: string;
        firstname: string;
        confirmUrl: string;
    }) {
        return getServiceResponseData(
            await this.service.post('/confirmation', body),
        );
    }
}
