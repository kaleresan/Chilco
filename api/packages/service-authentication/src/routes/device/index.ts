import { Router } from 'express';

import { getAuthTokenForDevice } from './post/getAuthTokenForDevice';
import { checkDeviceAuthentication } from './post/checkDeviceAuthentication';

const deviceRoutes = Router();

deviceRoutes.use(getAuthTokenForDevice);
deviceRoutes.use(checkDeviceAuthentication);

export { deviceRoutes };
