import type { ErrorCodes } from '../constants/error-codes';

export type ErroMessage = {
  code: ErrorCodes;
  message: string;
  details?: any;
};
