var assert = require('assert'),
	StringParser = require('../lib/StringParser');


describe('When I calculate an expression with a subexpression',function(){
	it('Then the result is correct',function(){
		var expectedResult = 7,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('1ae2c3f');
		assert.equal(result,expectedResult);
	});
});