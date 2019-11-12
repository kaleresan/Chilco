import { Router } from 'express';
import {
    sendMailRouter,
    sendConfirmationRouter,
    sendPasswordResetRouter,
} from './post';

const routes = Router();

routes.use(sendMailRouter);
routes.use(sendConfirmationRouter);
routes.use(sendPasswordResetRouter);

export { routes };
