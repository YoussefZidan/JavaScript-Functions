/**
 * @jest-environment jsdom
 */

import * as jsf from "./window.js";

describe("getScreenWidth()", () => {
  it("returns a string representing the width of the screen", () => {
    const mockScreen = (size) => {
      window = {};
      window.screen = {};
      window.outerWidth = size;
    };
    mockScreen(425);
    expect(jsf.getScreenWidth()).toBe("mobile");
    mockScreen(768);
    expect(jsf.getScreenWidth()).toBe("tablet");
    mockScreen(1024);
    expect(jsf.getScreenWidth()).toBe("laptopSm");
    mockScreen(1440);
    expect(jsf.getScreenWidth()).toBe("laptopLg");
    mockScreen(2560);
    expect(jsf.getScreenWidth()).toBe("HD");
  });
});

describe("pxToRem()", () => {
  it("Converts Rems into Pixels based on the root <html /> tag", () => {
    const mockWindow = (size) => {
      window.getComputedStyle = () => {
        return { fontSize: `${size}px` };
      };
    };
    mockWindow(16);
    expect(jsf.pxToRem(16)).toBe(1);
    mockWindow(14);
    expect(jsf.pxToRem(14)).toBe(1);
  });
});

describe("objToQueryStr()", () => {
  it("Converts an Object into a Query String", () => {
    expect(jsf.objToQueryStr({ search: "Search Key" })).toBe(
      "search=Search+Key"
    );
    expect(jsf.objToQueryStr({ search: "Search Key", page: "1" })).toBe(
      "search=Search+Key&page=1"
    );
  });
});

describe("queryStrToObj()", () => {
  it("Converts a Query String into an Object with Key and Value pairs", () => {
    expect(jsf.queryStrToObj("search=Search+Key")).toEqual({
      search: "Search Key",
    });
    expect(jsf.queryStrToObj("search=Search+Key&page=1")).toEqual({
      search: "Search Key",
      page: "1",
    });
  });
});
