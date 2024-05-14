function GetPriceByColor(color: string): string {
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
  
  const colors = ['GoldPlatinum', 'PinkGold', 'SilverTitanium'];
  
  colors.forEach(color => {
    const price = GetPriceByColor(color);
    console.log(`Price for ${color}: ${price}`);
  });
  