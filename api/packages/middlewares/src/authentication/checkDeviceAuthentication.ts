import {createServiceCommunicator, getServiceResponseData, ServiceConfigType} from "@chilco/common-service";
import {config as authenticationServiceConfig} from "@chilco/service-authentication";
import {ACCESS_TOKEN_HEADER, ACCOUNT_ID_HEADER} from "@chilco/messages";

export function handleWebsocketError(
  isSecurityOptional: boolean,
  next: (error?: Error) => void,
) {
  if (isSecurityOptional) {
    next();
    return;
  }

  next(new Error("not authorized"));
}

export function checkWebSocketDeviceAuthentication(
  service: ServiceConfigType,
): (req: any, next: () => void) => Promise<void> {
  const connection = createServiceCommunicator(
    authenticationServiceConfig,
    service,
  );

  return async (socket: any, next: (error?: Error) => void) => {
    try {
      const token = socket.handshake.query[ACCESS_TOKEN_HEADER];

      if (!token) {
        handleWebsocketError(service.isWebsocketSecure, next);
        return;
      }


      const { accountId } = getServiceResponseData(
        await connection.post('/device/', {
          token,
        }),
      );

      if (!accountId) {
        handleWebsocketError(service.isWebsocketSecure, next);
        return;
      }

      socket[ACCOUNT_ID_HEADER] = accountId;
      socket.join(accountId);
      next();
    } catch (err) {
      console.error(err);
      handleWebsocketError(service.isWebsocketSecure, next);
      return;
    }
  };
}
