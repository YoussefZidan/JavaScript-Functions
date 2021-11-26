const jsf = require("./strings");

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

describe("camelCaseToSpaces()", () => {
  it("Converts CamelCase string into string with spaces", () => {
    expect(jsf.camelCaseToSpaces("ACamelCaseString")).toEqual(
      "A Camel Case String"
    );
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
});
