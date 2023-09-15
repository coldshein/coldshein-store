import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Cart from "./Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";

const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <BurgerMenu/>
      <Outlet />
      <Cart/>
    </div>
  );
};

export default MainLayout;
