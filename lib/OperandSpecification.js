var OperandSpecification = function(){
	function isSatisfiedBy(token){
		return token.match(/[0-9]/);
	}
	return {
		isSatisfiedBy: isSatisfiedBy
	};
};


module.exports = OperandSpecification;
