// productUtility.ts
var ProductUtility;
(function (ProductUtility) {
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
})(ProductUtility || (ProductUtility = {}));
module.exports = Product;
