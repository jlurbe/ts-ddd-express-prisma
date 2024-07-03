import type { ErrorCodes } from '../constants/error-codes';

export class CodedError extends Error {
  code: ErrorCodes;
  details: any;

  constructor(message: string, code: ErrorCodes, details: any) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = 'CodedError';
  }
}
