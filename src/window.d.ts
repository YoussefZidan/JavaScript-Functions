/**
 * Detect screen width and returns a string representing the width of the screen.
 */
export function getScreenWidth(): "mobile" | "tablet" | "laptopSm" | "laptopLg" | "HD" | number;

/**
 * Scroll to top
 */
export function toTop(behavior?: ScrollBehavior): void;

/**
 * Returns param name from a URL.
 */
export function getURLParams(name: string): string | null;

/**
 * Appends query string and returns the value in a query string format.
 */
export function appendURLParams(paramName: string, value: string): string;

/**
 * Caching values with expiry date to the LocalStorage.
 */
export function setLocalItem(key: string, value: any, exp: number): void;

/**
 * Getting values with expiry date from LocalStorage that stored with `setLocalItem`.
 */
export function getLocalItem(key: string): any;

/**
 * Hides an HTML element when scroll down and reveals it when scroll up.
 */
export function scrollToHide(id: string, distance: number): void;

/**
 * Converts Pixels into Rem based on the root <html /> tag.
 */
export function pxToRem(px: number): number;

/**
 * Converts Rems into Pixels based on the root <html /> tag.
 */
export function remToPx(rem: number): number;

/**
 * console.assert a value and displays a message
 */
export function assert(val: any, msg?: string): void;

/**
 * Converts an Object into a Query String
 */
export function objToQueryStr(obj: Record<string, any>): string;

/**
 * Converts a Query String into an Object with Key and Value pairs
 */
export function queryStrToObj(str: string): Record<string, string>;