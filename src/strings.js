// =============================== Strings =========================== //

/**
 * Returns a capitalized String.
 * @param {string} s String that will be Capitalized.
 */
const capitalize = (str) => {
  if (typeof str !== "string") throw new Error("Input has to be a String!");

  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Returns a truncated string.
 * @param {string} str String to be truncated.
 * @param {number} num Max length of the `String` that will be truncated.
 */
const truncate = (str, num = 10) => {
  if (typeof str !== "string") throw new Error("Input has to be a String!");

  if (str.length > num) {
    return `${str.substring(0, num - 3)}...`;
  }
  return str;
};

/**
 * Returns toggled '1' or '0'.
 * @param {string} str String number "0" or "1".
 */
const toggleStrNum = (str) => {
  if (typeof str !== "string") throw new Error("Input has to be a String!");

  if (str === "0" || str === "1") return str === "0" ? "1" : "0";
  else throw new Error(`Input has to be '1' or '0', Received => ${str}`);
};

/**
 * Converts CamelCase string into string with spaces
 * @param {string} str CamelCase string
 * @returns {string}
 */
const camelCaseToSpaces = (str) => {
  if (typeof str !== "string") throw new Error("Input has to be a String!");
  else return str.replace(/\B[A-Z]\B/g, (match) => ` ${match}`);
};

/**
 * Logging formatted strings.
 * @param {any} input
 */
const logFormattedStrings = (input) =>
  console.log(JSON.stringify(input, null, 4));

/**
 * Getting the inner `Text` of an `HTML` string.
 * @param {string} str A string of HTML.
 */
const getInnerHTML = (str) => {
  if (typeof str !== "string") throw new Error("Input has to be a String!");
  else return str.replace(/(<([^>]+)>)/gi, "").trim();
};

/**
 * Generates and returns a random ID
 * @returns {string}
 */
const randomId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

/**
 * Returns a hashed card number.
 * @param {string} str 16 card numbers as a string.
 * @param {string} symbol hash symbol.
 * @returns hashed card number
 */
const hashCardNum = (str, symbol = "#") => {
  if (typeof str !== "string") throw new Error("Input has to be a String!");

  let string = str.replace(/ /g, "");
  if (string.length != 16) throw new Error("Card number must be 16 digits");
  else {
    let hashSymbol = new Array(12)
      .fill(symbol)
      .join("")
      .replace(/^(.{4})(.{4})(.*)$/, "$1 $2 $3");
    return `${hashSymbol} ` + string.slice(12);
  }
};

module.exports = {
  capitalize,
  truncate,
  toggleStrNum,
  camelCaseToSpaces,
  logFormattedStrings,
  getInnerHTML,
  randomId,
  hashCardNum,
};
