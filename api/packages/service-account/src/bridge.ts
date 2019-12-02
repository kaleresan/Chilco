import { Request } from 'express';
import {
    ServiceConfigType,
    getServiceResponseData,
    createServiceCommunicator,
} from '@chilco/common-service';
import { getAccountHeader } from '@chilco/generic';

import config from './config';

export class AccountServiceBridge {
    private service: any;
    private serviceConfig: ServiceConfigType;

    public constructor(serviceConfig: ServiceConfigType) {
        this.serviceConfig = serviceConfig;
        this.service = createServiceCommunicator(config, serviceConfig);
    }

    public async getCurrentAccount(req: Request) {
        return getServiceResponseData(
            await this.service.get(`/`, {
                headers: getAccountHeader(req),
            }),
        );
    }

}
