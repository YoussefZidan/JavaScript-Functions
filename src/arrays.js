// =============================== Arrays =========================== //

/**
 * Check that every element in an array exists in the other array.
 * @param {array} baseArr The array to make sure it has all the values.
 * @param {arr} arr The other array that will be compared with.
 */
const containsAll = (baseArr, arr) => arr.every((ele) => baseArr.includes(ele));

/**
 * Check that every element in an array exists in the other array.
 * @param {array} array The array to toggle value from.
 * @param {value} value The value to be toggled from array.
 */
const toggleArrayValue = (array, value) => {
  return array.includes(value)
    ? [...array.filter((i) => i !== value)]
    : [...array, value];
};

module.exports = {
  containsAll,
  toggleArrayValue,
};
