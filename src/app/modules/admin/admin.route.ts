import express from 'express';
import { validateRequest } from '../../middlwares/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';
const router = express.Router();

router.get('/:id', AdminController.getSingleAdmin);
router.get('/', AdminController.getAllAdmins);

router.delete('/:id', AdminController.deleteAdmin);

router.patch(
  '/:id',
  validateRequest(AdminValidation.updateAdmin),
  AdminController.updateAdmin
);

export const AdminRoutes = router;
