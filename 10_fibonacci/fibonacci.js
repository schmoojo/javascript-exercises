const fibonacci = function(index) {

    if(index < 0 ) return "OOPS";

    let fiboArray = [0,1];

    for(let i =2; i <= index; i++ ){
        fiboArray[i] = fiboArray[i-1] + fiboArray[i-2];
    }
    return fiboArray[index];
};

// Do not edit below this line
module.exports = fibonacci;
