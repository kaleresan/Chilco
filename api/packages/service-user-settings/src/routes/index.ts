import { Router } from 'express';

import { getAllSettings } from './get/getSettings';

const routes = Router();

routes.use(getAllSettings);

export { routes };
