import { Router } from 'express';
import { passwordReset } from './post/passwordReset';
import { changePassword } from './post/changePassword';

const resetRoutes = Router();

resetRoutes.use(passwordReset);
resetRoutes.use(changePassword);

export { resetRoutes };
