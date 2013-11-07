var _ = require('underscore');

var TokenSplitter = function(){
	var NUMBER_REGULAR_EXPRESSION= /[0-9]/;

	function split(input){
		var tokens = input.match(/[a-f]|[0-9]*/g);
		return tokens;
	}

	return{
		split: split
	}
};

module.exports = TokenSplitter;