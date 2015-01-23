
var generator = require('../generator');

describe("generator", function(){
  it("must have a function named generates()", function() {

    expect(generator.generates).toBeDefined();
    
  });

  it("generate() function must generate 1000 numbers (array)", function() {
    var test_array = 10;

    var result = generator.generates (test_array);
    
    expect (result.length).toBe(10);

  });

  it("should generate a unique number per each iteration", function(){
    var test_array = 0;

    var result = generator.generates (test_array);
    
    var test = result.every(function(num, index){
      return result.indexOf(num) > -1;

    });

    expect(test).toBe(true);
  });
   

    }); 


