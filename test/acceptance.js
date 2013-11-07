var assert = require('assert'),
	StringParser = require('../lib/StringParser');

describe('when 3a2c4 input',function(){
	it('Then the result is 20',function(){
		var expectedResult = 20,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('3a2c4');
		assert.equal(result,expectedResult);
	});
});

describe('when 32a2d2 input',function(){
	it('Then the result is 17',function(){
		var expectedResult = 17,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('32a2d2');
		assert.equal(result,expectedResult);
	});
});