const temperatures = [22, -5, 18, -3, 30];

const negativeTemps = temperatures.filter((temp) => {
    return temp < 0
});

const absoluteTemps = negativeTemps.map((temp) => { 
    return temp * -1
})

console.log(absoluteTemps);

// Expected: absoluteTemps returns [5, 3]
