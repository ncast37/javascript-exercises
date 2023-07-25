const findTheOldest = function(array) {
    let oldest = array.reduce((accumulator, current) => {
        let currentAge;
        let accumuatorAge; 
        const date = new Date();
        let thisYear = date.getFullYear();

        if (current.hasOwnProperty('yearOfDeath')){
            currentAge = current.yearOfDeath - current.yearOfBirth;
        } else {
            currentAge = thisYear - current.yearOfBirth;
        }

        if (accumulator.hasOwnProperty('yearOfDeath')){
            accumuatorAge = accumulator.yearOfDeath - accumulator.yearOfBirth;
        } else {
            accumuatorAge = thisYear - accumulator.yearOfBirth;
        }

        if (currentAge > accumuatorAge){
            accumulator = current;
        }

        return accumulator;
    }
    ) 

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
