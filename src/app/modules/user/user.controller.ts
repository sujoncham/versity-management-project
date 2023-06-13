import { NextFunction, Request, Response } from 'express';

import { catchAsync } from '../../../shared/catchAsync';
import User from './user.model';
import serviceUser from './user.service';

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: users,
    });
    next();
  }
);

export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await serviceUser.createServiceUser(user);

    res.status(200).json({
      status: 'success',
      message: 'User created successfully',
      data: result,
    });

    next();
  }
);
