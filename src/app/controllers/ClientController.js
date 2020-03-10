import * as Yup from 'yup';
import Client from '../models/Client';

class ClientController {
  // List all clients
  async index(req, res) {
    const allClients = await Client.findAll();
    return res.json(allClients);
  }

  // Create new client
  async store(req, res) {
    const schema = Yup.object().shape({
      cnpj: Yup.string().required(),
      fantasy_name: Yup.string().required(),
      company_name: Yup.string().required(),
      cep: Yup.string().required(),
      logradouro: Yup.string().required(),
      number: Yup.string().required(),
      complement: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Por favor, preencha os campos corretamente.' });
    }

    const clientExists = await Client.findOne({
      where: { company_name: req.body.company_name },
    });

    if (clientExists) {
      return res.status(400).json({
        error: 'Razão social já utilizado, por favor, utilize outra!',
      });
    }

    const newClient = await Client.create(req.body);
    return res.json(newClient);
  }

  // Update client
  async update(req, res) {
    const schema = Yup.object().shape({
      cnpj: Yup.string(),
      fantasy_name: Yup.string(),
      company_name: Yup.string(),
      cep: Yup.string(),
      logradouro: Yup.string(),
      number: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Por favor, preencha os campos corretamente.' });
    }

    const { company_name } = req.body;
    const client = await Client.findByPk(req.params.id);

    // Valida se o cliente existe
    if (!client) {
      return res.status(400).json({
        error: 'Cliente não encontrado com esse id!',
      });
    }

    // Valida se não existe uma razão social igual já cadastrada
    if (company_name && company_name !== client.company_name) {
      const clientExists = await Client.findOne({ where: { company_name } });

      if (clientExists) {
        return res.status(400).json({
          error: 'Razão social já utilizado, por favor, utilize outra!',
        });
      }
    }

    const updatedClient = await client.update(req.body);
    return res.json(updatedClient);
  }

  // Delete client
  async delete(req, res) {
    const client = await Client.findByPk(req.params.id);
    if (!client) {
      return res.status(400).json({
        error: 'Cliente não encontrado com esse id!',
      });
    }
    await client.destroy();
    return res.json({ ok: true });
  }
}

export default new ClientController();
