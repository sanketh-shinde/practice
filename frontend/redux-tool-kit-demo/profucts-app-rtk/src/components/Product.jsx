import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/cart/cartSlice";

const Product = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <>
      {
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.image} width="150px" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p> &#36; {product.price}</p>
              <p>Rating - {product.rating.rate} Stars</p>
              <button onClick={() => dispatch(add(product))}>add</button>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Product;
