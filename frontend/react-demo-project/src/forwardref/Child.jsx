import { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((_, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    showToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Child Button</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Child;
