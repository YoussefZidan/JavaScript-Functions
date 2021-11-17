// =============================== Strings =========================== //

/**
 * Returns a capitalized String.
 * @param {string} s String that will be Capitalized.
 */
const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Returns a truncated string.
 * @param {string} text String to be truncated.
 * @param {number} num Max length of the `String` that will be truncated.
 */
const truncate = (text, num = 10) => {
  if (text.length > num) {
    return `${text.substring(0, num - 3)}...`;
  }
  return text;
};

/**
 * Returns toggled '1' or '0'.
 * @param {string} strNum String number "0" or "1".
 */
const toggleStrNum = (strNum) => {
  if (strNum === "0" || strNum === "1") return strNum === "0" ? "1" : "0";
  return null;
};

/**
 * Converts CamelCase string into string with spaces
 * @param {string} str CamelCase string
 * @returns {string}
 */
const replaceCamelCaseWithSpaces = (str) =>
  str.replace(/\B[A-Z]\B/g, (match) => ` ${match}`);

/**
 * Logging formatted strings.
 * @param {any} input
 */
const logFormattedStrings = (input) =>
  console.log(JSON.stringify(input, null, 4));

module.exports = {
  capitalize,
  truncate,
  toggleStrNum,
  replaceCamelCaseWithSpaces,
  logFormattedStrings,
};