import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // Virtual field
        password_hash: Sequelize.STRING,
        telephone: Sequelize.INTEGER,
        gender: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default User;
