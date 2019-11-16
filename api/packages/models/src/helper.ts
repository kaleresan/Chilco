export function writeValueToObject(object: object, key: any, value: any) {
    if (
        !value &&
        value !== null &&
        typeof value !== 'boolean' &&
        typeof value !== 'number'
    ) {
        return;
    }

    if (typeof value === 'string') {
        object[key] = value.trim();
        return;
    }

    object[key] = value;
}
