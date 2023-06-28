import express from 'express';
import departmentRouter from '../modules/academicDepartment/department.route';
import facultyRouter from '../modules/academicFaculty/faculty.route';
import academicRouter from '../modules/academicSemester/academic.route';
import routerUser from '../modules/user/user.route';
import studentRouter from '../modules/student/student.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: routerUser,
  },
  {
    path: '/students',
    route: studentRouter,
  },
  {
    path: '/academic',
    route: academicRouter,
  },
  {
    path: '/faculty',
    route: facultyRouter,
  },
  {
    path: '/department',
    route: departmentRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/user', routerUser);
// router.use('/academic', academicRouter);

export default router;
