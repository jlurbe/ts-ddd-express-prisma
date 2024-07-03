import type { UpsertUserInput, User, UserCreated } from '../entities/user';

// type UpsertUserInput = Omit<User, 'id' | 'ctime' | 'mtime'>;
// type UpsertedUser = Omit<User, 'password' | 'ctime' | 'mtime'>;

export interface UserRepository {
  /**
   * Retrieve a user from id
   * @param {number} id
   * @returns {User}
   */
  getById(id: number): Promise<User | null>;

  // /**
  //  * Create user
  //  * @param {UpsertUserInput} userInput
  //  * @returns {UpsertedUser}
  //  */
  create(userInput: UpsertUserInput): Promise<UserCreated>;

  // /**
  //  * Update user
  //  * @param {UpsertUserInput} userInput
  //  * @returns {UpsertedUser}
  //  */
  // update(userInput: UpsertUserInput): Promise<UpsertedUser>;

  // /**
  //  * Delete user from id
  //  * @param {number} id
  //  * @returns {boolean}
  //  */
  // delete(id: number): Promise<boolean>;
}
