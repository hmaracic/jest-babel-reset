# jest-babel-reset
Demo repo for jest issue

The test case in this repo is an almost verbatim copy of the `jest.resetModules()` [documentation example](https://jestjs.io/docs/jest-object#jestresetmodules) with a jest spy added.
```
const someUtilSpy = jest
  .spyOn(someUtil, "someUtil")
  .mockReturnValueOnce("Hello by spyOn!");
```
The spy does not count the calls to the `someUtil` method nor does it mock its return value.

If `jest.resetModules()` is removed from the `beforeEach` block, the test passes successfully.
