import { useState } from "react";

const UseStateDemo = (props) => {
  const [car, setCar] = useState(props.car);

  let change = () => {
    setCar((prevName) => {
      return { ...prevName, name: "G Wagon", brand: "Mercdes" };
    });
  };

  return (
    <>
      <h1>{car.name}</h1>
      <h1>{car.brand}</h1>
      <button onClick={change}>Change</button>
    </>
  );
};

export default UseStateDemo;
