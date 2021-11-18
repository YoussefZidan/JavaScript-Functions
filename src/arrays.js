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

module.exports = {
  containsAll,
  toggleArrayValue,
  getUniqueObjs,
};
