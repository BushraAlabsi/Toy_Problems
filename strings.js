// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){

		return "Position of alphabet: "+ ((character.toLowerCase().charCodeAt())-96);
	}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (s,n) {
		var result="";
		for (var index = 0; index < n; index++) {
			 result +=s;
			
		}
		return result;
	}