// =============================== Numbers =========================== //

/**
 * Returns a random number between min to max.
 * @param {number} min Min number [default = 0].
 * @param {number} max Max Number [default = 1000].
 *
 */
const randomNumber = (min = 0, max = 1000) =>
  Math.ceil(min + Math.random() * (max - min));

/**
 * Converts Bytes into Digital Storage Sizes.
 * @param {number} bytes Bytes in number.
 */
const bytesToSizes = (bytes, thresh = 1024) => {
  const BYTES = +bytes;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  if (BYTES <= 1) return `${BYTES} Byte`;

  const i = parseInt(Math.floor(Math.log(BYTES) / Math.log(thresh)));
  return Math.round(BYTES / Math.pow(thresh, i), 2) + " " + sizes[i];
};

/**
 * Returns a formatted number with separators based on Options.
 * @param {number} num integer.
 * @param {string} lang visit => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_locales
 * @param {object} options visit => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_options
 */
const formatNumber = (num, lang, options) =>
  num.toLocaleString(lang, { ...options });

module.exports = {
  randomNumber,
  bytesToSizes,
  formatNumber,
};
