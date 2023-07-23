const sumAll = function(num1, num2) {
    let sortedArray = [];
    sortedArray.push(num1,num2);
    

    //Validate values 
    let status = false; 
    sortedArray.sort().forEach((item) => {
        if (item < 0 || (typeof item !== 'number')) {
            status = true;
        }
    })

    if (status == true) {
        return "ERROR";
    }

    // Use Guassian Summation to get sum of consecutive integers
    // More efficient than using a loop to sum each value; 

    const rangeStart = sortedArray[0];
    const rangeEnd = sortedArray[1];

    let numberOfIntegers = rangeEnd - rangeStart + 1;
    let sum = ( numberOfIntegers * (rangeStart + rangeEnd))/2;

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
