function GetPriceByColor(color) {
    switch (color) {
        case 'GoldPlatinum':
            return '$1000';
        case 'PinkGold':
            return '$900';
        case 'SilverTitanium':
            return '$800';
        default:
            return 'Price not available';
    }
}
var colors = ['GoldPlatinum', 'PinkGold', 'SilverTitanium'];
colors.forEach(function (color) {
    var price = GetPriceByColor(color);
    console.log("Price for ".concat(color, ": ").concat(price));
});
