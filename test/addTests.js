var assert = require('assert'),
	StringParser = require('../lib/StringParser');

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

describe('when I add two different numbers',function(){
	it('Then the result is correct',function(){
		var expectedResult = 3,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('2a1');
		assert.equal(result,expectedResult);
	});
});