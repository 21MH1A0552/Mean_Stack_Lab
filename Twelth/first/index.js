var Product = /** @class */ (function () {
    function Product(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    Product.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    Product.prototype.getProductId = function () {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Product Price:", this.price);
    };
    return Product;
}());
var product = new Product(123, "Product A", 100);
product.getProductId();
