import mongoose from 'mongoose';
import { ResetTokenSchema } from './schema';

export const ResetToken = mongoose.model('reset_tokens', ResetTokenSchema);
