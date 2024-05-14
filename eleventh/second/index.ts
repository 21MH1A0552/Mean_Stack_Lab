class Product {
    constructor(public productId: number, public productName: string, public price: number)
    {
        
    }
  }
  const product1 = new Product(1, 'Mobile Phone', 500);
  const product2 = new Product(2, 'Laptop', 1000);
  const product3 = new Product(3, 'Tablet', 300);
  const productList: Product[] = [];
  productList.push(product1, product2, product3);
  
  console.log(productList);
  