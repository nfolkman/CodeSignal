



function solution(crypt, solution) {
	// Attempt 1 : Incomplete
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

	// Attempt 2 : Complete (w/ help)

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