<div align="center" style="margin-bottom:30px">
  <img src="./assets/jsf.png" />
</div>

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Strings](#strings)
  - [capitalize()](#capitalize)
  - [truncate()](#truncate)
  - [toggleStrNum()](#togglestrnum)
  - [camelCaseToSpaces()](#camelcasetospaces)
  - [logFormattedStrings()](#logformattedstrings)
  - [getInnerHTML()](#getinnerhtml)
  - [randomId()](#randomid)
- [Numbers](#numbers)
  - [randomNumber()](#randomnumber)
  - [humanFileSize()](#humanfilesize)
  - [formatNumber()](#formatnumber)
- [Arrays](#arrays)
  - [containsAll()](#containsall)
  - [getUniqueObjs()](#getuniqueobjs)
- [Date & Time](#date--time)
  - [getTimes()](#gettimes)
  - [today()](#today)
  - [tomorrow()](#tomorrow)
  - [toTimeStamp()](#totimestamp)
  - [toUTC()](#toutc)
  - [humanFriendlyDate()](#humanfriendlydate)
  - [humanFriendlyTime()](#humanfriendlytime)
- [Objects](#objects)
  - [toFormData()](#toformdata)
  - [softClone()](#softclone)
- [Forms](#forms)
  - [preventChars()](#preventchars)
- [Window](#window)
  - [getScreenWidth()](#getscreenwidth)
  - [toTop()](#totop)
  - [getURLParams()](#geturlparams)
  - [appendURLParams()](#appendurlparams)
  - [setLocalItem()](#setlocalitem)
  - [getLocalItem()](#getlocalitem)
  - [scrollToHide()](#scrolltohide)
  - [pxToRem()](#pxtorem)
  - [remToPx()](#remtopx)

## Description

Native JavaScript Reusable Functions.

## Installation

```
npm i javascript-functions

```

## Usage

**node.js**

```js
const jsf = require("javascript-functions");
jsf.capitalize("cat"); // Cat
```

**ES6**

```js
import * as jsf = from "javascript-functions";
// OR
import { capitalize } from "javascript-functions";

jsf.capitalize("cat"); // Cat
```

<hr />

## Strings

### capitalize()

```js
/**
 * Returns a capitalized String.
 * @param {string} s String that will be Capitalized.
 */
const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
```

**usage**

```js
capitalize("cat"); // Cat
```

### truncate()

```js
/**
 * Returns a truncated string.
 * @param {string} text String to be truncated.
 * @param {number} num Max length of the `String` that will be truncated.
 */
const truncate = (text, num = 10) => {
  if (text.length > num) {
    return `${text.substring(0, num - 3)}...`;
  }
  return text;
};
```

**Usage**

```js
truncate("this is some long string to be truncated");
// this is...
```

### toggleStrNum()

```js
/**
 * Returns toggled '1' or '0'.
 * @param {string} strNum String number "0" or "1".
 */
const toggleStrNum = (strNum) => {
  if (strNum === "0" || strNum === "1") return strNum === "0" ? "1" : "0";
  return null;
};
```

**Usage**

```js
toggleStrNum("1"); // "0"
```

### camelCaseToSpaces()

```js
/**
 * Converts CamelCase string into string with spaces
 * @param {string} str CamelCase string
 * @returns {string}
 */
const camelCaseToSpaces = (str) =>
  str.replace(/\B[A-Z]\B/g, (match) => ` ${match}`);
```

**Usage**

```js
camelCaseToSpaces("CamelCaseWord"); // Camel Case Word
```

### logFormattedStrings()

```js
/**
 * Logging formatted strings.
 * @param {any} input
 */
const logFormattedStrings = (input) => JSON.stringify(input, null, 4);
```

**Usage**

```js
logFormattedStrings({ fName: "John", lName: "Doe" });

/*
 {
   "fName": "John",
   "lName": "Doe"
 } 
*/
```

### getInnerHTML()

```js
/**
 * Getting the inner `Text` of an `HTML` string.
 * @param {string} str A string of HTML.
 */
const getInnerHTML = (str) => str.replace(/(<([^>]+)>)/gi, "").trim();
```

### randomId()

```js
/**
 * Generates and returns a random ID
 * @returns {string}
 */
const randomId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
```

**Usage**

```js
randomId(); // kw3npdsaw22i8ghr2i
```

## Numbers

### randomNumber()

```js
/**
 * Returns a random number between min to max.
 * @param {number} min Min number [default = 0].
 * @param {number} max Max Number [default = 1000].
 *
 */
const randomNumber = (min = 0, max = 1000) =>
  Math.ceil(min + Math.random() * (max - min));
```

**Usage**

```js
randomNumber()); // 97
```

### humanFileSize()

```js
/**
 * Returns Converting Bytes in a Readable Human File Sizes.
 * @param {number} bytes Bytes in number.
 */
const humanFileSize = (bytes) => {
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
```

**Usage**

```js
humanFileSize(456465465)); // 456.5 MB
```

### formatNumber()

```js
/**
 * Returns a formatted number with separators based on Options.
 * @param {number} num integer.
 * @param {string} lang visit => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_locales
 * @param {object} options visit => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString#using_options
 */
const formatNumber = (num, lang, options) =>
  num.toLocaleString(lang, { ...options });
```

**Usage**

```js
formatNumber(123456.789); // 123,456.789

formatNumber(123456.789, "ar-EG"); // ١٢٣٬٤٥٦٫٧٨٩

formatNumber(123456.789, "de-DE", { style: "currency", currency: "EUR" }); // "123.456,79 €"
```

## Arrays

### containsAll()

```js
/**
 * Check that every element in an array exists in the other array.
 * @param {array} baseArr The array to make sure it has all the values.
 * @param {arr} arr The other array that will be compared with.
 */
const containsAll = (baseArr, arr) => arr.every((ele) => baseArr.includes(ele));
```

**Usage**

```js
const arr1 = ["1", "2", "3"];
const arr2 = ["1", "2", "3", "X"];

containsAll(arr1, arr2); // false

containsAll(arr2, arr1); // true
```

### getUniqueObjs()

```js
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
```

**Usage**

```js
const arr = [
  { id: 1, val: "One" },
  { id: 2, val: "Two" },
  { id: 3, val: "Three" },
  { id: 3, val: "Three" },
  { id: 3, val: "Three" },
  { id: 3, val: "Three" },
];

getUniqueObjs(arr);

/*
  { id: 1, val: "One" },
  { id: 2, val: "Two" },
  { id: 3, val: "Three" },  
*/
```

## Date & Time

### getTimes()

```js
/**
 * Getting an Array of Times + "AM" or "PM".
 * @param {number} startTime Starting hour [in minutes].
 * @param {number} minutesInterval every *n* minutes [default = 15].
 * @returns {Array} Array of time.
 */
const getTimes = (startTime = 0, minutesInterval = 15) => {
  const times = []; // time array
  const x = minutesInterval; // minutes interval
  let tt = startTime; // start time
  const ap = ["AM", "PM"]; // AM-PM

  const formatHrs = (hh) => {
    const _12Format = hh === 12 ? 12 : hh % 12;
    return _12Format === 0 ? 12 : _12Format;
  };

  // loop to increment the time and push results in array
  for (let i = 0; tt < 24 * 60; i += 1) {
    const hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    const mm = tt % 60; // getting minutes of the hour in 0-55 format

    const hours = `0${formatHrs(hh)}`.slice(-2);
    const minutes = `0${mm}`.slice(-2);
    const AMPM = ap[Math.floor(hh / 12)];

    times[i] = `${hours}:${minutes} ${AMPM}`; // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt += x;
  }
  return times;
};
```

**Usage**

```js
getTimes();
/*
  0: "12:00 AM"
  1: "12:15 AM"
  2: "12:30 AM"
  3: "12:45 AM"
// ...
*/
getTimes(120);
/*
  0: "02:00 AM"
  1: "02:15 AM"
  2: "02:30 AM"
  3: "02:45 AM"
// ...
*/
getTimes(0, 30);

/*
  0: "12:00 AM"
  1: "12:30 AM"
  2: "01:00 AM"
  3: "01:30 AM"
  // ...
*/
```

### today()

```js
/**
 * Returns Today's date.
 * @returns {Date} Today's date.
 */
const today = () => {
  return new Date();
};
```

### tomorrow()

```js
/**
 * Returns Tomorrow's date
 * @returns {Date} Tomorrow's date
 */
const tomorrow = () => {
  const day = new Date();
  day.setDate(day.getDate() + 1);
  return day;
};
```

### toTimeStamp()

```js
/**
 * Converts date into time stamp formate.
 * @param {Date} date date
 * @returns {Number} In time stamp formate.
 */
const toTimeStamp = (date) => {
  return new Date(date).getTime();
};
```

**Usage**

```js
toTimeStamp(new Date()); // 1629542075973
```

### toUTC()

```js
/**
 * Converts date into UTC timezone.
 * @param {Date} date date
 * @returns {String} In UTC timezone.
 */
const toUTC = (date) => {
  return new Date(date).toGMTString();
};
```

**Usage**

```js
toUTC(new Date()); // Sat, 21 Aug 2021 10:34:35 GMT

toUTC(1629542075973); // Sat, 21 Aug 2021 10:34:35 GMT
```

### humanFriendlyDate()

```js
/**
 * Converts Date into Human readable date string.
 * @param {Date} date [default new Date()].
 * @param {String} locales [default "en-Us"].
 * @param {Object} options Formatting options.
 * @param {String} options.weekday
 * @param {String} options.year
 * @param {String} options.month
 * @param {String} options.day
 * @returns {String} Human readable date.
 */
const humanFriendlyDate = (date = new Date(), locales = "en-US", options) => {
  const O = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  };
  return date.toLocaleDateString(locales, O);
};
```

**Usage**

```js
humanFriendlyDate(new Date()); // Sat, Aug 21, 2021

humanFriendlyDate(new Date(), "ar-EG"); // السبت، ٢١ أغسطس ٢٠٢١

humanFriendlyDate(new Date(), "en-US", { weekday: "long", month: "long" }); // Saturday, August 21, 2021
```

### humanFriendlyTime()

```js
/**
 * Converts Date into Human readable time string.
 * @param {Date} date [default new Date()].
 * @param {String} locales [default "en-Us"].
 * @returns {String} Human readable date.
 */
const humanFriendlyTime = (date = new Date(), locales = "en-US") => {
  return date.toLocaleTimeString(locales);
};
```

**Usage**

```js
humanFriendlyTime(new Date()); // 12:42:53 PM

humanFriendlyTime(new Date(), "ar-EG"); // ١٢:٤٣:٣٩ م
```

## Objects

### toFormData()

```js
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
```

**Usage**

```js
const formData = toFormData({
  name: "x",
  arr: ["a", "b", "c"],
  nested: { val: "nested value" },
});
for (var pair of formData.entries()) {
  console.log(pair[0] + ", " + pair[1]);
}
/*
  name, x
  arr[0], a
  arr[1], b
  arr[2], c
  nested, [object Object]
*/
```

### softClone()

```js
/**
 * Soft  cloning objects
 * @param {object} obj Input
 */
const softClone = (obj) => JSON.parse(JSON.stringify(obj));
```

**Usage**

```js
const obj = { name: "a", nested: { val: "nested val" } };
const clone = softClone(obj);
obj.name = "XXX";

console.log(obj);
// {name: "XXX", nested: { val: "nested val" }}

console.log(clone);
// {name: "a", nested: { val: "nested val" }}
```

**Usage**

```js
getInnerHTML("<h1>HI</h1>"); // HI

getInnerHTML(`
    <p>
      <h1>HI</h1>
    </p>
    `); // HI

getInnerHTML(`
    <p>
      <h1>
        <span>HI</span>
      </h1>
    </p>
    `); // HI
```

## Forms

### preventChars()

```js
/**
 * Prevent input from typing certain keyboard chars passed as an array of chars.
 * @param {event} event input event
 * @param {Array<string>} charArr array of chars
 * @returns {boolean} boolean
 */
const preventChars = (event, charArr) =>
  charArr.includes(event.key) && event.preventDefault();
```

**Usage**

```jsx
// html
<input type="number" id="inp">

// js
document.getElementById('inp').addEventListener('keydown', e => {
  const arr = ['e', 'E', '+', '-'];
  preventChars(e, arr);
});
```

## Window

### getScreenWidth()

```js
/**
 * Detect screen width and returns a string representing the width of the screen.
 */
const getScreenWidth = () => {
  const screenWidth = window.screen.width;
  if (screenWidth <= 425) return "mobile";
  if (screenWidth <= 768) return "tablet";
  if (screenWidth <= 1024) return "laptopSm";
  if (screenWidth <= 1440) return "laptopLg";
  if (screenWidth <= 2560) return "HD";
  return screenWidth;
};
```

### toTop()

```js
/**
 * Scroll to top
 */
const toTop = (behavior = "smooth") => {
  window.scroll({ top: 0, left: 0, behavior });
};
```

### getURLParams()

```js
/**
 * Returns param name from a URL.
 * @param {string} name
 */
const getURLParams = (name) => {
  return new URLSearchParams(window.location.search).get(name);
};
```

### appendURLParams()

```js
/**
 * Appends query string and returns the value in a query string format.
 * @param {string} key
 * @param {string} value
 */
const appendURLParams = (paramName, value) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(paramName, value);
  return searchParams.toString();
};
```

### setLocalItem()

```js
/**
 * Caching values with expiry date to the LocalStorage.
 * @param {string} key Local Storage Key
 * @param {any} value Local Storage Value
 * @param {number} ttl Time to live (Expiry Date in MS)
 */
const setLocalItem = (key, value, ttl) => {
  const now = new Date();
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
```

### getLocalItem()

```js
/**
 * Getting values with expiry date from LocalStorage that stored with `setLocalItem`.
 * @param {string} key Local Storage Key
 */
const getLocalItem = (key) => {
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
```

### scrollToHide()

```js
/**
 * Hides an HTML element when scroll down and reveals it when scroll up.
 * @param {string} id the `id` of an `HTML` element.
 * @param {number} distance An integer of pixels.
 */
const scrollToHide = (id, distance) => {
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

### pxToRem()

```js
/**
 * Converts Pixels into Rem based on the root <html /> tag.
 * @param {number} px Pixels
 * @returns {number}
 */
const pxToRem = (px) => {
  return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
};
```

**Usage**

```js
// In case <html /> base font size is '16px'

pxToRem(32); // 2
```

### remToPx()

```js
/**
 * Converts Rems into Pixels based on the root <html /> tag.
 * @param {number} rem Rem
 * @returns {number}
 */
const remToPx = (rem) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};
```

**Usage**

```js
// In case <html /> base font size is '16px'

remToPx(2); // 32
```
