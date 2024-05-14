var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = productId;
    }
    Product.prototype.getProductId = function () {
        return "Product id is ".concat(this.productId);
    };
    return Product;
}());
var product = new Product(123);
console.log(product.getProductId()); // Output: Product id is 123
