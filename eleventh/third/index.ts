class Product {
    private productId: number;
  
    constructor(productId: number) {
      this.productId = productId;
    }
  
    getProductId(): string { 
      return `Product id is ${this.productId}`;
    }
  }
  
  const product = new Product(123);
  console.log(product.getProductId()); // Output: Product id is 123
  