import mongoose from 'mongoose';
import { AuthTokenSchema } from './schema';

export const AuthToken = mongoose.model(
    'authentication_tokens',
    AuthTokenSchema,
);
