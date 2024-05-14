var cart = [];
var addToCart = function () {
    var products = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        products[_i] = arguments[_i];
    }
    cart.push.apply(cart, products);
};
addToCart("Ipad", "Laptop", "cover");
console.log(cart);
