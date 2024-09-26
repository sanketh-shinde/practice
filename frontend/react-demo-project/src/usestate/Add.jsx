import { useState } from "react";
import Display from "./Display";

const Add = () => {
  const [person, setPerson] = useState({ name: "", city: "" });
  const [display, setDisplay] = useState([]);

  const handle = () => {
    setDisplay([...display, person]);
    setPerson({ name: "", city: "" });
    console.log(display);
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter name"
        id="name"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="enter city"
        id="city"
        value={person.city}
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
      />

      <button onClick={handle}>Add</button>
      <Display details={display} />
    </>
  );
};

export default Add;
