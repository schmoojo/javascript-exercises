const repeatString = function(word, number) {
    let result = word;
   
    while (number >1 ){
        result += word;
        --number;
    }

    if (number === 0) {
        result = '';
    } else if (number < 0){
        result = "ERROR"; 
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
