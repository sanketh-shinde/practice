import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Car from "./Car.jsx";
import UseStateDemo from "./usestate/UseStateDemo.jsx";
import Counter from "./usestate/Counter.jsx";
import InputChange from "./usestate/InputChange.jsx";
import UseEffectDemo from "./useeffect/UseEffectDemo.jsx";
import Component1 from "./usecontext/Component1.jsx";
import Component3 from "./usecontext/Component3.jsx";
import FetchDataUseReducer from "./useReducer/FetchDataUseReducer.jsx";
import UseCallbackDemo from "./usecallback/UseCallbackDemo.jsx";
import Add from "./usestate/Add.jsx";
import UseMemeoDemo from "./usememo/UseMemoDemo.jsx";
import UseRefDemo from "./useref/UseRefDemo.jsx";
import Input from "./component/Input.jsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Update from "./component/Update.jsx";
import ForwardRefDemo from "./forwardref/ForwardRefDemo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    {/* <Car
      car={{
        name: "Alto K10",
        brand: "Maruthi Suzuki",
        model: "K 10",
        year: 2017,
      }}
    /> */}

    {/* <UseStateDemo
      car={{
        name: "Alto K10",
        brand: "Maruthi Suzuki",
        model: "K 10",
        year: 2017,
      }}
    /> */}

    {/* <Counter />
    <InputChange /> */}
    {/* <Add /> */}

    {/* <UseEffectDemo /> */}

    {/* <Component1 person={{ name: "Sanketh", age: 24 }} /> */}

    {/* <UseReducerDemo /> */}
    {/* <FetchDataUseReducer /> */}

    {/* <UseCallbackDemo /> */}

    {/* <UseMemeoDemo /> */}

    {/* <UseRefDemo /> */}

    {/* <BrowserRouter>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter> */}

    {/* <ForwardRefDemo /> */}
  </StrictMode>
);
