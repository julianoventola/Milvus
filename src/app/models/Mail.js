import Sequelize, { Model } from 'sequelize';

class Mail extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.INTEGER,
        user_name: Sequelize.STRING,
        mail_type: Sequelize.STRING,
        send_status: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Mail;
