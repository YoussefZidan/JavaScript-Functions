/**
 * Returns a capitalized String.
 */
export function capitalize(str: string): string;

/**
 * Returns a truncated string.
 */
export function truncate(str: string, num?: number): string;

/**
 * Returns toggled '1' or '0'.
 */
export function toggleStrNum(str: string): "0" | "1";

/**
 * Converts CamelCase string into string with spaces.
 */
export function camelCaseToSpaces(str: string): string;

/**
 * Logging formatted strings.
 */
export function logFormattedStrings(input: any): void;

/**
 * Getting the inner `Text` of an `HTML` string.
 */
export function getInnerHTML(str: string): string;

/**
 * Generates and returns a random ID.
 */
export function randomId(): string;

/**
 * Returns a hashed card number.
 */
export function hashCardNum(str: string, symbol?: string): string;