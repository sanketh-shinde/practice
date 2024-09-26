import { memo } from "react";

const Salary = ({ count }) => {
  console.log(`render salary - ${count}`);
  return (
    <>
      <h1>salary = {count}</h1>
    </>
  );
};

export default memo(Salary);
