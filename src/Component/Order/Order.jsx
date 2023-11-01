import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Order.css";
import { removeFromDb } from "../../utilities/fakedb.js";

import ReviewItem from "../ReviewItem/ReviewItem";
import { useState } from "react";

const Order = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shopContainer">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            handleRemoveFromCart={handleRemoveFromCart}
            key={product.id}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
