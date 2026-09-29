/**
 * Converts a PascalCase / camelCase string to kebab-case
 *
 * @see Source https://stackoverflow.com/a/67243723
 */
export const kebabize = (str: string) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
