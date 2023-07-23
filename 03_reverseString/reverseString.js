const reverseString = function(string) {


    // Return string if empty
    if (string == ""){
        return string;
    }

    const stringArray = string.split("");
    
    let reverseArray = [];

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reverseArray.push(stringArray[i]);
    }
    
    let reverseString = reverseArray.join("");

    return reverseString;

};

// Do not edit below this line
module.exports = reverseString;
