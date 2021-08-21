const jsf =require( "./numbers");

describe("randomNumber()", () => {
  it("should return a random number between min and max", () => {
    const output = jsf.randomNumber(1, 2);
    expect(output === 1 || output === 2).toBeTruthy();
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
