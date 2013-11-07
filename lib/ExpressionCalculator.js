var ExpressionCalculator = function(){
	var operations = {
		'a': function(firstNumber,secondNumber){
			return firstNumber + secondNumber;
		},
		'b': function(firstNumber,secondNumber){
			return firstNumber - secondNumber;
		},
		'c': function(firstNumber,secondNumber){
			return firstNumber * secondNumber;
		},
		'd': function(firstNumber,secondNumber){
			return firstNumber / secondNumber;
		}
	};

	function calculate(expression){
		var operation = operations[expression.type];
		return operation(expression.first,expression.second);
	}

	return{
		calculate:calculate
	};
};

module.exports = ExpressionCalculator;