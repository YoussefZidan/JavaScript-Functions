const jsf = require("./numbers");

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

describe("bytesToSizes()", () => {
  it("should return readable human file sizes", () => {
    expect(jsf.bytesToSizes(0)).toBe("0 Byte");
    expect(jsf.bytesToSizes(1)).toBe("1 Byte");
    expect(jsf.bytesToSizes(1024)).toBe("1 KB");
    expect(jsf.bytesToSizes(1_048_576)).toBe("1 MB");
    expect(jsf.bytesToSizes(1_073_741_824)).toBe("1 GB");
    expect(jsf.bytesToSizes(1_099_511_627_776)).toBe("1 TB");
    expect(jsf.bytesToSizes(1_125_899_906_842_624)).toBe("1 PB");
    expect(jsf.bytesToSizes(1.152921504606847e18)).toBe("1 EB");
    expect(jsf.bytesToSizes(1.180591620717411e21)).toBe("1 ZB");
    expect(jsf.bytesToSizes(1.208925819614629e24)).toBe("1 YB");

    // Using Thresh
    const thresh = 1000;
    expect(jsf.bytesToSizes(0, thresh)).toBe("0 Byte");
    expect(jsf.bytesToSizes(1, thresh)).toBe("1 Byte");
    expect(jsf.bytesToSizes(1000, thresh)).toBe("1 KB");
    expect(jsf.bytesToSizes(1000_000, thresh)).toBe("1 MB");
    expect(jsf.bytesToSizes(1000_000_000, thresh)).toBe("1 GB");
    expect(jsf.bytesToSizes(1000_000_000_000, thresh)).toBe("1 TB");
    expect(jsf.bytesToSizes(1000_000_000_000_000, thresh)).toBe("1 PB");
    expect(jsf.bytesToSizes(1000_000_000_000_000_000, thresh)).toBe("1 EB");
    expect(jsf.bytesToSizes(1000_000_000_000_000_000_000, thresh)).toBe("1 ZB");
    expect(jsf.bytesToSizes(1000_000_000_000_000_000_000_000, thresh)).toBe(
      "1 YB"
    );

    // Testing String Input
    expect(jsf.bytesToSizes("1024")).toBe("1 KB");
    expect(jsf.bytesToSizes("1000", thresh)).toBe("1 KB");
  });

  it.each([[], {}, null, undefined, "5px"])("should throw an error", (val) => {
    expect(() => {
      jsf.bytesToSizes(val);
    }).toThrow();
  });

  it.each([
    [1, []],
    [1, {}],
    [1, null],
    [1, "5px"],
  ])("should throw an error", (bytes, thresh) => {
    expect(() => {
      jsf.bytesToSizes(bytes, thresh);
    }).toThrow();
  });
});
