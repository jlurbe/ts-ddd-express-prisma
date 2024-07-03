import { PrismaClient } from '@prisma/client';
import { ErrorCodes } from '../../../../app/lib/error/constants/error-codes';
import { codifyError } from '../../../../app/lib/error/error-utils';
import { hashPassword } from '../../../../app/lib/hashUtils';

import type {
  User,
  UpsertUserInput,
  UserCreated,
} from '../../domain/entities/user';
import { type UserRepository } from '../../domain/repositories/user-repository';
import {
  PrismaUser,
  userCreatedMapper,
  userGetMapper,
} from './mapper/user-mapper';

export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getById(id: number): Promise<User | null> {
    try {
      const user = await this.prismaClient.users.findUnique({
        where: {
          id,
        },
      });

      return userGetMapper(user);
    } catch (error) {
      throw codifyError(
        new Error(`Error getting user: ${(error as Error).message}`),
        ErrorCodes.USER_NOT_RETRIEVED
      );
    }
  }

  async create(userData: UpsertUserInput): Promise<UserCreated> {
    userData.password = await hashPassword(userData.password);

    try {
      const createUser: PrismaUser = await this.prismaClient.users.create({
        data: userData,
      });

      if (!createUser) {
        throw codifyError(
          new Error('User cannot be created'),
          ErrorCodes.NOT_CREATED_USER
        );
      }

      return userCreatedMapper(createUser);
    } catch (error) {
      throw codifyError(
        new Error(`Error creating user: ${(error as Error).message}`),
        ErrorCodes.NOT_UPDATED_USER
      );
    }
  }
}
