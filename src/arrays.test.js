const jsf = require("./arrays");

describe("containsAll()", () => {
  it("should return TRUE", () => {
    let baseArr = ["1", "2", "3"];
    let arr = ["1", "2", "3"];
    expect(jsf.containsAll(baseArr, arr)).toBeTruthy();
  });

  it("should return TRUE", () => {
    let baseArr = ["1", "2", "3", "XXX"];
    let arr = ["1", "2", "3"];
    expect(jsf.containsAll(baseArr, arr)).toBeTruthy();
  });

  it("should return TRUE", () => {
    let baseArr = ["1", "2", "3"];
    let arr = ["2", "3"];
    expect(jsf.containsAll(baseArr, arr)).toBeTruthy();
  });

  it("should return FALSE", () => {
    let baseArr = ["1", "2", "3"];
    let arr = ["XXX", "1", "2", "3"];
    expect(jsf.containsAll(baseArr, arr)).not.toBeTruthy();
  });

  it("should return FALSE", () => {
    let baseArr = ["1", "2", "3"];
    let arr = ["a", "b", "c"];
    expect(jsf.containsAll(baseArr, arr)).not.toBeTruthy();
  });
});

describe("toggleArrayValue()", () => {
  it("Should Remove 1", () => {
    let array = ["1", "2", "3"];
    let value = "1";
    expect(jsf.toggleArrayValue(array, value)).toEqual(["2", "3"]);
  });

  it("Should remove 3", () => {
    let array = ["1", "2", "3"];
    let value = "3";
    expect(jsf.toggleArrayValue(array, value)).toEqual(["1", "2"]);
  });

  it("Should add XXX", () => {
    let array = ["1", "2", "3"];
    let value = "XXX";
    expect(jsf.toggleArrayValue(array, value)).toEqual(["1", "2", "3", "XXX"]);
  });
});
