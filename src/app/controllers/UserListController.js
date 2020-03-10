import { Op } from 'sequelize';
import User from '../models/User';

class UserListController {
  async index(req, res) {
    const {
      page = 1,
      name = '%',
      field = 'id',
      order = 'asc',
      id = 0,
      gender = 'male',
    } = req.query;

    const users = await User.findAll({
      where: {
        name: {
          [Op.like]: name,
        },
        id: {
          [Op.gt]: id,
        },
        gender,
      },
      order: [[field, order]],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(users);
  }
}

export default new UserListController();
