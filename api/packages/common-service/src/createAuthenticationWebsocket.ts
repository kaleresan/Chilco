import { ServiceConfigType } from './createService';
import { checkWebSocketAuthentication } from "@chilco/middlewares";

export function createAuthenticatedSocket(service: ServiceConfigType, io: any): void {
    try {
        const {
            isWebsocketSecure,
            isWebsocketSecureOptional,
        } = service;


        if (isWebsocketSecure || isWebsocketSecureOptional) {
            io.use(checkWebSocketAuthentication(service, isWebsocketSecureOptional));
        }
    } catch (err) {
        console.log('Websocket cannot start');
    }
}
