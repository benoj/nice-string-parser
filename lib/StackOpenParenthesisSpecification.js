var StackOpenParenthesisSpecification = function(){
	var OPEN_PARENTHESIS = 'e';

	function isSatisfiedBy(stack){
		return stack[stack.length-1] !== OPEN_PARENTHESIS
	}

	return{
		isSatisfiedBy: isSatisfiedBy
	};
};	

module.exports = StackOpenParenthesisSpecification;