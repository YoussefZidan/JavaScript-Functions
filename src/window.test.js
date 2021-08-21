import * as jsf from "./window";

describe("getScreenWidth()", () => {
  it("returns a string representing the width of the screen", () => {
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
