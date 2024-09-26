import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <>
      <h1>No of Icecreams - {numOfIcecreams}</h1>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <button onClick={() => dispatch(restocked(2))}>Restock Ice creams</button>
    </>
  );
};

export default IcecreamView;
