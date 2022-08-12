// =============================== Window =========================== //

/**
 * Detect screen width and returns a string representing the width of the screen.
 */
export const getScreenWidth = () => {
  const screenWidth = window.outerWidth;
  if (screenWidth <= 425) return "mobile";
  if (screenWidth <= 768) return "tablet";
  if (screenWidth <= 1024) return "laptopSm";
  if (screenWidth <= 1440) return "laptopLg";
  if (screenWidth <= 2560) return "HD";
  return screenWidth;
};

/**
 * Scroll to top
 */
export const toTop = (behavior = "smooth") => {
  window.scroll({ top: 0, left: 0, behavior });
};

/**
 * Returns param name from a URL.
 * @param {string} name
 */
export const getURLParams = (name) => {
  return new URLSearchParams(window.location.search).get(name);
};

/**
 * Appends query string and returns the value in a query string format.
 * @param {string} key
 * @param {string} value
 */
export const appendURLParams = (paramName, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(paramName, value);
  return searchParams.toString();
};

/**
 * Caching values with expiry date to the LocalStorage.
 * @param {string} key Local Storage Key
 * @param {any} value Local Storage Value
 * @param {number} exp Expiry Date (in MS)
 */
export const setLocalItem = (key, value, exp) => {
  const now = new Date();
  // The item is the object that holds the original value
  // as well as the expiration date.
  const item = {
    value,
    expiry: now.getTime() + exp,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

/**
 * Getting values with expiry date from LocalStorage that stored with `setLocalItem`.
 * @param {string} key Local Storage Key
 */
export const getLocalItem = (key) => {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

/**
 * Hides an HTML element when scroll down and reveals it when scroll up.
 * @param {string} id the `id` of an `HTML` element.
 * @param {number} distance An integer of pixels.
 */
export const scrollToHide = (id, distance) => {
  const distanceDown = distance;
  const distanceUp = distance * 2;
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById(
        id
      ).style.transform = `translateY(${distanceDown}px)`;
    } else {
      document.getElementById(
        id
      ).style.transform = `translateY(-${distanceUp}px)`;
    }
    prevScrollpos = currentScrollPos;
  };
};

/**
 * Converts Pixels into Rem based on the root <html /> tag.
 * @param {number} px Pixels
 * @returns {number}
 */
export const pxToRem = (px) => {
  return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
};

/**
 * Converts Rems into Pixels based on the root <html /> tag.
 * @param {number} rem Rem
 * @returns {number}
 */
export const remToPx = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

/**
 * console.assert a value and displays a message
 */
export const assert = (val, msg = "Provided value is falsy") => {
  console.assert(val, msg);
};

/**
 * Converts an Object into a Query String
 * @param {Object} obj Key and Value Pairs
 * @returns {String} Query String
 */
export const objToQueryStr = (obj) => new URLSearchParams(obj).toString();

/**
 * Converts a Query String into an Object with Key and Value pairs
 * @param {String} str Query String
 * @returns {Object} Key and Value pairs of the provided Query String
 */
export const queryStrToObj = (str) => {
  const urlParams = new URLSearchParams(str);
  return Object.fromEntries(urlParams);
};
