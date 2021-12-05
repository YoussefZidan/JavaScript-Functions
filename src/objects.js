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
 * Add object keys as an item to each object 
 * ex : const employess = 
 * { 
 *  Dev : { name : 'Islam' } , 
 *  Test : { name : 'John' }
 * }
 * O/P => 
 * {
 * Dev : { name : 'Islam' , key : 'Dev'  } , 
 * Test : { name : 'John' , key : 'Test' }
 * }
 * @param {object} obj Input
 */
const transformedObj = Object.fromEntries(Object.entries(obj).map(([objID , objInfo]) => [objID , {...objInfo , key : objID }]));

module.exports = {
  toFormData,
  softClone,
  transformedObj
};
