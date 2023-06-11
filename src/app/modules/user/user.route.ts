import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';
import { createUser, getAllUsers } from './user.controller';
import { createUserZodSchema } from './user.validation';

const routerUser = express.Router();

routerUser.get('/', getAllUsers);
routerUser.post(
  '/createUser',
  validateRequest(createUserZodSchema),
  createUser
);

export default routerUser;
