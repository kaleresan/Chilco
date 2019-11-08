import { Schema } from 'mongoose';

export const ResetTokenSchema = new Schema(
    {
        accountId: {
            type: String,
            required: true,
        },
        companyId: {
            type: String,
            required: true,
        },
        expire: {
            type: Date,
            required: false,
            default: new Date(new Date().getTime() + 1000 * 60 * 60),
        },
    },
    { timestamps: true },
);
