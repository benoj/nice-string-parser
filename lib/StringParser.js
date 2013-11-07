var TokenSplitter = require('./TokenSplitter'),
	ExpressionCalculator = require('./ExpressionCalculator');

var StringParser = function(output){
	var tokenSplitter = new TokenSplitter(),
		expressionCalculator = new ExpressionCalculator();
		
	function parse(inputString){
		var characters = inputString.split(''),
			tokens = tokenSplitter.split(characters);
		var expression = {
			type: tokens.characters[0],
			first: tokens.numbers[0],
			second: tokens.numbers[1]
		};
		var result = expressionCalculator.calculate(expression);
		output.display(result);
	}

	return{
		parse:parse
	};
};



module.exports = StringParser;