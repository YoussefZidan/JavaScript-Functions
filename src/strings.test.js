import * as jsf from "./strings";

describe("capitalize()", () => {
  it("should return a capitalized string", () => {
    expect(jsf.capitalize("cat")).toBe("Cat");
    expect(jsf.capitalize("")).toBe("");
  });
});

describe("truncate()", () => {
  it("should truncate a string and ent it with ...", () => {
    expect(jsf.truncate("this is a dummy text to be truncated", 7)).toBe(
      "this..."
    );
  });
});

describe("toggleStrNum()", () => {
  it("should return toggled string '1', '0'", () => {
    expect(jsf.toggleStrNum("1")).toBe("0");
    expect(jsf.toggleStrNum("0")).toBe("1");
    expect(jsf.toggleStrNum(null)).toBe(null);
    expect(jsf.toggleStrNum("abc")).toBe(null);
    expect(jsf.toggleStrNum(undefined)).toBe(null);
  });
});

describe("replaceCamelCaseWithSpaces()", () => {
  it("Converts CamelCase string into string with spaces", () => {
    expect(jsf.replaceCamelCaseWithSpaces("ACamelCaseString")).toEqual(
      "A Camel Case String"
    );
  });
});
