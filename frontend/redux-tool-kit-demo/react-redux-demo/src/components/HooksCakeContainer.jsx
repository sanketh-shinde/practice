import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const [number, setNumber] = useState(1);

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      {numOfCakes <= 0 ? (
        <p>Out of Stock</p>
      ) : (
        <>
          <p>No of Cakes - {numOfCakes}</p>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </>
      )}
      <button onClick={() => dispatch(buyCake(number))}>Buy Cake</button>
    </>
  );
};

export default HooksCakeContainer;
