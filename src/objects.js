// =============================== Objects =========================== //

/**
 * Convert Objects to Form Data Format.
 * @param {object} obj
 */
const toFormData = (obj) => {
  const formBody = new FormData();
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((val, i) => {
        formBody.append(`${key}[${i}]`, val);
      });
    } else formBody.append(key, obj[key]);
  });
  return formBody;
};

/**
 * Soft  cloning objects
 * @param {object} obj Input
 */
const softClone = (obj) => JSON.parse(JSON.stringify(obj));

/**
 * Converts Objects into two dimensional array.
 * When index[0] is the `key` and index[1] is the `value`.
 * @param {Object} obj An Object
 * @returns Tow dimensional array.
 */
const objToArray = (obj) => {
  if (Array.isArray(obj) || typeof obj !== "object") {
    throw new Error("Input should be an Object");
  }

  return Object.entries(obj);
};

module.exports = {
  toFormData,
  softClone,
  objToArray,
};
