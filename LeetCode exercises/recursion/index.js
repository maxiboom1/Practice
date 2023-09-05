function hz(amount, coins, temp = 0){
    console.log(amount, coins, temp)
    let count = -1;
    
    for(let i = coins.length-1; i>-1; i--){
        
        // How much rested on divide (amount/arr[i])
        const mod = amount%coins[i];
        if (mod === 0){return Math.floor(amount/coins[i]) + temp}
        // how much times used the num plus the same from other recursions (temp)
        let newCount = Math.floor(amount/coins[i]) + temp; 
        
        // If our divide isn't clear, then check next num, and pass the current count too
        if(mod !== 0){newCount = hz(mod, coins.slice(0,-1), newCount); }
        
        // if(newCount !== -1 && count !== -1)(count = Math.min(count, newCount));
        
        // if (newCount !== -1) return newCount;
        
        //if(newCount !== -1 && count !== -1)(count = Math.min(count, newCount));
       
        //if(newCount !== -1 && count === -1 ){count = newCount};
        
    };
    
    return count;   
}

document.write(hz(8,[3,5])); 