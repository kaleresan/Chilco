import { ServiceConfigType } from '@chilco/common-service';
export declare class MailServiceBridge {
    private service;
    private serviceConfig;
    constructor(serviceConfig: ServiceConfigType);
    sendMail(body: {
        to: string;
        html: string;
        from?: string;
        text?: string;
        subject: string;
    }): Promise<any>;
    sendPasswordResetMail(body: {
        to: string;
        name: string;
        from?: string;
        text?: string;
        subject?: string;
        resetURL: string;
    }): Promise<any>;
    sendConfirmationMail(body: {
        to: string;
        from?: string;
        text?: string;
        subject?: string;
        firstname: string;
        confirmUrl: string;
    }): Promise<any>;
}
