import { Schema } from 'mongoose';

export const AuthTokenSchema = new Schema(
    {
        valid: {
            type: Boolean,
            required: false,
            default: false,
        },
        owner: {
            type: String,
            required: false,
            default: null,
        },
    },
    { timestamps: true },
);
