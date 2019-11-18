import { Router } from 'express';
import { registerNewDevice } from './post/registerNewDevice';

const routes = Router();

routes.use(registerNewDevice);

export { routes };
