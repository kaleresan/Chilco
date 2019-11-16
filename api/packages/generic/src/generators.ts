export function generateKey(length) {
    let result = '';
    const characters =
        '!"§HIdefgqrsJ35KLM1EFvwxy?¡GWXYZabc\\2NOP96$%&/()=7VABtCDuz0\'U4hijklm“$nop8QRST¶¢[]|{}≠¿';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
        );
    }
    return result;
}

export function getArrayQuery(key: string, array: string[]): string {
    let query = '';
    for (const item of array) {
        query = `${query}${query === '' ? '?' : '&'}ids[]=${item}`;
    }
    return query;
}
