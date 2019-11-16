import { AccountType } from '@chilco/types';

export function getAccountName({ firstname, lastname }: AccountType) {
    return `${firstname} ${lastname}`;
}
