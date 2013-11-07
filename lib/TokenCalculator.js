var ExpressionCalculator = require('./ExpressionCalculator'),
	PostFixConverter = require('./PostFixConverter'),
	OperandSpecification = require('./OperandSpecification'),
	ExpressionBuilder = require('./ExpressionBuilder');

var TokenCalculator = function(){
	var expressionCalculator = new ExpressionCalculator(),
		postFixConverter = new PostFixConverter(),
		operandSpecification = new OperandSpecification(),
		expressionBuilder = new ExpressionBuilder();

	function calculate(tokens){
		var postFixTokens = postFixConverter.convert(tokens);
		var calculationStack = [];
		for(var i =0; i < postFixTokens.length; i++){
			if(operandSpecification.isSatisfiedBy(postFixTokens[i])){
				calculationStack.push(postFixTokens[i]);
			}else{
				var second = calculationStack.pop(),
					first = calculationStack.pop(),
					type = postFixTokens[i];
				var expression = expressionBuilder.build(first,second,type);
				var expressionResult = expressionCalculator.calculate(expression);
				calculationStack.push(expressionResult);
			}
		}
		return calculationStack;
	}

	return{
		calculate: calculate
	};
};


module.exports = TokenCalculator;