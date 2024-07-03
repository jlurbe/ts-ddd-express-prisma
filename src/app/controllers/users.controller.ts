import { type NextFunction, type Request, type Response } from 'express';
import {
  UpsertUserInput,
  User,
  UserCreated,
} from '../../Contexts/user/domain/entities/user';
import {
  CreateUserService,
  GetUserByIdService,
} from '../../Contexts/user/application';

export class UsersController {
  constructor(
    private readonly getUserByIdService: GetUserByIdService,
    private readonly createUserService: CreateUserService
  ) {}

  getById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { id } = req.params;
    try {
      const user: User = await this.getUserByIdService.run(parseInt(id));

      return res.json(user);
    } catch (error) {
      next(error);
    }
  };

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const userData: UpsertUserInput = req.body;
    try {
      const user: UserCreated = await this.createUserService.run(userData);

      return res.json(user);
    } catch (error) {
      next(error);
    }
  };
}
