const arrays = require("./src/arrays");
const dateAndTime = require("./src/dateAndTime");
const forms = require("./src/forms");
const numbers = require("./src/numbers");
const objects = require("./src/objects");
const strings = require("./src/strings");
const window = require("./src/window");

module.exports = {
  ...strings,
  ...numbers,
  ...arrays,
  ...dateAndTime,
  ...objects,
  ...forms,
  ...window,
};
