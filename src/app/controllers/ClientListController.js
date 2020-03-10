import { Op } from 'sequelize';
import Client from '../models/Client';

class ClientListController {
  async index(req, res) {
    const {
      page = 1,
      company_name = '%',
      field = 'id',
      order = 'asc',
      id = 0,
      complement = null,
    } = req.query;

    const clients = await Client.findAll({
      where: {
        company_name: {
          [Op.like]: company_name,
        },
        id: {
          [Op.gt]: id,
        },
        complement,
      },
      order: [[field, order]],
      limit: 5,
      offset: (page - 1) * 5,
    });

    return res.json(clients);
  }
}

export default new ClientListController();
