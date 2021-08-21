// =============================== Date & Time =========================== //

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

/**
 * Returns Today's date.
 * @returns {Date} Today's date.
 */
const today = () => {
  return new Date();
};

/**
 * Returns Tomorrow's date
 * @returns {Date} Tomorrow's date
 */
const tomorrow = () => {
  const day = new Date();
  day.setDate(day.getDate() + 1);
  return day;
};
/**
 * Converts date into time stamp formate.
 * @param {Date} date date
 * @returns {Date} In time stamp formate.
 */
const toTimeStamp = (date) => {
  return new Date(date).getTime();
};
/**
 * Converts date into UTC timezone.
 * @param {Date} date date
 * @returns {Date} In UTC timezone.
 */
const toUTC = (date) => {
  return new Date(date).toGMTString();
};

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

/**
 * Converts Date into Human readable time string.
 * @param {Date} date [default new Date()].
 * @param {String} locales [default "en-Us"].
 * @returns {String} Human readable date.
 */
const humanFriendlyTime = (date = new Date(), locales = "en-US") => {
  return date.toLocaleTimeString(locales);
};

module.exports = {
  getTimes,
  today,
  tomorrow,
  toTimeStamp,
  toUTC,
  humanFriendlyDate,
  humanFriendlyTime,
};
