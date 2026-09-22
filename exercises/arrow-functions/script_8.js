const numbers = [1, 2, 3, 4];

const total = numbers.reduce((accumulator, currentValue)=> {
    return accumulator + currentValue
})

console.log(total);

// Expected: total returns 10
