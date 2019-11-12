export function removeDuplicatesFromArray(array: any[]): any[] {
    return [...new Set(array)];
}
