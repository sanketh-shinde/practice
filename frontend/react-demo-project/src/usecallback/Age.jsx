import { memo } from "react";

const Age = ({ count }) => {
  console.log(`render age - ${count}`);
  return (
    <>
      <h1>age - {count}</h1>
    </>
  );
};

export default memo(Age);
