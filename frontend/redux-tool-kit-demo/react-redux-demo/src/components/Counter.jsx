import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  //  const { count, increment, decrement } = props;

  return (
    <>
      <h1>counter {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
