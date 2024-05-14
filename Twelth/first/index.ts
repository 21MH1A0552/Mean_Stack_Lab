class Product {
    productId: number;
    productName: string;
    price: number;
  
    constructor(productId: number, productName: string, price: number) {
      this.productId = productId;
      this.productName = productName;
      this.price = price;
    }
  
    setProductId(productId: number): void {
      this.productId = productId;
    }
  
    getProductId(): void {
      console.log("Product ID:", this.productId);
      console.log("Product Name:", this.productName);
      console.log("Product Price:", this.price);
    }
  }
  
  const product = new Product(123, "Product A", 100);
  product.getProductId();
  