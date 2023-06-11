import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
import academicRouter from './app/modules/academicSemester/academic.route';
import routerUser from './app/modules/user/user.route';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', routerUser);
app.use('/api/academic', academicRouter);

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // throw new ApiError(400, 'ore bana error')
//   //   res.send('I am fine to get this server')
//   //   next("failed to server")
//   // Promise.reject(new Error('unhandled rejection'))
//   console.log(x)
// })

app.use(globalErrorHandler);

export default app;
