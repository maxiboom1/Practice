/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    let result = 1;    
    let hash = {};

    for(let i =0; i < s.length; i++){
        
        const substr = s.slice(i);
        
        for(let j = 0; j<substr.length; j++){
            
            if(hash[substr[j]] === undefined){
                hash[substr[j]] = 1
            } else {
                result = Math.max(Object.keys(hash).length ,result);
                hash = {};
                break;
            }
        }
    }
    
    return Math.max(Object.keys(hash).length ,result);
};

