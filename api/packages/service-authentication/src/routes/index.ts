import { Router } from 'express';

import { login } from './post/login';
import { register } from './post/register';
import { checkAuthentication } from './post/checkAuthentication';
import { getAuthTokenForUser } from './post/getAuthTokenForUser';

import { resetRoutes } from './reset';
import { deviceRoutes } from './device';

const routes = Router();

routes.use(login);
routes.use(register);
routes.use(getAuthTokenForUser);
routes.use(checkAuthentication);

routes.use('/device', deviceRoutes);
routes.use('/passwordReset', resetRoutes);

export { routes };
