function replaceInHtml(pattern, replacement, html) {
    html = String(html).replace(pattern, replacement);
    return html;
}

function replacer(html, replacePair: [string, string]) {
    html = replaceInHtml(replacePair[0], replacePair[1], html);
    return html;
}

interface ReplaceValues {
    url?: string;
    title?: string;
    firstname?: string;
}
export function replacePlaceholders(replaceValues: ReplaceValues, html) {
    const replacementDefaults: any = [
        // @ts-ignore
        ['*|CURRENT_YEAR|*', new Date().getFullYear()],
        ['*|LIST:COMPANY|*', 'Chilco'],
    ];

    const replacements = [
        ['*|LIST:NAME|*', replaceValues.firstname || ''],
        ['*|LINK|*', replaceValues.url || ''],
        ['*|MC:SUBJECT|*', replaceValues.title || ''],
    ].concat(replacementDefaults);

    html = replacements.reduce(replacer, html);
    return html;
}
