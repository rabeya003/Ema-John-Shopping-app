import { getShoppingCart } from "../utilities/fakedb";

const CartProductLoader = async () => {
  const loaderProducts = await fetch("/products.json");
  const products = await loaderProducts.json();
  // if cart data is in database,you have to use async await
  const storedCart = getShoppingCart();
  const saveCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      saveCart.push(addedProduct);
    }
  }

  // return {saveCart, products};
  return saveCart;
};
export default CartProductLoader;
