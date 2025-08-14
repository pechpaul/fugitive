/** @type {import('prettier').Config} */
module.exports = {
  // Use semicolons at the end of statements.
  semi: true,

  // Use single quotes instead of double quotes.
  singleQuote: true,

  // Add a trailing comma wherever possible (great for cleaner git diffs).
  trailingComma: 'all',

  // Wrap lines that exceed 100 characters.
  printWidth: 100,

  // Set the number of spaces per indentation-level.
  tabWidth: 2,

  // Avoid parentheses around a sole arrow function parameter. e.g., x => x
  arrowParens: 'avoid',

  // Enforce 'lf' line endings, common for cross-platform development.
  endOfLine: 'lf',

  // Add spaces between brackets in object literals. e.g., { name: 'chai' }
  bracketSpacing: true,

  // Override settings for specific file types.
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 120,
      },
    },
  ],
};
