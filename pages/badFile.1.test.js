const { test1 } = require("./badFile.1");

test("does the thing", () => {
  const result = test1();

  expect(result).toBe("1");
});
