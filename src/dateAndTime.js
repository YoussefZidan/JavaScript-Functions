// =============================== Date & Time =========================== //

/**
 * Getting an Array of Times + "AM" or "PM".
 * @param {number} startTime Starting hour [in minutes].
 * @param {number} minutesInterval every *n* minutes [default = 15].
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

const today = () => {
  return new Date();
};

const tomorrow = () => {
  const day = new Date();
  day.setDate(day.getDate() + 1);
  return day;
};
const toTimeStamp = (date) => {
  return new Date(date).getTime();
};
const toUTC = (date) => {
  return new Date(date).toGMTString();
};
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
const humanFriendlyTime = (date = new Date(), locales = "en-US", options) => {
  const O = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    ...options,
  };
  return date.toLocaleTimeString(locales, O);
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
