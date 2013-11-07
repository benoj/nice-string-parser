var assert = require('assert'),
	StringParser = require('../lib/StringParser');

describe('When I subtract two numbers',function(){
	it('Then the result is correct',function(){
		var expectedResult = 2,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('3b1');
		assert.equal(result,expectedResult);
	});
});