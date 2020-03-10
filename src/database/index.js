import Sequelize from 'sequelize';

import User from '../app/models/User';
import Client from '../app/models/Client';
import Mail from '../app/models/Mail';

import databaseConfig from '../config/database';

const models = [User, Client, Mail];

class Database {
  constructor() {
    this.init();
  }

  // Conexão Postgres
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
