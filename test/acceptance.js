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


describe('when 500a10b66c32 input',function(){
	it('Then the result is 17',function(){
		var expectedResult = 14208,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('500a10b66c32');
		assert.equal(result,expectedResult);
	});
});

describe('when 3ae4c66fb32 input',function(){
	it('Then the result is 235',function(){
		var expectedResult = 235,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('3ae4c66fb32');
		assert.equal(result,expectedResult);
	});
});

describe('when 3c4d2aee2a4c41fc4f input',function(){
	it('Then the result is 235',function(){
		var expectedResult = 990,
			result;

		var fakeOutput = {
			display: function(displayedResult){
				result = displayedResult;
			}
		};

		var stringParser = new StringParser(fakeOutput);
		stringParser.parse('3c4d2aee2a4c41fc4f');
		assert.equal(result,expectedResult);
	});
});