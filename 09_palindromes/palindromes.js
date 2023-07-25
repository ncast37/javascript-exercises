const palindromes = function (string) {

    // Remove all non-alphanumeric characters and white space;
    let strNoPunctuation = string.replace(/[.,!()';:]/g, '');
    let strNoWhiteSpace = strNoPunctuation.replace(/\s/g,'');


    let cleanString = strNoWhiteSpace.toLowerCase();
    const cleanArray = cleanString.split('');
    const reverseArray = [...cleanArray].reverse();
    const length = cleanArray.length;

    let sameBool = true;
    for (let i = 0; i < length; i++){
        if (cleanArray[i] === reverseArray[i]){
            continue;
        }
        else {
            sameBool = false;
            break;
        }
    }

    return sameBool;

};

// Do not edit below this line
module.exports = palindromes;
