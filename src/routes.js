import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Juliano Ventola',
    email: 'juliano@gmail.com',
    password_hash: '123456',
    telephone: 1144447777,
    gender: 'male',
  });
  res.json(user);
});

export default routes;
