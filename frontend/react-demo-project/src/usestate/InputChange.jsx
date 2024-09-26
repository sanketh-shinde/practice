import { useState } from "react";

const InputChange = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState();

  const change = (e) => {
    setName(e.target.value);
  };

  const display = () => {
    setTitle(name);
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter a name"
        value={name}
        onChange={change}
      />
      <button onClick={display}>submit</button>
      <h1>{title}</h1>
    </>
  );
};

export default InputChange;
