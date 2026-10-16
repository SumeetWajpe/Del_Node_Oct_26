const { describe } = require("node:test");
const sum = require("./sum.js");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("test suite for addition", () => {
  it("adds two numbers", () => {
    expect(sum(10, 20)).toBe(30);
  });
  it("appends two strings ", () => {
    expect(sum("Hello", " JEST")).toBe("Hello JEST");
  });
});
