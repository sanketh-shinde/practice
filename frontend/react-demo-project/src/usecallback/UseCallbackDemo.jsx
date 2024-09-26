import { useCallback, useState } from "react";
import Age from "./Age";
import Button from "./Button";
import Salary from "./Salary";
import Title from "./Title";

const UseCallbackDemo = () => {
  const [age, setAge] = useState(24);
  const [salary, setSalary] = useState(20000);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prevSalary) => prevSalary + 1000);
  }, [salary]);

  return (
    <>
      <Title />
      <Age count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Salary count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
};

export default UseCallbackDemo;
