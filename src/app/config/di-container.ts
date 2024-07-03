import { PrismaClient } from '@prisma/client';
import {
  CreateUserService,
  GetUserByIdService,
} from '../../Contexts/user/application';
import { UserPrismaRepository } from '../../Contexts/user/infrastructure/repositories/user-prisma-repository';

const prismaClient = new PrismaClient();
const userRepository: UserPrismaRepository = new UserPrismaRepository(
  prismaClient
);
export const getUserByIdService = new GetUserByIdService(userRepository);
export const createUserService = new CreateUserService(userRepository);
