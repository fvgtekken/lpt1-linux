const names = ["Ana", "Bruno"];

const users = names.map((n) => ({ name: n, active: true}));

console.log(users);

// Expected: users returns [{name: 'Ana', active: true}, {name: 'Bruno', active: true}]
