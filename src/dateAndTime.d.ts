/**
 * Getting an Array of Times + "AM" or "PM".
 */
export function getTimes(startTime?: number, minutesInterval?: number): string[];

/**
 * Returns Today's date.
 */
export function today(): Date;

/**
 * Returns Tomorrow's date.
 */
export function tomorrow(): Date;

/**
 * Converts date into time stamp format.
 */
export function toTimeStamp(date: Date | string | number): number;

/**
 * Converts date into UTC timezone.
 */
export function toUTC(date: Date | string | number): string;

/**
 * Converts Date into Human readable date string.
 */
export function humanFriendlyDate(
  date?: Date,
  locales?: string,
  options?: {
    weekday?: string;
    year?: string;
    month?: string;
    day?: string;
    [key: string]: any;
  }
): string;

/**
 * Converts Date into Human readable time string.
 */
export function humanFriendlyTime(date?: Date, locales?: string): string;

/**
 * Converts date into Unix Timestamp format.
 */
export function toUnixTimeStamp(date: Date | string | number): number;

/**
 * Logs all Date methods starts with to*.
 */
export function logToDateMethods(): void;