const assert = require("assert");
const helloWorld = require("../../testfolder/helloworld");

describe("helloWorld()", function() {
  // Arrange
  let greeting = "Hello World";
  //Act
  let result = helloWorld();
  //Assert
  it("it should return Hello World", function() {
    expect(result).toEqual(greeting);
  });
});
