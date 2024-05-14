var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(productId, productName, productPrice, productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        Product.productCategory = productCategory;
    }
    Product.prototype.displayProductDetails = function () {
        console.log("Product ID: ".concat(this.productId));
        console.log("Product Name: ".concat(this.productName));
        console.log("Product Price: ".concat(this.productPrice));
        console.log("Product Category: ".concat(Product.productCategory));
    };
    return Product;
}());
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget(productId, productName, productPrice, productCategory) {
        return _super.call(this, productId, productName, productPrice, productCategory) || this;
    }
    Gadget.prototype.displayGadgetDetails = function () {
        console.log('Accessing Product Details from Gadget Class:');
        this.displayProductDetails();
        console.log("Protected Product Price: ".concat(this.productPrice));
    };
    return Gadget;
}(Product));
var gadget = new Gadget(1, 'Smartphone', 500, 'Electronics');
gadget.displayGadgetDetails();
