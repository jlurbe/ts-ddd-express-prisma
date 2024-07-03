import { Router } from 'express';
import { UsersController } from '../controllers/users.controller';
import { getUserByIdService, createUserService } from '../config/di-container';

const usersRouter = Router();
const usersController = new UsersController(
  getUserByIdService,
  createUserService
);

usersRouter.get('/:id', usersController.getById);
usersRouter.post('/', usersController.create);

export { usersRouter };
