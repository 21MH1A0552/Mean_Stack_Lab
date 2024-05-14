
interface Mobile {
    name: string;
    brand: string;
  }
  const mobiles: Mobile[] = [
    { name: "Galaxy S21", brand: "Samsung" },
    { name: "iPhone 13", brand: "Apple" },
    { name: "OnePlus 9", brand: "OnePlus" },
    { name: "Pixel 6", brand: "Google" }
  ];
  function getMobileByBrand(brand: string): Mobile[] {
    return mobiles.filter(mobile => mobile.brand === brand);
  }
  const brand = "Samsung";
  const samsungMobiles = getMobileByBrand(brand);
  console.log(samsungMobiles);
  