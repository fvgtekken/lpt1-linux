const people = [
  { name: "Leo", age: 17 },
  { name: "Mia", age: 22 },
  { name: "Tom", age: 15 }
];

const isAdult = (p) => p.age >= 18;

const addYear = (p) => ({ name: p.name, age: p.age + 1 });

const updatedAdults = people.filter(isAdult).map(addYear);

console.log(updatedAdults);

// Expected: updatedAdults return [{name: 'Mia', age: 23}]
