import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../features/cart/cartSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {carts.length == 0 ? (
        <h1>No product in cart</h1>
      ) : (
        <ul>
          {carts.map((product, index) => (
            <li key={index}>
              <img src={product.image} alt={product.image} width="150px" />
              <h3>{product.title}</h3>
              <p> &#36; {product.price}</p>
              <button onClick={() => dispatch(remove(product.id))}>
                remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cart;
