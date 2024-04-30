const reverseString = function(string) {
    let stringLength = string.length;
    let revString = '';
    let lastLetter;

    do {
        lastLetter = string.substr(stringLength,1);
        revString += lastLetter;
        --stringLength;
    } while (stringLength >= 0)

    return revString;
};




// Do not edit below this line
module.exports = reverseString;
