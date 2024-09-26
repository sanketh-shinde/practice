import React, { useState } from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  const { numOfCakes, buyCake } = props;
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
      <button onClick={() => buyCake(number)}>Buy {number} Cake</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
