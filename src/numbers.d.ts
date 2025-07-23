/**
 * Returns a random number between min to max.
 */
export function randomNumber(min?: number, max?: number): number;

/**
 * Converts Bytes into Digital Storage Sizes.
 */
export function bytesToSizes(bytes: number | string, thresh?: number): string;

/**
 * Returns a formatted number with separators based on Options.
 */
export function formatNumber(
  num: number,
  lang?: string,
  options?: Intl.NumberFormatOptions
): string;