function multiply ( x, y ){
	
	var result;
	
	if ( typeof( x ) === 'object' || typeof( y ) === 'object' || Array.isArray(x) || Array.isArray(y) ){
		
		result = NaN;
	
	}else if ( ( Number.isInteger(x) === false ) || ( Number.isInteger(y) === false ) ){
		
		result = null;
		
	}else{
		
		result = x * y;
		
	}
	
	return result;
}

function multiplyElements ( a ){

	result = 1;
	
	a.forEach(function(number){
		
		result = result * number;
		
	});
	
	return result;	

	
}

module.exports.multiply = multiply;
module.exports.multiplyElements = multiplyElements;