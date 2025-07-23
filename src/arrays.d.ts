/**
 * Check that every element in an array exists in the other array.
 */
export function containsAll<T>(baseArr: T[], arr: T[]): boolean;

/**
 * If the value is an element of the array remove it from array,
 * otherwise it adds the new value to the array.
 */
export function toggleArrayValue<T>(array: T[], value: T): T[];

/**
 * Returns a unique array of objects based on a key.
 */
export function getUniqueObjs<T extends Record<string, any>>(array: T[], key?: string): T[];

/**
 * Converts two dimensional array into an object.
 * When index[0] is the `key` and index[1] is the `value`.
 */
export function arrToObj(arr: [string | number | symbol, any][]): Record<string | number | symbol, any>;

/**
 * Generates a dummy array with optional fill.
 */
export function dummyArr<T = string>(length: number, fill?: T): T[];