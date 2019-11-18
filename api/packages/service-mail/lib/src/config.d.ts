import { ServiceConfigType } from '@chilco/common-service';
export declare const mailTransport: any;
interface MailConfigType extends ServiceConfigType {
    transport?: any;
}
export declare const config: MailConfigType;
export default config;
