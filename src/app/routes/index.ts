import express from 'express';
import departmentRouter from '../modules/academicDepartment/department.route';
import facultyRouter from '../modules/academicFaculty/academicFaculty.route';
import academicRouter from '../modules/academicSemester/academicSem.route';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { FacultyRoutes } from '../modules/faculty/faculty.route';
import { ManageDepartRoutes } from '../modules/managementDepart/manageDepart.route';
import studentRouter from '../modules/student/student.route';
import routerUser from '../modules/user/user.route';

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
    path: '/academicSem',
    route: academicRouter,
  },
  {
    path: '/academicFaculty',
    route: facultyRouter,
  },
  {
    path: '/academicDepartment',
    route: departmentRouter,
  },
  {
    path: '/manage-depart',
    route: ManageDepartRoutes,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/user', routerUser);
// router.use('/academic', academicRouter);

export default router;
