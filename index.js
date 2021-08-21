const strings = require("./src/strings");
const numbers = require("./src/numbers");
const arrays = require("./src/arrays");
const dateAndTime = require("./src/dateAndTime");
const objects = require("./src/objects");
const html = require("./src/html");
const forms = require("./src/forms");
const window = require("./src/window");

module.exports = {
  ...strings,
  ...numbers,
  ...arrays,
  ...dateAndTime,
  ...objects,
  ...html,
  ...forms,
  ...window,
};
