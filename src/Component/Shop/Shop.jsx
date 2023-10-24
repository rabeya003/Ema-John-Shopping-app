import { useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import "./Shop.css";
import { useEffect } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
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
    setCart(saveCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exits = cart.find((pd) => pd.id === product.id);
    if (!exits) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exits.quantity = exits.quantity + +1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exits];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shopContainer">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
