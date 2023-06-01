// forEach : to fire call back function for each item in the array
const names = ['ali', 'ahmed', 'soso', 'lolo'];
//names.forEach((name) => console.logname);

// --------------------------1-Filter--------------------------
const scores = [10, 30, 15, 25, 50, 40];
const filteredScores = scores.filter((score) => score > 30);
//console.log(filteredScores);
const users = [
    { name: 'ali', premium: true },
    { name: 'ahmed', premium: false },
    { name: 'soso', premium: false },
    { name: 'lolo', premium: true }
];
const premiumUsers = users.filter(user => user.premium);
//console.log(premiumUsers);

// ------------2-Map : operation over array------------------
const prices = [20, 10, 30, 25, 15, 40, 80, 5];
const salePrices = prices.map((price) => {
    return price / 2;
});
//console.log(salePrices);
const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];
const saleProducts = products.map((product) => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 };
    } else {
        return product;
    }
});
//console.log(saleProducts, products);
// ---------------------3-Reduce---------------------------
// reduce method : return single value based on accumulator
const scores1 = [10, 20, 60, 40, 70, 90, 30];
const result = scores1.reduce((acc, curr) => {
    if (curr > 50)
        acc++;
    return acc;
}, 0);
//console.log(result);

// ---------------------4-Find--------------------------
// find method
const scores2 = [10, 5, 0, 40, 60, 10, 20, 70];
const firstHighScore = scores2.find((score) => {
    return score > 50;
});
//console.log(firstHighScore);

//----------------------5-Sorting--------------------------
// example 1
const names1 = ['ali', 'ahmed', 'soso', 'lolo'];
names1.sort();
//console.log(names1);

// example 2
const scores3 = [10, 50, 20, 5, 35, 70, 45];
scores3.sort();
//console.log(scores3);

// example 3
const players = [
    { name: 'ali', score: 20 },
    { name: 'ahmed', score: 10 },
    { name: 'mohamed', score: 1000 },
    { name: 'soso', score: 50 },
    { name: 'soso', score: 50 },
    { name: 'lolo', score: 30 },
    { name: 'mohamed', score: 70 }
];

players.sort((a, b) => {
    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score) {
        return 1;
    } else {
        return 0;
    }
})
//players.sort((a, b) => b - a);
//console.log(players);
//----------------------6-Chaining--------------------------
const products1 = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];

const filtered = products1
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds `);
console.log(filtered);
