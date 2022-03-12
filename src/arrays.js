// =============================== Arrays =========================== //

/**
 * Check that every element in an array exists in the other array.
 * @param {array} baseArr The array to make sure it has all the values.
 * @param {arr} arr The other array that will be compared with.
 */
const containsAll = (baseArr, arr) => arr.every((ele) => baseArr.includes(ele));

/**
 * If the value is an element of the array remove it from array
 * Otherwise it adds the new value to the array
 * @param {array} array The array to toggle value from.
 * @param {value} value The value to be toggled from array.
 * @returns {array} new array with or without the selected value
 */
const toggleArrayValue = (array, value) => {
  return array.includes(value)
    ? [...array.filter((i) => i !== value)]
    : [...array, value];
};

/**
 * Returns a unique array of objects based on a key.
 * @param {array} array Array of objects.
 * @param {string} key A unique property of each object [default = 'id'].
 */
const getUniqueObjs = (array, key = "id") => {
  const ids = [];
  const output = [];
  array.forEach((ele) => {
    if (!ids.includes(ele[key])) {
      ids.push(ele[key]);
      output.push(ele);
    }
  });
  return output;
};

/**
 * Converts two dimensional array into an object.
 * When index[0] is the `key` and index[1] ins the `value`.
 * @param {Array} arr An Array
 * @returns Object
 */
const arrToObj = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Input should be an array.");
  return Object.fromEntries(arr);
};

/**
 * Generates a dummy array with optional fill.
 * @param {Number} length the length of the array.
 * @param {Any} fill fill of every element in the generated array.
 */
const dummyArr = (length, fill = '') => {
  return [...new Array(length).fill(fill)]
}

module.exports = {
  containsAll,
  toggleArrayValue,
  getUniqueObjs,
  arrToObj,
  dummyArr
};
