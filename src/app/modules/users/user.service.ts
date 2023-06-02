import config from '../../../config'
import { IUser } from './user.interface'
import User from './user.model'
import { generateUserId } from './user.utils'

const createServiceUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()

  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const newUser = await User.create(user)
  if (!newUser) {
    throw new Error('Failed to create user')
  }
  return newUser
}

export default {
  createServiceUser,
}
