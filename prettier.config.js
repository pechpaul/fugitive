/** @type {import('prettier').Config} */
module.exports = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    tabWidth: 2,
    arrowParens: 'avoid',
    endOfLine: 'lf',
    bracketSpacing: true,
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 120,
            },
        },
    ],
};