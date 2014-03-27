var ExpressionCalculator = require('./ExpressionCalculator'),
	PostFixConverter = require('./PostFixConverter'),
	OperandSpecification = require('./OperandSpecification'),
	ExpressionBuilder = require('./ExpressionBuilder'),
	_ = require('underscore');

var TokenCalculator = function(){
	var expressionCalculator = new ExpressionCalculator(),
		postFixConverter = new PostFixConverter(),
		operandSpecification = new OperandSpecification(),
		expressionBuilder = new ExpressionBuilder();

	this.calculate = function(tokens){
		var postFixTokens = postFixConverter.convert(tokens);
		var calculationStack = [];
		
		_.each(postFixTokens,function(token){
			if(operandSpecification.isSatisfiedBy(token)){
				calculationStack.push(token);
			}else{
				var secondValue = calculationStack.pop(),
					firstValue = calculationStack.pop(),
					expressionOperand = token;

				var expression = expressionBuilder.build(firstValue,secondValue,expressionOperand);
				var expressionResult = expressionCalculator.calculate(expression);
				calculationStack.push(expressionResult);
			}
		});
		return calculationStack;
	};
};


module.exports = TokenCalculator;