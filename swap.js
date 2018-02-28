	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		var res ="";
		for (var i = 0; i < input.length; i++) {
			if(input[i] === input[i].toUpperCase()){
				res+=input[i].toLowerCase();
			}
			else {
				res+=input[i].toUpperCase();
			}
		}
		return res;
	}