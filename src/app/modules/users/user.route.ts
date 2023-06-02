import express from 'express'
import { createUser, getAllUsers } from './user.controller'
const routerUser = express.Router()

routerUser.get('/', getAllUsers)
routerUser.post('/createUser', createUser)

export default routerUser
