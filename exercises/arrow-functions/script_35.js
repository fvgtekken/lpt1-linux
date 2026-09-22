const prices = [10, 50, 100];

const applyTax = (p) => p * 1.21;

const pricesWithTax = prices.map(applyTax);

console.log(pricesWithTax);

// Expected: pricesWithTax returns [12.1, 60.5, 121]
