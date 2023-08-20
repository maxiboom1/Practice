function compare(s, p){

    const result = [];
    
    for(let i=0; i<s.length; i++){ // run over s
    
        let anagramDetected = true;
        
        // Extract part ot s
        let partToCheck = s.slice(i,i+p.length);
        
        // Create compare obj and set each prop value (letters of "p") with count value
        // Example1: p = "aabc", compareObj = {a: 2, b: 1, c: 1}
        // Example2: p = "ab", compareObj = {a: 1, b: 1}
        const compareObj = {};
        for(let t = 0; t< p.length; t++){
            if(compareObj[p[t]] === undefined){
                compareObj[p[t]] = 1;
            } else {
                compareObj[p[t]] += 1;
            }   
        }
        console.log(compareObj);
        // Run over the extracted part and compare
        for(let ii=0; ii<partToCheck.length; ii++){
        
            // If obj has the same prop as the iterated char, set it to 1
            if (compareObj.hasOwnProperty(partToCheck[ii])){
                compareObj[partToCheck[ii]] -= 1;
            }
        }
        
        // Check the compare obj - if all props are 0, then its anagram!
        for (key in compareObj) {
            if (compareObj[key] !== 0){
                anagramDetected = false;
                break;
            }
        }
        
        if(anagramDetected){result.push(i);}

    }
    if (result.length === 0) return [-1] ;
    return result;
    
    }
    
    document.write(compare("abddfgasddfgscab", "abc"));
