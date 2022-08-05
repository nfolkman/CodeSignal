/* Description: After recently joining Instacart's beta testing developer group, you decide to experiment with their new API. 
You know that the API returns item-specific display-ready strings like 10.0% higher than in-store 
or 5.0% lower than in-store that inform users when the price of an item is different from the one in-store. 
But you want to extend this functionality by giving people a better sense of how much more they will be paying for their entire shopping cart.

Your app lets a user decide the total amount x they are willing to pay via Instacart over in-store prices. 
This you call their price sensitivity.

Your job is to determine whether a given customer will be willing to pay for the given items in their cart based on their stated price sensitivity x.   */



function solution(prices, notes, x) {

    // God-forsaken Attempt lol
    
    /* let lower = []
    let higher = []
    let same = []
      for(let i = 0; i<notes.length; i++){
        let priceCompare = notes[i]
        if(priceCompare.substring(0,priceCompare.indexOf('e')).includes('low')) {
          lower.push(priceCompare.substring(0,priceCompare.indexOf('.'))
        } else if(priceCompare.substring(0,priceCompare.indexOf('e')).includes('high')) {
          higher.push(priceCompare.substring(0,priceCompare.indexOf('.'))
          }
          if(priceCompare.substring(0,priceCompare.indexOf('e')).includes('low',i)) {
          lower.push(priceCompare.substring(0,priceCompare.indexOf('.')))
        }else if(priceCompare.substring(0,priceCompare.indexOf('e')).includes('high',i)){
          higher.push(priceCompare.substring(0,priceCompare.indexOf('.')))
        }else if(priceCompare.includes('Same')){same.push('Same',i)}
    
    
      }
      // make differences array, deposit differences between online pricing and in-store, reduce to find sum total difference, compare to x (if sum total is bigger than x it's a no-go)
    
    
    
        let differences = []
        
        // deposit sames
        for(let sames of same){
            differences.push(0)
        }
        
        // deposit differences of lowers
        for(let i = 0; i<lower.length; i++){
            differences.push(+(prices[i]*(+lower[i]/100)).toFixed(1))
        }
        
        // deposit differences of highers
        for(let i = 0; i<higher.length; i++){
            differences.push((higher[i]-(higher[i]/higher[i]/100))*-1)
        }
        
        
        return differences.reduce((a,b)=> a+b)
        
        */
    
    
        //// Solution////
        let sum = 0;
        
        for(let index in prices){
            let split = notes[index].split('%');
            
            if(split.length > 1){
                let per = (split[1].includes('high')?1:-1)*parseFloat(split[0]);
                sum += prices[index]-prices[index] * 100 /(100+per);
            }
        }
        
        return sum <= x;
    }
    
    // test cases:
    solution([48,165],['20.00% lower than in-store','10.00% higher than in-store'],2)