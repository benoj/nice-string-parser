var assert = require('assert');

describe('When I add two numbers',function(){
	it('Then the result is correct',function(){
		var expectedResult = 2,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('1a1');
		assert.equal(result,expectedResult);
	});
});

var StringParser = function(output){
	function parse(){
		output.display(2);
	}

	return{
		parse:parse
	};
};