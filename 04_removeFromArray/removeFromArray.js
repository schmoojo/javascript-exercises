const removeFromArray = function(array, ...args) {  

    return result = array.filter(val => !args.includes(val));  
};

// Do not edit below this line
module.exports = removeFromArray;
