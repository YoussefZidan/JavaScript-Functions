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
 * Returns Converting Bytes in a Readable Human File Sizes.
 * @param {number} bytes Bytes in number.
 */
const humanFileSize = (bytes) => {
  let BYTES = bytes;
  const thresh = 1024;

  if (Math.abs(BYTES) < thresh) {
    return `${BYTES} B`;
  }

  const units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let u = -1;
  const r = 10 ** 1;

  do {
    BYTES /= thresh;
    u += 1;
  } while (
    Math.round(Math.abs(BYTES) * r) / r >= thresh &&
    u < units.length - 1
  );

  return `${BYTES.toFixed(1)} ${units[u]}`;
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
  humanFileSize,
  formatNumber,
};
