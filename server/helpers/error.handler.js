import { logger } from '@configs/logger';
import AlreadyExistError from '@errors/AlreadyExistError';
import AuthError from '@errors/AuthError';
import BadRequestError from '@errors/BadRequestError';
import NotFoundError from '@errors/NotFoundError';
import { parseAndSend } from '@helpers/response-wrapper';
import { JsonWebTokenError } from 'jsonwebtoken';
import { Error as DBError } from 'mongoose';

/***
 * Central Error handler to precisely handle all the errors
 * throughout the application
 * @param: {response} - Response object to send end user
 * @param: {error} - Error thrown throughout the app
 * @returns: {response} - Response with appropraite status code...
 */

export function handleError(response, error) {
  if (
    error instanceof SyntaxError ||
    error instanceof ReferenceError ||
    error instanceof TypeError ||
    error instanceof DBError
  ) {
    return parseAndSend(
      response,
      false,
      500,
      'Oops! Something went wrong. Please try again later.'
    );
  } else if (
    error instanceof NotFoundError ||
    error instanceof AlreadyExistError ||
    error instanceof BadRequestError
  ) {
    logger.warn(error);
    return parseAndSend(response, false, error.statusCode, error.message);
  } else if (error instanceof AuthError || error instanceof JsonWebTokenError) {
    return parseAndSend(
      response,
      false,
      error.statusCode || 403,
      error.message
    );
  } else {
    logger.error(error);
    return parseAndSend(response, false, 400, error.message || error.msg);
  }
}