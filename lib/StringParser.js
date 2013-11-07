var TokenSplitter = require('./TokenSplitter'),
	TokenCalculator = require('./TokenCalculator');

var StringParser = function(output){
	var tokenSplitter = new TokenSplitter(),
		tokenCalculator = new TokenCalculator();

	function parse(inputString){
		var characters = inputString.split(''),
			tokens = tokenSplitter.split(characters);

		var value = tokenCalculator.calculate(tokens);	
		output.display(value);
	}

	return{
		parse:parse
	};
};




module.exports = StringParser;