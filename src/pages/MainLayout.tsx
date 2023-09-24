import React from "react";
import Header from "../components/Header/Header";
import { Outlet, useParams } from "react-router-dom";
import Cart from "./Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import PageHeader from "../components/PageHeader/PageHeader";

const MainLayout = () => {
  const { id } = useParams();
  return (
    <>
     <Header />
      <div className="app-container">
       
        <BurgerMenu />
        {id ? "" : <PageHeader />}
        <Outlet />
      </div>
      <Cart />
    </>
  );
};

export default MainLayout;
