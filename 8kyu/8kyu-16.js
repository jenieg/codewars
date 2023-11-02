//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    const squareArr = []
    
    numbers.forEach(function (element) {
        const result = Math.pow(element, 2)
        squareArr.push(result)
    });

    
    return squareArr.reduce(function (acc, c) {
        return acc + c;
    }, 0)
}