import { Router } from 'express';
import UserController from './app/controllers/UserController';
import ClientController from './app/controllers/ClientController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

import authMiddleware from './app/middlewares/auth';

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.delete);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

export default routes;
