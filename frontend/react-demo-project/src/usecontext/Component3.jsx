import { useContext } from "react";
import { UserContext } from "./Component1";

const Component3 = () => {
  const person = useContext(UserContext);

  return (
    <>
      <h1>My name is {person.name}</h1>
      <h1>I am {person.age} years old</h1>
    </>
  );
};

export default Component3;
