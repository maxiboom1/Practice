function checkInclusion(s1, s2) {

    if(s1.length>s2.length) return false;
    
    const hash = {};
    
    // Create hash template, to reuse it in for loop later
    for(let i =0; i< s1.length;i++ ){
        if(hash[s1[i]] === undefined){
            hash[s1[i]] = 1;
        } else {
            hash[s1[i]] += 1; 
        }
    }

    // Run over s2, create subStr, compare it with hash copy and adjust hash if there is any matches. 
    // If there is coplete matches with hash - then its permutation.
    for(let i = 0; i<= s2.length-s1.length; i++){
        
        let permutationDetected = true;

        const hashTable = {...hash}; // Create hash copy
        
        const subStr = s2.slice(i,i+s1.length);
        
        // Run over subStr and compare with hash copy
        for(let t=0;t<subStr.length;t++){
            if (hashTable.hasOwnProperty(subStr[t])){
                hashTable[subStr[t]] -= 1;
            } else {
                break;
            }
        }

        // Check hash copy - if all zero => bingo
        for (let key in hashTable) {
            if (hashTable[key] !== 0){
                permutationDetected = false;
                break;
            }
        }
        
        if(permutationDetected) return true;
    }

    return false;

};

document.write(checkInclusion("ab", "eidboaoo"));
