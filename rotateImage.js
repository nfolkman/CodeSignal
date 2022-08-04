


let solution = (a) => {
        // take 1   *Incomplete
        /* for (let i = 0; i<a.length; i++){
          for(let j = 0; j<a.length; j++){
          // a[i] increments up to a.length-1 in within each subarray
            if(i < a.length) i++
        
        
          }
          // a[i][j] decrements from a.length-1 by 1 each outer iteration until reaches 0	
              if(j > 0) j--
        }
        
        return a
        
        // take 2   *Complete (not my favorite)
        
          for(let i = 0; i<a.length/2; i++){
              for(let j = i; j<a.length -i -1; j++){
              let temp = a[i][j]
              a[i][j] = a[a.length-1-j][i]
              a[a.length - 1 -j][i] = a[a.length-1-i][a.length-1-j]
              a[a.length - 1 -i][a.length -1 -j] = a[j][a.length-1-i]
              a[j][a.length-1-i] = temp
              }
            }
        
        return a */
    
    
        // take 3   *Complete (Favorite)
    
        for(let r=0; r<a.length; r++){
            for(let c=r; c<a[0].length;c++){
                //swap row and column values
                [a[r][c], a[c][r]] = [a[c][r], a[r][c]]
            }
        }
                // reverse rows
        for(let row of a){
            row.reverse()
        }
    
        return a
        
    }
    
    
    // test case:
        solution([[1, 2, 3],[4, 5, 6],[7, 8, 9]])