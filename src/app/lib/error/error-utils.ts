import { ErrorCodes } from './constants/error-codes';
import { CodedError } from './models/coded-error';
import type { ErroMessage } from './types/error-message';

export const codifyError = (
  err: Error,
  code: ErrorCodes,
  details?: any
): CodedError => {
  const codedError = new CodedError(err.message, code, details);
  codedError.stack = err.stack; // Preserve the original stack trace

  return codedError;
};

export const errorMessage = (error: CodedError): ErroMessage => {
  return {
    code: error.code || ErrorCodes.INTERNAL_SERVER_ERROR,
    message: error.message || 'Internal server error',
    details: error.details ? JSON.parse(error.details) : undefined,
  };
};
