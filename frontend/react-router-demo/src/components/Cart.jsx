import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Cart Page</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default Cart;
