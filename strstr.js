/* Description: Avoid using built-in functions to solve this challenge. Implement them yourself, 
since this is what you would be asked to do during a real interview.

Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. 
The function should return an integer indicating the index in s of the first occurrence of x. 
If there are no occurrences of x in s, return -1.  */


// I will use any tools at my disposal to solve a problem efficiently. That's why built-in functions exist. :)
function solution(s, x) {
    if(s.includes(x)) return s.indexOf(x)
	else return -1
}

// test cases:
console.log(solution("CodefightsIsAwesome",'IsA'))  // 10
console.log(solution("CodefightsIsAwesome",'IA'))  // -1
console.log(solution("lrnkbldxguzgcseccinlizyogwqzlifxcthdgmanjztlt", "an"))  // 38