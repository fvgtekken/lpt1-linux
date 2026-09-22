const numbers = [2, 4, 6];

const square = (number) => {
    return number * number
};

let i = 0;

const squaredNumbers = []

do {

    squaredNumbers.push(square(numbers[i]))
    i++

} while (i < numbers.length);

console.log(squaredNumbers);

// Expected: squaredNumbers returns [4, 16, 36]
