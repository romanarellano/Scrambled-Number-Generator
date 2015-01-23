
var generator = require('../generator');

describe("generator", function(){
  it("must have a function named generates()", function() {

    expect(generator.generates).toBeDefined();
    
  });

  it("generate() function must generate 1000 numbers (array)", function() {
    var test_array = 0;

    var result = generator.generates (test_array);
    
    expect (result.length).toBe(1000);

  });

  it("should generate a different order of numbers each time", function(){
    var test_array = 0;

    var result = generator.generates (test_array);
    
    var test = result.every(function(num, index){
      return index < 1000;

    });

  expect(test).toBe(true);

});
});