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
  - [hashCardNum()](#hashcardnum)
- [Numbers](#numbers)
  - [randomNumber()](#randomnumber)
  - [bytesToSizes()](#bytestosizes)
  - [formatNumber()](#formatnumber)
- [Arrays](#arrays)
  - [containsAll()](#containsall)
  - [toggleArrayValue()](#togglearrayvalue)
  - [getUniqueObjs()](#getuniqueobjs)
  - [arrToObj()](#arrtoobj)
  - [dummyArr()](#dummyarr)
- [Date & Time](#date--time)
  - [getTimes()](#gettimes)
  - [today()](#today)
  - [tomorrow()](#tomorrow)
  - [toTimeStamp()](#totimestamp)
  - [toUnixTimeStamp()](#tounixtimestamp)
  - [toUTC()](#toutc)
  - [humanFriendlyDate()](#humanfriendlydate)
  - [humanFriendlyTime()](#humanfriendlytime)
  - [logToDateMethods()](#logtodatemethods)
- [Objects](#objects)
  - [toFormData()](#toformdata)
  - [softClone()](#softclone)
  - [objToArray()](#objtoarray)
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
  - [assert()](#assert)

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
  if (typeof s !== "string") throw new Error("Input has to be a String!");
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

truncate("this is some long string to be truncated", 15);
// this is some...
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
const camelCaseToSpaces = (str) => {
  if (typeof str !== "string") throw new Error("Input has to be a String!");

  let regex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
  return str.replace(regex, "$1$4 $2$3$5");
};
```

**Usage**

```js
camelCaseToSpaces("ABCLoremIpsumCSSAndHTML");
// ABC Lorem Ipsum CSS And HTML
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

### hashCardNum()

```js
/**
 * Returns a hashed card number.
 * @param {string} str 16 card numbers as a string.
 * @param {string} symbol hash symbol.
 * @returns hashed card number
 */
const hashCardNum = (str, symbol = "#") => {
  if (typeof str !== "string") throw new Error("Input has to be a String!");

  let string = str.replace(/ /g, "");
  if (string.length !== 16) throw new Error("Card number must be 16 digits");
  else {
    let hashSymbol = new Array(12)
      .fill(symbol)
      .join("")
      .replace(/^(.{4})(.{4})(.*)$/, "$1 $2 $3");
    return `${hashSymbol} ` + string.slice(12);
  }
};
```

**Usage**

```js
hashCardNum("1599 9874 5632 1459"); // #### #### #### 1459

hashCardNum("1599 9874 5632 1459", "*"); // **** **** **** 1459

hashCardNum("1599 9874 5632"); // Throws an Error
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

### bytesToSizes()

```js
/**
 * Converts Bytes into Digital Storage Sizes.
 * @param {number} bytes Bytes in number.
 * @param {number} thresh The thresh of bytes.
 */
const bytesToSizes = (bytes, thresh = 1024) => {
  if (isNaN(bytes) || isNaN(parseFloat(bytes))) {
    throw new Error(
      `Input has to be a Number or String Number, You entered '${JSON.stringify(
        bytes
      )}'`
    );
  }
  if (isNaN(thresh) || isNaN(parseFloat(thresh))) {
    throw new Error(
      `Thresh has to be a Number, You entered '${JSON.stringify(bytes)}'`
    );
  }

  const BYTES = +bytes;
  if (BYTES <= 1) return `${BYTES} Byte`;

  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = parseInt(Math.floor(Math.log(BYTES) / Math.log(thresh)));
  return Math.round(BYTES / Math.pow(thresh, i), 2) + " " + sizes[i];
};
```

**Usage**

```js
bytesToSizes(1); // "1 Bytes"
bytesToSizes(1024); // "1 KB"
bytesToSizes(1_048_576); // "1 MB"
bytesToSizes(1_073_741_824); // "1 GB"
bytesToSizes(1_099_511_627_776); // "1 TB"
bytesToSizes(1_125_899_906_842_624); // "1 PB"
bytesToSizes(1.152921504606847e18); // "1 EB"
bytesToSizes(1.180591620717411e21); // "1 ZB"
bytesToSizes(1.208925819614629e24); // "1 YB"

// Using thresh
const thresh = 1000;
bytesToSizes(1, thresh); // "1 Bytes"
bytesToSizes(1000, thresh); // "1 KB"
bytesToSizes(1000_000, thresh); // "1 MB"
bytesToSizes(1000_000_000, thresh); // "1 GB"
bytesToSizes(1000_000_000_000, thresh); // "1 TB"
bytesToSizes(1000_000_000_000_000, thresh); // "1 PB"
bytesToSizes(1000_000_000_000_000_000, thresh); // "1 EB"
bytesToSizes(1000_000_000_000_000_000_000, thresh); // "1 ZB"
bytesToSizes(1000_000_000_000_000_000_000_000, thresh); // "1 YB"
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

### toggleArrayValue()

```js
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
```

**Usage**

```js
// Example 1
let array = ["1", "2", "3"];
let value = "1";

toggleArrayValue(array, value); // ["2", "3"]

// Example 2
let array = ["1", "2", "3"];
let value = "3";

toggleArrayValue(array, value); // ["1", "2"]

// Example 3
let array = ["1", "2", "3"];
let value = "XXX";

toggleArrayValue(array, value); // ["1", "2", "3", "XXX"]
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

### arrToObj()

```js
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
```

**Usage**

```js
arrToObj([
  ["x", 1],
  ["y", 2],
]);

// Output { x: 1, y: 2 }
```

### dummyArr()

```js
/**
 * Generates a dummy array with optional fill.
 * @param {Number} length the length of the array.
 * @param {Any} fill fill of every element in the generated array.
 */
const dummyArr = (length, fill = "") => {
  return [...new Array(length).fill(fill)];
};
```

**Usage**

```js
dummyArr(10); // ['', '', '', '', '', '', '', '', '', '']

dummyArr(10, "str"); // ['str', 'str', 'str', 'str', 'str', 'str', 'str', 'str', 'str', 'str']

dummyArr(10, true); // [true, true, true, true, true, true, true, true, true, true]
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
 * @returns {Number} In time stamp formate in milliseconds.
 */
const toTimeStamp = (date) => {
  return new Date(date).getTime();
};
```

**Usage**

```js
toTimeStamp(new Date()); // 1629542075973
```

### toUnixTimeStamp()

```js
/**
 * Converts date into Unix Timestamp formate.
 * @param {Date} date date
 * @returns {Number} In unix timestamp formate.
 */
const toUnixTimeStamp = (date) => {
  return Math.floor(new Date(date).getTime() / 1000);
};
```

**Usage**

```js
toUnixTimeStamp(new Date()); // 1637256905
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

### logToDateMethods()

```js
/**
 * Logs all Date methods starts with to*.
 */
const logToDateMethods = () => {
  console.log(
    Object.getOwnPropertyNames(Date.prototype)
      .filter((name) => name.startsWith("to"))
      .map((method) => `${method}: ${new Date()[method]()}`)
  );
};
```

**Usage**

```js
logToDateMethods();
/*
[
  "toUTCString: Sat, 25 Dec 2021 15:24:35 GMT",
  "toLocaleString: 12/25/2021, 5:24:35 PM",
  "toLocaleDateString: 12/25/2021",
  "toLocaleTimeString: 5:24:35 PM",
  "toDateString: Sat Dec 25 2021",
  "toTimeString: 17:24:35 GMT+0200 (Eastern European Standard Time)",
  "toISOString: 2021-12-25T15:24:35.983Z",
  "toJSON: 2021-12-25T15:24:35.983Z",
  "toString: Sat Dec 25 2021 17:24:35 GMT+0200 (Eastern European Standard Time)",
  "toGMTString: Sat, 25 Dec 2021 15:24:35 GMT",
];

*/
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

### objToArray()

```js
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
```

**Usage**

```js
objToArray({ x: 1, y: 2 });

// Output
/*
  [
    ["x", 1],
    ["y", 2],
  ]
*/
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
 * @param {number} exp Expiry Date (in MS)
 */
const setLocalItem = (key, value, exp) => {
  const now = new Date();
  // The item is the object that holds the original value
  // as well as the expiration date.
  const item = {
    value,
    expiry: now.getTime() + exp,
  };
  localStorage.setItem(key, JSON.stringify(item));
};
```

**Usage**

```js
setLocalItem("data", { x: 1, y: 2 }, 900000);

// Output in local storage:

| key  | value                                          |
|------|------------------------------------------------|
| data | {"value":{"x":1,"y":2},"expiry":1643984897421} |

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

**Usage**

```js
// If not expired
getLocalItem("data"); // { x:1, y:2 }


// If expired
getLocalItem("data"); // null

// item will be removed from Local Storage

| key  | value                                          |
|------|------------------------------------------------|
|      |                                                |

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

### assert()

```js
/**
 * console.assert a value and displays a message
 */
const assert = (val, msg = "Provided value is falsy.") => {
  console.assert(val, msg);
};
```

**Usage**

```js
assert(false); // Assertion failed: Provided value is falsy.
assert(0); // Assertion failed: Provided value is falsy.

assert(false, "The value is false"); // Assertion failed: The value is false.

assert(true); // undefined
```
