var mobiles = [
    { name: "Galaxy S21", brand: "Samsung" },
    { name: "iPhone 13", brand: "Apple" },
    { name: "OnePlus 9", brand: "OnePlus" },
    { name: "Pixel 6", brand: "Google" }
];
function getMobileByBrand(brand) {
    return mobiles.filter(function (mobile) { return mobile.brand === brand; });
}
var brand = "Samsung";
var samsungMobiles = getMobileByBrand(brand);
console.log(samsungMobiles);
