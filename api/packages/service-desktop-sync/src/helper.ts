import jwt from 'jsonwebtoken';
import { AuthToken } from '@chilco/models';
import { config } from './config';

export const getRegisterToken = (): string => {
  const auth = new AuthToken();
  auth.save();
  return jwt.sign({ id: auth._id }, config.settings.jwtSecretKey, {
    expiresIn: '2 minutes',
  });
};
