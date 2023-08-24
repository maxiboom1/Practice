/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(s.length<2) return false;
    
    const arr = [];
    const map = { "(": ")", "{": "}", "[": "]" }; 
    
    for(let i =0; i< s.length; i++){
        
        if(map[s[i]] !== undefined){
            
            arr.push(s[i]);

        } else {
          
          // We access the map value of last char in arr, so if the last char in arr is "(", we access map["("] and gets its value (")")   
          const oppositeChar = map[arr[arr.length-1]];
          
          // If current char === opposite to last in arr char, then we remove last char, and move on. 
          if(s[i] === oppositeChar){ arr.pop(); } else { return false };
          
        }
    }
    
    return arr.length === 0 ? true : false;
       
  };


