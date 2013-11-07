var OperatorSpecification = function(){
	function isSatisfiedBy(token){
		return (token === 'a' || token === 'b' || token === 'c' || token === 'd');
	}

	return{
		isSatisfiedBy: isSatisfiedBy
	};
};

module.exports = OperatorSpecification;