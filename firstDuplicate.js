/* Description: Given an array a that contains only numbers in the range from 1 to a.length, 
find the first duplicate number for which the second occurrence has the minimal index. 
In other words, if there are more than 1 duplicated numbers, 
return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. 
If there are no such elements, return -1.    */


function solution(a) {
    let set = new Set()
  
      for(let i = 0; i<a.length; i++){
          if(set.has(a[i])) return a[i]
  
          set.add(a[i])
      }
  
  return -1
  
  }

  // test cases:
  solution([2, 1, 3, 5, 3, 2])
  solution([2, 4, 3, 5, 1])