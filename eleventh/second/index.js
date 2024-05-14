var Product = /** @class */ (function () {
    function Product(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    return Product;
}());
// Create objects of the Product class
var product1 = new Product(1, 'Mobile Phone', 500);
var product2 = new Product(2, 'Laptop', 1000);
var product3 = new Product(3, 'Tablet', 300);
// Array to hold the products
var productList = [];
// Place the products into the productList array
productList.push(product1, product2, product3);
console.log(productList);
