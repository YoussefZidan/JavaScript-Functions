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

module.exports = {
  toFormData,
  softClone,
};
