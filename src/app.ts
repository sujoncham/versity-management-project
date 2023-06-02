import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import routerUser from './app/modules/users/user.route'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('I am fine to get this server')
  next()
})

app.use('/api/user', routerUser)

export default app
