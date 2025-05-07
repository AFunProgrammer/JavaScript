function romanNumerals(data) {
    const numerals = {
        "I":1,"IV":4,"V":5,"IX":9,
        "X":10,"XL":40,"L":50,"XC":90,
        "C":100,"CD":400,"D":500,"CM":900,
        "M":1000
    };
    let remaining = data;
    let output = "";
    console.log(`-----------------------------------------`);
    console.log(`input: ${data} set remaining: ${remaining}`);
    //console.log(`numerals in reverse: ${Object.entries(numerals).reverse()}`);
    
    while ( remaining > 0 ) {
        for (const [key,value] of Object.entries(numerals).reverse()){
            if ( value <= remaining ) {
                output += key;
                remaining -= value;
                console.log(`found value: ${value} with symbol: ${key} remaining: ${remaining}`);
                break;
            }
        }
    }
    
    console.log(`output: ${output}`);
    return output;
}

romanNumerals(1984);
romanNumerals(22184);