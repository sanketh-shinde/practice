import { useMemo, useState } from "react";

const UseMemeoDemo = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne((prevCountOne) => prevCountOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo((prevCountTwo) => prevCountTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <>
      <h1>Count One - {countOne}</h1>
      <h1>{isEven ? "Even" : "Odd"}</h1>
      <button onClick={incrementOne}>Increment</button>

      <h1>Count Two - {countTwo}</h1>
      <button onClick={incrementTwo}>Increment</button>
    </>
  );
};

export default UseMemeoDemo;
