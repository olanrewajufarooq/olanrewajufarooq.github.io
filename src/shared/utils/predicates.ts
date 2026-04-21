export function isTruthy<T>(value: T): boolean {
  return Boolean(value);
}

export function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isObject(value: unknown): value is Record<string, any> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined || value === '') return true;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

export function isSelf(author: any): boolean {
  return author.isSelf === true;
}

export function hasTags(item: any): boolean {
  return Array.isArray(item.tags) && item.tags.length > 0;
}
