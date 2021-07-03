import * as jsf from "./script";
import jsdom from "jsdom";

describe("randomNumber()", () => {
  it("should return a random number between min and max", () => {
    const output = jsf.randomNumber(1, 2);
    expect(output === 1 || output === 2).toBeTruthy();
  });
});

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

describe("getInnerHTML()", () => {
  it("should return HI", () => {
    expect(jsf.getInnerHTML("<h1>HI</h1>")).toBe("HI");
  });

  it("should return HI", () => {
    expect(
      jsf.getInnerHTML(`
    <p>
      <h1>HI</h1>
    </p>
    `)
    ).toBe("HI");
  });

  it("should return HI", () => {
    expect(
      jsf.getInnerHTML(`
    <p>
      <h1>
        <span>HI</span>
      </h1>
    </p>
    `)
    ).toBe("HI");
  });
});

describe("humanFileSize()", () => {
  it("should return readable human file sizes", () => {
    expect(jsf.humanFileSize(1000)).toBe("1000 B");
    expect(jsf.humanFileSize(10000)).toBe("9.8 KB");
    expect(jsf.humanFileSize(10000000)).toBe("9.5 MB");
    expect(jsf.humanFileSize(10000000000)).toBe("9.3 GB");
    expect(jsf.humanFileSize(10000000000000)).toBe("9.1 TB");
    expect(jsf.humanFileSize(10000000000000000)).toBe("8.9 PB");
    expect(jsf.humanFileSize(10000000000000000000)).toBe("8.7 EB");
    expect(jsf.humanFileSize(10000000000000000000000)).toBe("8.5 ZB");
    expect(jsf.humanFileSize(10000000000000000000000000)).toBe("8.3 YB");
  });
});

describe("formatNumber()", () => {
  it("returns formatted numbers", () => {
    expect(jsf.formatNumber(123456)).toBe("123,456");
    expect(
      jsf.formatNumber(123456, "en-US", { style: "currency", currency: "USD" })
    ).toBe("$123,456.00");
  });
});

describe("getUniqueObjs()", () => {
  it("returns a unique array of objects", () => {
    const arr = [
      { id: 1, name: "1" },
      { id: 1, name: "1" },
      { id: 1, name: "1" },
      { id: 1, name: "1" },
    ];
    const uniqArr = [{ id: 1, name: "1" }];
    expect(jsf.getUniqueObjs(arr)).toEqual(uniqArr);
  });
});

describe("replaceCamelCaseWithSpaces()", () => {
  it("Converts CamelCase string into string with spaces", () => {
    expect(jsf.replaceCamelCaseWithSpaces("ACamelCaseString")).toEqual(
      "A Camel Case String"
    );
  });
});

describe("getScreenWidth()", () => {
  it.only("returns a string representing the width of the screen", () => {
    const mockScreen = (size) => {
      global.window = {};
      global.window.screen = {};
      global.window.screen.width = size;
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
