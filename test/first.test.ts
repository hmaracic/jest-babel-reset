import { describe, it, jest, expect, beforeEach } from "@jest/globals";
const someUtil = require("../src/utils");

beforeEach(() => {
  jest.resetModules();
});

describe("First suite", () => {
  it("first case", async () => {
    const mainWork = require("../src/index").mainWork;
    const someUtilSpy = jest
      .spyOn(someUtil, "someUtil")
      .mockReturnValueOnce("Hello by spyOn!");
    mainWork();
    console.log("Number of spy calls", someUtilSpy.mock.calls.length);
    expect(someUtilSpy).toHaveBeenCalledTimes(1);
  });
});
