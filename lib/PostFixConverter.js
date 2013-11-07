var OperandSpecification = require('./OperandSpecification'),
	OperatorSpecification = require('./OperatorSpecification'),
	StackOpenParenthesisSpecification = require('./StackOpenParenthesisSpecification');

var PostFixConverter = function(){
	var OPEN_PARENTHESIS = 'e',
		CLOSE_PARENTHESIS = 'f';

	var operandSpecification = new OperandSpecification(),
		operatorSpecification = new OperatorSpecification(),
		stackOpenParenthesisSpecification = new StackOpenParenthesisSpecification();

	function convert(tokens){
		var postFix = [],
			storageStack = [];

		for(var i=0; i < tokens.length-1; i++){
			if(operandSpecification.isSatisfiedBy(tokens[i])){
				postFix.push(tokens[i]);
			}
			if(tokens[i] === OPEN_PARENTHESIS){
				storageStack.push(tokens[i]);
			}
			if(tokens[i] === CLOSE_PARENTHESIS){
				while(stackOpenParenthesisSpecification.isSatisfiedBy(storageStack)){
					var element = storageStack.pop();
					postFix.push(element);
				}
			}
			if(operatorSpecification.isSatisfiedBy(tokens[i])){
				while(storageStack.length > 0 && stackOpenParenthesisSpecification.isSatisfiedBy(storageStack)){
					var element = storageStack.pop();
					postFix.push(element);
				}
				storageStack.push(tokens[i]);
			}
		}
		while(storageStack.length >0 ){
			var element = storageStack.pop();
			if(element !== OPEN_PARENTHESIS){
				postFix.push(element);
			}
		}
		return postFix;
	}

	return{
		convert: convert
	};
};





module.exports = PostFixConverter;