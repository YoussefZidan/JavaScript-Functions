/**
 * Prevent input from typing certain keyboard chars passed as an array of chars.
 * @param event - input event
 * @param charArr - array of chars
 * @returns boolean
 */
export function preventChars(event: KeyboardEvent, charArr: string[]): boolean;