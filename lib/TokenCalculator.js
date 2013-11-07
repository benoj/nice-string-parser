var ExpressionCalculator = require('./ExpressionCalculator');

var TokenCalculator = function(){
	var expressionCalculator = new ExpressionCalculator();

	function calculate(tokens){
		var value = tokens.numbers[0];
		
		for(var i=0; i<tokens.characters.length; i++){
			var expression = {
				type: tokens.characters[i],
				first: value,
				second: tokens.numbers[i+1]
			};

			value = expressionCalculator.calculate(expression);
		}

		return value;
	}

	return{
		calculate: calculate
	};
};

module.exports = TokenCalculator;