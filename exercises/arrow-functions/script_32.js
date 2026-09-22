const inventory = [
    { item: "Chair", qty: 5 },
    { item: "Desk", qty: 0 },
    { item: "Lamp", qty: 3 }];

const lowStock = inventory.filter((item) => item.qty < 5)

const lowStockCount = lowStock.length

console.log(lowStockCount);

//Expected: lowStockCount returns  2