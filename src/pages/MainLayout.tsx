import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Cart from "./Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const MainLayout = () => {
  const openCart = useSelector((state: RootState) => state.cartItems.openCart )
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      {
        openCart && <Cart />
      }
    </div>
  );
};

export default MainLayout;
