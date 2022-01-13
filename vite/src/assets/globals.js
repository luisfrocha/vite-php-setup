export const toCamelCase = text => text.replace(/-\w/g, clearAndUpper);
export const toPascalCase = text => text.replace(/(^\w|-\w)/g, clearAndUpper);
