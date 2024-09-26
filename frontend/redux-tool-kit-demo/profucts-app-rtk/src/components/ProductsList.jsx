import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import Product from "./Product";

const ProductsList = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const { isLoading, products, error } = product;

  return (
    <>
      <h1>Products</h1>
      {isLoading && <p>Loading Please Wait</p>}
      {!isLoading && error ? <p>{error}</p> : null}
      {!isLoading && products.length ? <Product products={products} /> : null}
    </>
  );
};

export default ProductsList;
