import { Schema } from 'mongoose';

export const DeviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    accountId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
