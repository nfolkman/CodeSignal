/* Description: Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
each statue having an non-negative integer size. 
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue 
will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. 
Help him figure out the minimum number of additional statues needed.  */



function solution(statues) {
    let count = 0
    statues = statues.sort((a,b)=> a-b)
    
    if(statues.length === 1) return 0
    
    
    
   for(let i = 0; i<statues.length; i++){
       
       if(statues[i+1] - statues[i] > 1) count += statues[i+1] - statues[i] -1
   }
   
   return count
}

// test cases:
    solution([6, 2, 3, 8])
    solution([0, 3])
    solution([5, 4, 6])