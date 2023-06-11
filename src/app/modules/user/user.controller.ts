import { RequestHandler } from 'express';

import User from './user.model';
import serviceUser from './user.service';

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await serviceUser.createServiceUser(user);

    res.status(200).json({
      status: 'success',
      data: result,
    });
  } catch (error) {
    next();
  }
};
