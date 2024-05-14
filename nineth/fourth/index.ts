
interface Manufacturer {
    id: number;
    price: number;
  }
  let manufacturers: Manufacturer[] = [
    { id: 1, price: 100 },
    { id: 2, price: 150 },
    { id: 3, price: 200 },
    { id: 4, price: 250 }
  ];
   
  const myFunction = (priceThreshold: number): number[] => {
    return manufacturers.filter(manufacturer => manufacturer.price >= priceThreshold)
                        .map(manufacturer => manufacturer.id);
  };

  const result = myFunction(200);
  console.log(result); 
  