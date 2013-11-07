var _ = require('underscore');

var TokenSplitter = function(){
	var NUMBER_REGULAR_EXPRESSION= /[0-9]/;
	function split(input){
		var numbers = _.map(input.split(/[a-f]/),function(number){
			return parseInt(number);
		});

		var characters = _.reject(input.split(/[0-9]/),function(letter){
			return letter === '';
		});
		
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