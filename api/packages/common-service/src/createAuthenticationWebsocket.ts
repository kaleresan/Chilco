import { ServiceConfigType } from './createService';

export function createAuthenticatedSocket(service: ServiceConfigType, io: any, authenticationFunction: (req: any, next: () => void) => any): void {
    try {
        const {
            isWebsocketSecure,
            isWebsocketSecureOptional,
        } = service;


        if (isWebsocketSecure || isWebsocketSecureOptional) {
            io.use(authenticationFunction);
        }
    } catch (err) {
        console.log('Websocket cannot start');
    }
}
