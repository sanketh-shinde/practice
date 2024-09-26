import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1>No of Cakes - {numOfCakes} </h1>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(3))}>Restock Cakes</button>
    </>
  );
};

export default CakeView;
