interface Category {
    categoryId: number;
    categoryName: string;
  }
  
  interface Product {
    productId: number;
    productName: string;
    price: number;
  }
  
  interface ProductList extends Category, Product {
    quantity: number;
  }
  const product1: ProductList = {
    categoryId: 1,
    categoryName: 'Electronics',
    productId: 101,
    productName: 'Smartphone',
    price: 500,
    quantity: 2,
  };
  
  console.log(product1);
  