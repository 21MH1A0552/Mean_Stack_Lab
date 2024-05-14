function populateProductDetails(id, name) {
    return { productId: id, productName: name };
}
var productDetails = populateProductDetails(1, "Product A");
console.log(productDetails);
