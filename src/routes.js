import { Router } from 'express';
import UserController from './app/controllers/UserController';
import UserListController from './app/controllers/UserListController';
import ClientController from './app/controllers/ClientController';
import ClientListController from './app/controllers/ClientListController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

import authMiddleware from './app/middlewares/auth';

// Clients routes
routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);
routes.delete('/clients/:id', ClientController.delete);

// Users routes
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// Filters list routes
routes.get('/list_users', UserListController.index);
routes.get('/list_clients', ClientListController.index);

// Login/Session route
routes.post('/sessions', SessionController.store);

// Login Middleware
routes.use(authMiddleware);

// Users routes - Authentication
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

export default routes;
