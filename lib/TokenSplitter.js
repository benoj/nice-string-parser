var TokenSplitter = function(){
	var NUMBER_REGULAR_EXPRESSION= /[0-9]/;
	function split(tokens){
		var numbers = [],
			characters = [];
			
		for(var i=0; i < tokens.length; i++){
			if(tokens[i].match(NUMBER_REGULAR_EXPRESSION)){
				numbers.push(parseInt(tokens[i]));
			}
			else{
				characters.push(tokens[i]);
			}
		}

		return {
			numbers: numbers,
			characters: characters
		};

	}

	return{
		split: split
	}
};

module.exports = TokenSplitter;