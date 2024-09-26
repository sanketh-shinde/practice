import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import React from "react";
import Profile from "./components/Profile";
import { AuthProvider } from "./utils/auth";
import Login from "./components/Login";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading Please Wait...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="product" element={<Product />}>
          <Route index element={<AddProduct />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="update-product" element={<UpdateProduct />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
