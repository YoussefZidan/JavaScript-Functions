/**
 * Convert Objects to Form Data Format.
 */
export function toFormData(obj: Record<string, any>): FormData;

/**
 * Soft cloning objects.
 */
export function softClone<T>(obj: T): T;

/**
 * Converts Objects into two dimensional array.
 * When index[0] is the `key` and index[1] is the `value`.
 */
export function objToArray(obj: Record<string, any>): [string, any][];