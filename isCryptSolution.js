/* Description: A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, 
such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.

You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. 
The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.

If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, 
becomes a valid arithmetic equation containing no numbers with leading zeroes, the answer is true. 
If it does not become a valid arithmetic solution, the answer is false.

Note that number 0 doesn't contain leading zeroes (while for example 00 or 0123 do).  */



function solution(crypt, solution) {
	// Solution 1 : Incomplete
	/* // crypt = array of 3 strings/words
	// solution = a mapping of letters and digits
	
	for(let i = 0; i< solution.length; i++){
	  if(solution[i][1]=== '0'){
	  for(let j = 0; j<solution[i].length; j++){
	      if(solution[i][j].includes('0')){
	        for(let c = 0; c<=3; c++){
	          if(crypt[c].includes(solution[i][j])&&crypt[c][0]==solution[i][j]) return false
	        }
	      }
	    }
	      for(let i = 0; i<crypt.length; i++){
	        if(crypt[i][0]==solution[i][0]) return false
	        else return true
	      }
	    }
	  } */

	// Solution 2 : Complete (w/ help)

	/* let hasLeadingZeros = false
	
	const decrypted = crypt.map(word => {
	  const number = word.split('').map(letter => {
	    return solution.find(key => key[0] === letter)[1]
	  }).join('')
	
	    if(number.startsWith('0') && number.length > 1) {
	    hasLeadingZeros = true
	  }
	
	  return Number.parseInt(number)
	
	})
	
	return !hasLeadingZeros && decrypted[0] + decrypted[1] === decrypted[2] */



	// Solution 3 : makes more sense

    function hasLeadingZeros(s) {
        return s.length > 1 && s[0] == '0';
    }

    let m = new Map(solution);
    let [w1, w2, w3] = crypt.map(w => Array.from(w).map(l => m.get(l)).join(''));
    
    return (
        !hasLeadingZeros(w1) &&
        !hasLeadingZeros(w2) &&
        !hasLeadingZeros(w3) &&
        parseInt(w1) + parseInt(w2) == parseInt(w3)
    )
}


// test cases: 
console.log(solution(["SEND", "MORE", "MONEY"],[['O', '0'],
            ['M', '1'],
            ['Y', '2'],
            ['E', '5'],
            ['N', '6'],
            ['D', '7'],
            ['R', '8'],
            ['S', '9']])) // true
console.log(solution(["TEN", "TWO", "ONE"],[['O', '1'],
            ['T', '0'],
            ['W', '9'],
            ['E', '5'],
            ['N', '4']])) // false