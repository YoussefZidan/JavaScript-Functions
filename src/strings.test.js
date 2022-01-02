const jsf = require("./strings");

describe("capitalize()", () => {
  it("should return a capitalized string", () => {
    expect(jsf.capitalize("cat")).toBe("Cat");
  });

  it.each([1, [], {}, null, undefined])("should throw an error", (val) => {
    expect(() => {
      jsf.capitalize(val);
    }).toThrow();
  });
});

describe("truncate()", () => {
  it("should truncate a string and ent it with ...", () => {
    expect(jsf.truncate("this is a dummy text to be truncated", 7)).toBe(
      "this..."
    );
  });

  it.each([1, [], {}, null, undefined])("should throw an error", (val) => {
    expect(() => {
      jsf.truncate(val);
    }).toThrow();
  });
});

describe("toggleStrNum()", () => {
  it("should return toggled string '1', '0'", () => {
    expect(jsf.toggleStrNum("1")).toBe("0");
    expect(jsf.toggleStrNum("0")).toBe("1");
  });

  it.each([1, [], {}, null, undefined, "abc"])(
    "should throw an error",
    (val) => {
      expect(() => {
        jsf.toggleStrNum(val);
      }).toThrow();
    }
  );
});

describe("camelCaseToSpaces()", () => {
  let testCases = [
    ["ABCLoremIpsumCSSAndHTML", "ABC Lorem Ipsum CSS And HTML"],
    ["test", "test"],
    ["TEST", "TEST"],
    ["Test", "Test"],
  ];

  it.each(testCases)(
    "Converts CamelCase string into string with spaces",
    (val, expected) => {
      expect(jsf.camelCaseToSpaces(val)).toEqual(expected);
    }
  );

  it.each([1, [], {}, null, undefined])("should throw an error", (val) => {
    expect(() => {
      jsf.camelCaseToSpaces(val);
    }).toThrow();
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

  it.each([1, [], {}, null, undefined])("should throw an error", (val) => {
    expect(() => {
      jsf.getInnerHTML(val);
    }).toThrow();
  });
});

describe("hashCardNum()", () => {
  it("Should throw an error", () => {
    expect(() => {
      jsf.hashCardNum("1599");
    }).toThrow();
  });

  it("Should throw an error", () => {
    expect(() => {
      jsf.hashCardNum("1599 9874 5632 1459 0000");
    }).toThrow();
  });

  it("Should return a hashed card number with `*` as a symbol", () => {
    expect(jsf.hashCardNum("1599 9874 5632 1459", "*")).toEqual(
      "**** **** **** 1459"
    );
  });

  it("Should return a hashed card number with `#` as a symbol", () => {
    expect(jsf.hashCardNum("1599 9874 5632 1459")).toEqual(
      "#### #### #### 1459"
    );
  });

  it.each([1, [], {}, null, undefined])("should throw an error", (val) => {
    expect(() => {
      jsf.hashCardNum(val);
    }).toThrow();
  });
});
