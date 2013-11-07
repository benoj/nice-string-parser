var ExpressionBuilder = function(){
	function build(first,second,type){
		return {
			type: type,
			first: parseInt(first),
			second: parseInt(second)
		};
	}
	return {
		build: build
	};
};

module.exports = ExpressionBuilder;
