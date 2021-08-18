- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
  - [Strings](#strings)
  - [Numbers](#numbers)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [HTML](#html)
  - [Window](#window)
  - [Forms](#forms)

# Description

Native JavaScript Functions.

# Installation

```
npm i javascript-functions

```

# Usage

**node.js**

```js
const jsf = require("javascript-functions");
console.log(jsf.capitalize("cat")); // Cat
```

**ES6**

```js
import * as jsf = from "javascript-functions";
// OR
import { capitalize } from "javascript-functions";

console.log(jsf.capitalize("cat")); // Cat
```

## Strings

```js
/**
 * Returns a capitalized String.
 * @param {string} s String that will be Capitalized.
 */
export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * Returns a truncated string.
 * @param {string} text String to be truncated.
 * @param {number} num Max length of the `String` that will be truncated.
 */
export const truncate = (text, num = 10) => {
  if (text.length > num) {
    return `${text.substring(0, num - 3)}...`;
  }
  return text;
};

/**
 * Returns toggled '1' or '0'.
 * @param {string} strNum String number "0" or "1".
 */
export const toggleStrNum = (strNum) => {
  if (strNum === "0" || strNum === "1") return strNum === "0" ? "1" : "0";
  return null;
};

/**
 * Converts CamelCase string into string with spaces
 * @param {string} str CamelCase string
 * @returns {string}
 */
export const replaceCamelCaseWithSpaces = (str) =>
  str.replace(/\B[A-Z]\B/g, (match) => ` ${match}`);

/**
 * Logging formatted strings.
 * @param {any} input
 */
export const logFormattedStrings = (input) =>
  console.log(JSON.stringify(input, null, 4));
```

## Numbers

```js
/**
 * Returns a random number between min to max.
 * @param {number} min Min number [default = 0].
 * @param {number} max Max Number [default = 1000].
 *
 */
export const randomNumber = (min = 0, max = 1000) =>
  Math.ceil(min + Math.random() * (max - min));

/**
 * Returns Converting Bytes in a Readable Human File Sizes.
 * @param {number} bytes Bytes in number.
 */
export const humanFileSize = (bytes) => {
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
export const formatNumber = (num, lang, options) =>
  num.toLocaleString(lang, { ...options });
```

## Arrays

```js
/**
 * Check that every element in an array exists in the other array.
 * @param {array} baseArr The array to make sure it has all the values.
 * @param {arr} arr The other array that will be compared with.
 */
export const containsAll = (baseArr, arr) =>
  arr.every((ele) => baseArr.includes(ele));

/**
 * Returns a unique array of objects based on a key.
 * @param {array} array Array of objects.
 * @param {string} key A unique property of each object [default = 'id'].
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
 * Getting an Array of Times + "AM" or "PM".
 * @param {number} minutesInterval every *n* minutes [default = 15].
 * @param {number} startTime Starting hour.
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
      -2
    )} ${ap[Math.floor(hh / 12)]}`;
    tt += x;
  }
  return times;
};
```

## Objects

```js
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
 * Soft Deep cloning inputs
 * @param {any} input Input
 */
export const softDeepClone = (input) => JSON.parse(JSON.stringify(input));
```

## HTML

```js
/**
 * Getting the inner `Text` of an `HTML` string.
 * @param {string} str A string of HTML.
 */
export const getInnerHTML = (str) => str.replace(/(<([^>]+)>)/gi, "").trim();
```

## Window

```js
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
```

## Forms

```js
/**
 * Prevent input from typing certain keyboard chars passed as an array of chars.
 * @param {event} event input event
 * @param {Array<string>} charArr array of chars
 */
export const preventChars = (event, charArr) =>
  charArr.includes(event.key) && event.preventDefault();
```
