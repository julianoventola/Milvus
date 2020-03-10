import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  // List all users
  async index(req, res) {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  }

  // Create new user
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      telephone: Yup.string().required(),
      gender: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Por favor, preencha os campos corretamente.' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({
        error:
          'Email já utilizado, por favor, utilize outro email para cadastro!',
      });
    }

    const { id, name, email, telephone, gender } = await User.create(req.body);
    return res.json({ id, name, email, telephone, gender });
  }

  // Update user
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string(),
      telephone: Yup.string(),
      gender: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Por favor, preencha os campos corretamente.' });
    }

    const { email } = req.body;

    const user = await User.findByPk(req.userId);

    // Valida a existencia do email caso o email seja alterado
    if (email && email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({
          error:
            'Email já utilizado, por favor, utilize outro email para alteração!',
        });
      }
    }
    await user.update(req.body);
    const { id, name } = await User.findByPk(req.userId);
    return res.json({ id, name, email });
  }

  // Delete user
  async delete(req, res) {
    const user = await User.findByPk(req.userId);
    await user.destroy();
    return res.json({ ok: true });
  }
}

export default new UserController();
