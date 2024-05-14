
let cart: string[] = [];
const addToCart = (...products: string[]): void => {
  cart.push(...products);
};
addToCart("Ipad", "Laptop", "cover");
console.log(cart); 
