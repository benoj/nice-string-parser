var OperationsRepository = require('./OperationsRepository');

var ExpressionCalculator = function(){
	var operationsRepository = new OperationsRepository();

	function calculate(expression){
		var operation = operationsRepository.get(expression.type);
		return operation(expression.first,expression.second);
	}

	return{
		calculate:calculate
	};
};



module.exports = ExpressionCalculator;