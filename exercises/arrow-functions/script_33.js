const temps = [30, 12, 25];

const toFahrenheit = (celsius) => celsius * 9/5 + 32;

let i = 0;

const fahrenheitTemps = [];

while ( i < temps.length ) {

fahrenheitTemps.push(toFahrenheit(temps[i]))

i++

};

console.log(fahrenheitTemps);

// Expected: fahrenheitTemps returns [86, 53.6, 77]
