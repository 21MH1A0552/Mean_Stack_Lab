class Product {
    private productId: number;
    public productName: string;
    protected productPrice: number;
    static productCategory: string;
  
    constructor(productId: number, productName: string, productPrice: number, productCategory: string) {
      this.productId = productId;
      this.productName = productName;
      this.productPrice = productPrice;
      Product.productCategory = productCategory;
    }
  
    displayProductDetails(): void {
      console.log(`Product ID: ${this.productId}`);
      console.log(`Product Name: ${this.productName}`);
      console.log(`Product Price: ${this.productPrice}`);
      console.log(`Product Category: ${Product.productCategory}`);
    }
  }
  
  class Gadget extends Product {
    constructor(productId: number, productName: string, productPrice: number, productCategory: string) {
      super(productId, productName, productPrice, productCategory);
    }
  
    displayGadgetDetails(): void {
      console.log('Accessing Product Details from Gadget Class:');
      this.displayProductDetails();
      console.log(`Protected Product Price: ${this.productPrice}`);
    }
  }
  
  const gadget = new Gadget(1, 'Smartphone', 500, 'Electronics');
  gadget.displayGadgetDetails();
  