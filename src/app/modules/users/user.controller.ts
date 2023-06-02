import { Request, Response } from 'express'
import serviceUser from '../../modules/users/user.service'
import User from './user.model'

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find()
  res.status(200).json({
    status: 'success',
    data: users,
  })
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await serviceUser.createServiceUser(user)

    res.status(200).json({
      status: 'success',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      data: error,
    })
  }
}
