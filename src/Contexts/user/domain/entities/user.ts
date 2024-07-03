export type User = {
  id: number | bigint;
  username: string;
  email: string;
  password: string;
  longitude: number;
  latitude: number;
  browserLanguage: string;
  ctime?: string;
  mtime?: string;
};

export type UpsertUserInput = Omit<User, 'id'>;
export type UserPatchData = Partial<Omit<User, 'id'>>;
export type UserCreated = Omit<User, 'password'>;
