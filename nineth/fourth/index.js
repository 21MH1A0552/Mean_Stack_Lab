var manufacturers = [
    { id: 1, price: 100 },
    { id: 2, price: 150 },
    { id: 3, price: 200 },
    { id: 4, price: 250 }
];
var myFunction = function (priceThreshold) {
    return manufacturers.filter(function (manufacturer) { return manufacturer.price >= priceThreshold; })
        .map(function (manufacturer) { return manufacturer.id; });
};
var result = myFunction(200);
console.log(result); // Output: [3, 4]
