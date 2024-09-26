import { createContext } from "react";
import Component2 from "./Component2";

export const UserContext = createContext();

const Component1 = (props) => {
  return (
    <>
      <UserContext.Provider value={props.person}>
        <Component2 />
      </UserContext.Provider>
    </>
  );
};

export default Component1;
