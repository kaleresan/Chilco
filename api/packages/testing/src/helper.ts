import mongoose from 'mongoose';
import passwordHash from 'password-hash';
import passwordGenerator from 'generate-password';

export function generateEmail(): string {
    return `${passwordGenerator.generate({
        length: 10,
        numbers: false,
    })}@example.com`;
}
export function generatePassword(): string {
    return passwordGenerator.generate({
        length: 10,
        numbers: true,
    });
}

export function decryptePassword(password: string): string {
    return passwordHash.generate(password);
}
export function generateObjectId() {
    return mongoose.Types.ObjectId();
}
