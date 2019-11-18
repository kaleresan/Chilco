import mongoose from 'mongoose';
import { AccountSchema } from './schema';
import { writeValueToObject } from '../helper';

AccountSchema.methods.getAuthResponse = function() {
    return {
        id: this._id,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        expire: this.expire,
        activated: this.activated,
    };
};
AccountSchema.methods.getPublicResponse = function() {
    return {
        id: this._id,
        email: this.email,
        lastname: this.lastname,
        firstname: this.firstname,
    };
};
AccountSchema.methods.changeByObject = function({
    lastname,
    firstname,
}) {
    writeValueToObject(this, 'lastname', lastname);
    writeValueToObject(this, 'firstname', firstname);
};

export const Account = mongoose.model('accounts', AccountSchema);
export default Account;
