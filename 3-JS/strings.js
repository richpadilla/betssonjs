function convertToArray( s ){
	
	var result = s.split("");
	
	return result;
	
}

function checkPalindrome( s ){

	var result;
	
	if ( typeof( s ) !== 'string' ){
		
		throw Error('Only strings allowed');
		
	}else{
			
		var mirror = this.convertToArray(s).reverse().join("");
		
		if ( s === mirror ){
			
			result = true;			
			
		}else{
			
			result = false;
			
		}	
	}


	return result;
}

module.exports.checkPalindrome = checkPalindrome;
module.exports.convertToArray = convertToArray;
