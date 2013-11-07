var TokenSplitter = require('./TokenSplitter');

var StringParser = function(output){
	var tokenSplitter = new TokenSplitter();

	function parse(inputString){
		var characters = inputString.split(''),
			tokens = tokenSplitter.split(characters);
		
		if(tokens.characters[0] === 'a'){
			var result = tokens.numbers[0]+ tokens.numbers[1];
		}else{
			var result = tokens.numbers[0]-tokens.numbers[1];
		}
		
		output.display(result);
	}

	return{
		parse:parse
	};
};

module.exports = StringParser;