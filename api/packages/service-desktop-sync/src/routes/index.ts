import { Router } from 'express';
import { readAccountIdFromHeader } from "@chilco/middlewares";

import { getActiveDevices } from './get/getActiveDevices';
import { registerNewDevice } from './post/registerNewDevice';

const routes = Router();

routes.use(registerNewDevice);

// Secure Routes
routes.use(readAccountIdFromHeader);
routes.use(getActiveDevices);

export { routes };
