/**
 * @jest-environment jsdom
 */

import { jest } from "@jest/globals";
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

describe("toTop()", () => {
  it("scrolls to the top of the page with the default behavior", () => {
    window.scroll = jest.fn();
    jsf.toTop();
    expect(window.scroll).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  it("scrolls to the top of the page with a custom behavior", () => {
    window.scroll = jest.fn();
    jsf.toTop("auto");
    expect(window.scroll).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  });
});

describe("getURLParams", () => {
  it("returns the value of the specified URL parameter", () => {
    Object.defineProperty(window, "location", {
      value: {
        search: "?param1=value1&param2=value2",
      },
    });

    expect(jsf.getURLParams("param1")).toBe("value1");
    expect(jsf.getURLParams("param2")).toBe("value2");
  });

  it("returns null if the specified URL parameter does not exist", () => {
    Object.defineProperty(window, "location", {
      value: {
        search: "?param1=value1&param2=value2",
      },
    });

    expect(jsf.getURLParams("param3")).toBeNull();
  });
});

describe("pxToRem()", () => {
  it("converts pixels to rems correctly", () => {
    Object.defineProperty(document, "documentElement", {
      value: {
        style: {
          fontSize: "16px",
        },
      },
    });
    const getComputedStyleMock = jest.fn().mockImplementation(() => {
      return {
        fontSize: "16px",
      };
    });
    window.getComputedStyle = getComputedStyleMock;

    expect(jsf.pxToRem(16)).toBe(1);
    expect(jsf.pxToRem(32)).toBe(2);
    expect(jsf.pxToRem(64)).toBe(4);
  });
});

describe("objToQueryStr()", () => {
  it("converts an object to a URL query string correctly", () => {
    expect(jsf.objToQueryStr({ param1: "value1", param2: "value2" })).toBe(
      "param1=value1&param2=value2"
    );
    expect(jsf.objToQueryStr({ param3: "value3", param4: "value4" })).toBe(
      "param3=value3&param4=value4"
    );
  });
});

describe("queryStrToObj()", () => {
  it("converts a URL query string to an object correctly", () => {
    expect(jsf.queryStrToObj("param1=value1&param2=value2")).toEqual({
      param1: "value1",
      param2: "value2",
    });
    expect(jsf.queryStrToObj("param3=value3&param4=value4")).toEqual({
      param3: "value3",
      param4: "value4",
    });
  });
});
