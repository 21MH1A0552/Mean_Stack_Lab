
interface Product {
    productId: number;
    productName: string;
  }
  function populateProductDetails(id: number, name: string): Product {
    return { productId: id, productName: name };
  }
  const productDetails = populateProductDetails(1, "Product A");
  console.log(productDetails);
  