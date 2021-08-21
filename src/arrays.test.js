import * as jsf from "./arrays";

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
