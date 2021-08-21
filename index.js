import * as strings from "./src/strings";
import * as numbers from "./src/numbers";
import * as arrays from "./src/arrays";
import * as dateAndTime from "./src/dateAndTime";
import * as objects from "./src/objects";
import * as html from "./src/html";
import * as forms from "./src/forms";
import * as window from "./src/window";

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
