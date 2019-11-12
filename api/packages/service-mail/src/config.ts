import * as nodemailer from 'nodemailer';
import { routes } from './routes';
import {
    ServiceConfigType,
    createServiceConfig,
} from '@chilco/common-service';

export const mailTransport = nodemailer.createTransport({
    port: 465,
    host: 'smtp.example.com',
    secure: true,
    debug: true,
    auth: {
        user: 'username',
        pass: 'password',
    },
});

interface MailConfigType extends ServiceConfigType {
    transport?: any;
}

export const config: MailConfigType = createServiceConfig({
    routes,
    port: 8000,
    transport: mailTransport,
    serviceName: 'service-mail',
});
export default config;
