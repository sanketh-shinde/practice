import { memo } from "react";

const Title = () => {
  console.log("render title");

  return (
    <>
      <h1>useCallback() hook</h1>
    </>
  );
};

export default memo(Title);
