const numbers = [4, 7, 10];

const numberInfo = numbers.map((n) => ({value: n, isEven: n % 2 === 0}));

console.log(numberInfo);

// Expected: numberInfo returns [{value: 4, isEven: true}, {value: 7, isEven: false}, {value: 10, isEven: true}]
