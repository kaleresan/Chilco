import mongoose from 'mongoose';
import { UserSchema } from './schema';
import { writeValueToObject } from '../helper';

UserSchema.methods.getResponse = function() {
    return {
        id: this._id,
        username: this.username,
        accountId: this.accountId,
        settingId: this.settingId,
    };
};
UserSchema.methods.changeByObject = function({
    username,
    settingId,
}) {
    writeValueToObject(this, 'settingId', settingId);
    writeValueToObject(this, 'username', username);
};

export const User = mongoose.model('users', UserSchema);
export default User;
