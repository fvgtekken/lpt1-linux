const products = [{ name: "Chair", price: 50 }, { name: "Table", price: 120 }, { name: "Lamp", price: 25 }];

const discountedProducts = products.map((product) => {
   return { name: product.name, price: product.price * 0.9 }
})

console.log(discountedProducts);

// Expected: discountedProducts returns [{name: 'Chair', price: 45}, {name: 'Table', price: 108}, {name: 'Lamp', price: 22.5}]
