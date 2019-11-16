import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ServiceConfigType } from './createService';

interface ServiceCommunicationType {
    headers?: any;
    port?: number;
    service?: string;
    timeout?: number;
    protocol?: string;
}
export function createServiceCommunicator(
    { serviceName, port, protocol }: ServiceConfigType,
    { serviceName: originServiceName }: ServiceConfigType,
    { headers = {}, timeout = 1000 }: ServiceCommunicationType = {},
): AxiosInstance {
    return axios.create({
        timeout,
        baseURL: `${protocol}://${serviceName}:${port}/`,
        headers: {
            ...headers,
            'X-ORIGIN-SERVICE': originServiceName,
        },
    });
}
export function getServiceResponseData(response: AxiosResponse) {
    return response.data.data;
}
