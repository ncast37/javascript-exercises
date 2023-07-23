const removeFromArray = function(array, ...values) {

const valueArrayLength = values.length;
const arrayLength = array.length;

for (let i = 0; i < valueArrayLength; i ++){
    for (let j = 0; j < arrayLength; j++) {

        if (values[i] == array[j]){
            if (typeof values[i] == typeof array[j]){
                array.splice(j,1);
            }
        }

    }
}

return array;
};

// Do not edit below this line
module.exports = removeFromArray;
