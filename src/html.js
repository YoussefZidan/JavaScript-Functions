// =============================== HTML =========================== //

/**
 * Getting the inner `Text` of an `HTML` string.
 * @param {string} str A string of HTML.
 */
const getInnerHTML = (str) => str.replace(/(<([^>]+)>)/gi, "").trim();

module.exports = {
  getInnerHTML,
};
