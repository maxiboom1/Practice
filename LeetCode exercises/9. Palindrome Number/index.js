/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x= String(x);
  if (x.length <= 1) return true;
  if (x < 0) return false; 
  
  while(x.length > 1){
    if(x.slice(0,1) !== x.slice(-1)) return false;
    x = x.slice(1,-1);
  }
  return true;
};

