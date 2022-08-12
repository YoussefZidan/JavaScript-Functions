import * as jsf from "./objects.js";

describe("objToArray()", () => {
  it("Converts Objects into two dimensional array", () => {
    const output = jsf.objToArray({ x: 1, y: 2 });
    expect(output).toEqual([
      ["x", 1],
      ["y", 2],
    ]);
  });

  it("Should throw an error", () => {
    expect(() => jsf.objToArray(["x", 1])).toThrow();
  });

  it("Should throw an error", () => {
    expect(() => jsf.objToArray("X")).toThrow();
  });

  it("Should throw an error", () => {
    expect(() => jsf.objToArray(1)).toThrow();
  });
});
