import { NavLink, Outlet, useNavigate } from "react-router-dom";
const Product = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Product Page</h1>
      <button onClick={() => navigate("/cart", { replace: true })}>
        Add to cart
      </button>

      <nav>
        <NavLink to="add-product">Add Product</NavLink>
        <NavLink to="update-product">Update Product</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Product;
