import express from 'express';
import facultyRouter from '../modules/academicFaculty/faculty.route';
import academicRouter from '../modules/academicSemester/academic.route';
import routerUser from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: routerUser,
  },
  {
    path: '/academic',
    route: academicRouter,
  },
  {
    path: '/faculty',
    route: facultyRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/user', routerUser);
// router.use('/academic', academicRouter);

export default router;
