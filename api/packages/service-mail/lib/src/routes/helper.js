"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceInHtml(pattern, replacement, html) {
    html = String(html).replace(pattern, replacement);
    return html;
}
function replacer(html, replacePair) {
    html = replaceInHtml(replacePair[0], replacePair[1], html);
    return html;
}
function replacePlaceholders(replaceValues, html) {
    const replacementDefaults = [
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
exports.replacePlaceholders = replacePlaceholders;
//# sourceMappingURL=helper.js.map