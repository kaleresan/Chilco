import jsonwebtoken from 'jsonwebtoken';
import { AuthToken } from '@chilco/models';
import { config } from './config';

export const getRefreshToken = (): string => {
  const auth = new AuthToken();
  auth.save();
  return jsonwebtoken.sign({ id: auth._id }, config.settings.jwtSecretKey, {
    expiresIn: '2 minutes',
  });
};
