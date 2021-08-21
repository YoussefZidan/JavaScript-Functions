const jsf = require("./html");

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
