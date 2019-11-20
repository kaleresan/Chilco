// @flow
import { Schema } from 'mongoose';

const UserSchema = new Schema(
    {
        username: {
          type: String,
          required: true,
        },
        accountId: {
          type: String,
          required: true
        },
        settingsId: {
          type: String,
          required: false
        }
    },
    { timestamps: true },
);
export { UserSchema };
