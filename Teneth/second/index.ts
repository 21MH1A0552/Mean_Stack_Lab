
interface Product {
    productId: number;
    productName: string;
  }
  const populateProductDetails = (id: number, name: string): Product => {
    return { productId: id, productName: name };
  };

  const productDetails = populateProductDetails(1, "Product A");
  console.log(productDetails);
  