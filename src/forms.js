// =============================== Forms =========================== //

/**
 * Prevent input from typing certain keyboard chars passed as an array of chars.
 * @param {event} event input event
 * @param {Array<string>} charArr array of chars
 */
const preventChars = (event, charArr) =>
  charArr.includes(event.key) && event.preventDefault();

module.exports = {
  preventChars,
};
