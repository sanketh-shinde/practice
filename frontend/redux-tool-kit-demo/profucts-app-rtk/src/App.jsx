import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./app/store";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
}

export default App;
