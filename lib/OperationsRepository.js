var OperationsRepository = function(){
	var OPERATIONS = {
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

	function get(type){
		return OPERATIONS[type];
	}
	
	return{
		get: get
	};
};

module.exports = OperationsRepository;