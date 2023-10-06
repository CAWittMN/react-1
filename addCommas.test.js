const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("#addCommas", () => {
  test("it returns a string", () => {
    expect(typeof addCommas(1)).toBe("string");
  });
});

describe("#addCommas", () => {
  test("it returns a string with commas", () => {
    expect(addCommas(1000)).toBe("1,000");
  });
});

describe("#addCommas", () => {
  test("it returns a string with multiple commas if number is larger than 4 digits", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });
});

describe("#addCommas", () => {
  test("it only adds commas to numbers in a string", () => {
    expect(addCommas("I ate 1000000 tacos")).toBe("I ate 1,000,000 tacos");
  });
});

describe("#addCommas", () => {
  test("it won't add commas to numbers in a string if they are less than 4 digits", () => {
    expect(addCommas("I ate 100 tacos")).toBe("I ate 100 tacos");
    expect(addCommas(100)).toBe("100");
  });
});
