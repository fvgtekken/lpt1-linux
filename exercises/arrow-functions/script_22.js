const prices = [15, 30, 45];

const sum = (accumulator, currentValue)  => {
    return accumulator + currentValue
}

const total = prices.reduce(sum, 0);

console.log(total);

//Expected: total returns 90