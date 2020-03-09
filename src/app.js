import express from 'express';
import routes from './routes';

import './database';

class App {
  // Cria o servidor
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Habilita o server trabalhar com Json
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
