/**
 * Generating random integers from min to max.
 * @param {number} min Min number
 * @param {number} max Max Number
 */
export const randomNumber = (min = 0, max = 1000) => Math.ceil(min + Math.random() * (max - min));

/**
 * Capitalize Strings.
 * @param {string} s String that will be Capitalized
 */
export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Truncating a string...
 * @param {string} text String to be truncated
 * @param {number} num Max length of the `String` that will be truncated after
 */
export const truncate = (text, num = 10) => {
  if (text.length > num) {
    return `${text.substring(0, num - 3)}...`;
  }
  return text;
};

/**
 * Scroll to top
 */
export const toTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

/**
 * Deep cloning inputs
 * @param {any} input Input
 */
export const softDeepClone = (input) => JSON.parse(JSON.stringify(input));

/**
 * Get param name from URL.
 * @param {string} name
 */
export const getURLParams = (name) => new URLSearchParams(window.location.search).get(name);

/**
 * Appen query string and return the value in a query string format.
 * @param {string} key
 * @param {string} value
 */
export const appendURLParams = (paramName, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(paramName, value);
  return searchParams.toString();
};

/**
 * Caching values with expiry date to the LocalHost.
 * @param {string} key Local Storage Key
 * @param {any} value Local Storage Value
 * @param {number} ttl Time to live (Expiry Date in MS)
 */
export const setLocalItem = (key, value, ttl) => {
  const now = new Date();
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
/**
 * Getting values with expiry date from LocalHost that stored with `setLocalItem`.
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
 * Check that every element in an array exsists in the another array.
 * @param {array} baseArr The array to make sure it has all the values
 * @param {arr} arr The other array that will be compared with
 */
export const containsAll = (baseArr, arr) => {
  let all = false;

  for (let i = 0; i < arr.length; i += 1) {
    if (baseArr.includes(arr[i])) {
      all = true;
    } else {
      all = false;
      return all;
    }
  }

  return all;
};

export const exsist = (baseArr, arr) => arr.some((r) => baseArr.includes(r));

/**
 * Getting the inner `Text` of an `HTML` string
 * @param {string} str A string of HTML
 */
export const getInnerHTML = (str) => str.replace(/(<([^>]+)>)/gi, "");

/**
 *  returning "1" from "0" and the opposit.
 * @param {string} strNum String Number ex: "0", "1"
 */
export const toggleStrNum = (strNum) => (strNum === "0" ? "1" : "0");

/**
 * Hide HTML element when scroll down.
 * @param {string} id the `id` of an `HTML` element
 * @param {number} distance in px ex: 100
 */
export const scrollToHide = (id, distance) => {
  const distanceDown = distance;
  const distanceUp = distance * 2;
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById(
        id,
      ).style.transform = `translateY(${distanceDown}px)`;
    } else {
      document.getElementById(
        id,
      ).style.transform = `translateY(-${distanceUp}px)`;
    }
    prevScrollpos = currentScrollPos;
  };
};

/**
 *  Converting Bytes to Readable Human File Sizes.
 * @param {number} bytes Bytes in Number
 */
export const humanFileSize = (bytes) => {
  let BYTES = bytes;
  const thresh = 1024;

  if (Math.abs(BYTES) < thresh) {
    return `${BYTES} B`;
  }

  const units = ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let u = -1;
  const r = 10 ** 1;

  do {
    BYTES /= thresh;
    u += 1;
  } while (
    Math.round(Math.abs(BYTES) * r) / r >= thresh
    && u < units.length - 1
  );

  return `${BYTES.toFixed(1)} ${units[u]}`;
};

/**
 * Getting an Array of Times + "AM" or "PM".
 * @param {number} minutesInterval
 * @param {number} startTime
 */
export const getTimes = (minutesInterval = 15, startTime = 60) => {
  const times = []; // time array
  const x = minutesInterval; // minutes interval
  let tt = startTime; // start time
  const ap = ["AM", "PM"]; // AM-PM

  // loop to increment the time and push results in array
  for (let i = 0; tt < 24 * 60; i += 1) {
    const hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    const mm = tt % 60; // getting minutes of the hour in 0-55 format
    times[i] = `${`${hh === 12 ? 12 : hh % 12}`.slice(-2)}:${`0${mm}`.slice(
      -2,
    )} ${ap[Math.floor(hh / 12)]}`; // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt += x;
  }
  return times;
};

/**
 * Logging formatted strings.
 * @param {any} input
 */
export const logFormattedStrings = (input) => console.log(JSON.stringify(input, null, 4));

/**
 * Convert Objects to Form Data Format.
 * @param {object} obj
 */
export const toFormData = (obj) => {
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
 * Detect screen width and returns a string representing the width of the screen.
 */
export const getScreenWidth = () => {
  const screenWidth = window.screen.width;
  if (screenWidth <= 425) return "mobile";
  if (screenWidth <= 768) return "tablet";
  if (screenWidth <= 1024) return "laptopSm";
  if (screenWidth <= 1440) return "laptopLg";
  if (screenWidth <= 2560) return "HD";
  return screenWidth;
};

/**
 * Format numbers with separators.
 * @param {number} num
 */
export const formatNumber = (num) => num.toLocaleString();

export const toEGPCurrency = (num) => num.toLocaleString("ar-EG", { style: "currency", currency: "EGP" });

export const toUSDCurrency = (num) => num.toLocaleString("en-US", { style: "currency", currency: "USD" });

/**
 * Returns a unique array of objects based on a key
 * @param {array} array Array of objects
 */
export const getUniqueObjs = (array, key = "id") => {
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
 * Prevent input from typing certain keyboard chars passed as an array of chars.
 * @param {event} event input event
 * @param {Array<string>} charArr array of chars
 */
export const preventChars = (event, charArr) => charArr.includes(event.key) && event.preventDefault();
