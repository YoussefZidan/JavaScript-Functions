const jsf= require( "./objects");

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
