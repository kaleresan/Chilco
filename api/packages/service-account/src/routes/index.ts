import { Router } from 'express';

import { getAccountMiddleware } from '../middlewares/getAccount';

import { changeAccount } from './put/changeAccount';
import { getCurrentAccount } from './get/getCurrentAccount';

const routes = Router();

routes.use(getAccountMiddleware);

routes.use(getCurrentAccount);
routes.use(changeAccount);

export { routes };
