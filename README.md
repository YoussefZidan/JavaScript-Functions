## randomNumber();
Generates a random number between min and max numbers.
``` js
/**
 * Generating random integers between min and max.
 * @param {number} min Min number
 * @param {number} max Max Number
 */
export const randomNumber = (min = 0, max = 1000) =>
  Math.ceil(min + Math.random() * (max - min));

// Example
console.log(randomNumber()); // 97

```

## capitalize();
Making the first letter of a string to Uppercase.

```js
/**
 * Capitalize Strings.
 * @param {string} s String that will be Capitalized
 */
export const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

// Example
console.log(capitalize("cat")); // Cat

```

## truncate();
Usually used in combination with Tooltips.

```js

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

// Example
console.log(truncate("this is some long string to be truncated"));  // this is...

```

## toTop();
You can remove the `behavior` property for instant scrolling to the top.

```js

/**
 * Scroll to top
 */
export const toTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

```
## softDeepClone();
Deeply clone even `nested` arrays or objects.

> This function doesn't work with data types like `new Date()`, `NaN`, `undefined`, `function`, `Number`, `Infinity`.
If you want to deep clone the mentioned data type you can use [lodash](https://lodash.com/docs/4.17.15#cloneDeep) `cloneDeep();` function. 

```js

/**
 * Deep cloning inputs
 * @param {any} input Input
 */
export const softDeepClone= (input) => JSON.parse(JSON.stringify(input));

```

## appendURLParams(); & getURLParams();
Append and get query strings, (Usually used with pagination).

```js

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

// example
console.log(appendURLParams("name", "youssef")) // name=youssef

/**
 * Get param name from URL.
 * @param {string} name
 */
export const getURLParams = (name) => new URLSearchParams(window.location.search).get(name);

// Example
console.log(getURLParams(id)) // 5


```

## getInnerHTML();
Getting inner text inside a `stringed` HTML.

```js

/**
 * Getting the inner `Text` of an `HTML` string
 * @param {string} str A string of HTML
 */
export const getInnerHTML = (str) => str.replace(/(<([^>]+)>)/gi, "");

```
## toggleStrNum();
Usually used to deal with the server that sends and accepts string numbers.

```js

/**
 *  returning "1" from "0" and the opposit.
 * @param {string} strNum String Number ex: "0", "1"
 */
export const toggleStrNum = (strNum) => (strNum === "0" ? "1" : "0");

```

## scrollToHide();
Scroll up to show the HTML element and down to hide it.

```js

/**
 * Hide HTML element when scrolling down.
 * @param {string} id the `id` of an `HTML` element
 * @param {string} distance in px ex: "100px"
 */
export const scrollToHide = (id, distance) => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById(id).style.transform = `translateY(${distance})`;
    } else {
      document.getElementById(id).style.transform = `translateY(-${distance})`;
    }
    prevScrollpos = currentScrollPos;
  };
};

```

## humanFileSize ();
Converts the file size in `Bytes`, and Returns the result in a Human Readable formate.

```js

/**
 * Converting Bytes to Readable Human File Sizes.
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
  } while (Math.round(Math.abs(BYTES) * r) / r >= thresh && u < units.length - 1);

  return `${BYTES.toFixed(1)} ${units[u]}`;
};

// Example
console.log(humanFileSize(456465465)); // 456.5 MB

```

## getTimes();
Returns times of the day every `n` Minutes?

```js

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
    times[i] = `${`${hh === 12 ? 12 : hh % 12}`.slice(-2)}:${`0${mm}`.slice(-2)} ${
      ap[Math.floor(hh / 12)]
    }`; // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt += x;
  }
  return times;
};

// Example
console.log(getTimes());
/* [
    "1:00 AM",
    "1:15 AM",
    "1:30 AM",
    "1:45 AM",
    "2:00 AM",
    "2:15 AM",
    "2:30 AM",
    // ....
    ]
*/

```
## setLocalItem(); & getLocalItem();
Caching data in `LocalStorage` with expiry date.

```js
/**
 * Caching values with expiry date to the LocalHost.
 * @param {string} key Local Storage Key
 * @param {any} value Local Storage Value
 * @param {number} ttl Time to live (Expiry Date in MS)
 */
export const setLocalItem = (key, value, ttl = duration.month) => {
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

```
## logFormattedStrings();
Logs any input in a human friendly string to the console.

```js
/**
 * Logging formatted strings
 * @param {any} input
 */
export const logFormattedStrings = (input) => console.log(JSON.stringify(input, null, 4));

// Example 
logFormattedStrings({ fName: "Youssef", lName: "Zidan" });
/*
 {
   "fName": "Youssef",
   "lName": "Zidan"
 } 
*/

```
## formatNumber();

```js

/**
 * Format numbers with separators.
 * @param {number} num
 */
export const formatNumber = (num) => num.toLocaleString();

// Example
console.log(formatNumber(78899985)); // 78,899,985

```
> You can also add other options to get other number formats such as currency, distance, weights, etc...
more details [HERE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

And here are two examples

```js
export const toEGPCurrency = (num) =>
  num.toLocaleString("ar-EG", { style: "currency", currency: "EGP" });

export const toUSDCurrency = (num) =>
  num.toLocaleString("en-US", { style: "currency", currency: "USD" });

console.log(toUSDCurrency(78899985)); // $78,899,985.00
console.log(toEGPCurrency(78899985)); // ٧٨٬٨٩٩٬٩٨٥٫٠٠ ج.م.

```
## toFormData();

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

```
## getScreenWidth();
Retuns a string representing the width of the screen.

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

```
## containsAll();
Check that every element in an array exsists in the another array.

```js
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
```
