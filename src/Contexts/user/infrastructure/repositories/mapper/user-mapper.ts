import { Decimal } from '@prisma/client/runtime/library';
import { User, UserCreated } from '../../../domain/entities/user';

export type PrismaUser = {
  id: number;
  username: string;
  email: string;
  password: string;
  longitude: Decimal;
  latitude: Decimal;
  browserLanguage: string;
  ctime: Date;
  mtime: Date;
};

export const userGetMapper = (user: PrismaUser | null): User | null => {
  if (!user) {
    return null;
  }

  return {
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    longitude: user.longitude ? user.longitude.toNumber() : 0,
    latitude: user.latitude ? user.latitude.toNumber() : 0,
    browserLanguage: user.browserLanguage || '',
    ctime: user.ctime ? user.ctime.toISOString() : undefined,
    mtime: user.mtime ? user.mtime.toISOString() : undefined,
  };
};

export const userCreatedMapper = (user: PrismaUser): UserCreated => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    longitude: user.longitude ? user.longitude.toNumber() : 0,
    latitude: user.latitude ? user.latitude.toNumber() : 0,
    browserLanguage: user.browserLanguage || '',
    ctime: user.ctime ? user.ctime.toISOString() : undefined,
    mtime: user.mtime ? user.mtime.toISOString() : undefined,
  };
};
