const fibonacci = function(n) {

    //Don't allow negative numbers 
    if (n < 0){
        return "OOPS";
    }

    //Convert to integers
    const num = parseInt(n);
    let fibSeq = [0, 1];

    let fibNum;
    let i = 1; 
    while (i != num) {
        fibNum = fibSeq[i] + fibSeq[i - 1];
        fibSeq.push(fibNum)
        i++; 
    }

    return fibSeq[num];

};

// Do not edit below this line
module.exports = fibonacci;
