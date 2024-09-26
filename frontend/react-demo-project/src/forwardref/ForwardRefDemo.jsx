import { useRef } from "react";
import Child from "./Child";

const ForwardRefDemo = () => {
  const buttonRef = useRef(null);

  return (
    <>
      <button onClick={() => buttonRef.current.showToggle()}>
        Parent Button
      </button>
      <Child ref={buttonRef} />
    </>
  );
};

export default ForwardRefDemo;
