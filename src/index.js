import * as arrays from "./arrays.js";
import * as dateAndTime from "./dateAndTime.js";
import * as forms from "./forms.js";
import * as numbers from "./numbers.js";
import * as objects from "./objects.js";
import * as strings from "./strings.js";
import * as window from "./window.js";

export default {
  ...strings,
  ...dateAndTime,
  ...numbers,
  ...arrays,
  ...objects,
  ...forms,
  ...window,
};
