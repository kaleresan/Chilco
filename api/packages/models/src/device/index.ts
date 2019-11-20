import mongoose from 'mongoose';
import { DeviceSchema } from './schema';

export const Device = mongoose.model(
  'device_tokens',
  DeviceSchema,
);
