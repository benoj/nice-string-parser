var assert = require('assert'),
	StringParser = require('../lib/StringParser');

describe('When I multiply two numbers',function(){
	it('Then the result is correct',function(){
		var expectedResult = 4,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('2c2');
		assert.equal(result,expectedResult);
	});
});