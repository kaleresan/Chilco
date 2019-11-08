// @flow
import { Schema } from 'mongoose';

const AccountSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        activated: {
            type: Boolean,
            default: true,
        },
        expire: {
            type: String,
            default: null,
            required: false,
        },
    },
    { timestamps: true },
);
export { AccountSchema };
