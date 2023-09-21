import React from "react";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";
import { setOpenCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/itemSlice";
import { RootState } from "../../redux/store";
import { setOpenBurger } from "../../redux/burgerSlice";

const BurgerMenu = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const openBurger = useSelector((state:RootState) => state.burgerItems.openBurger)
  const closeSearch = () => {
    setOpenSearch(false);
    dispatch(setSearchValue(""));
  };
 
  const dispatch = useDispatch();
  const openCart = () => {
    dispatch(setOpenCart());
  };

  return (
    <div className={`${styles.modal} ${openBurger ? styles.active : ''}`}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/collection/men">man</Link>
          </li>
          <li>
            <Link to="/collection/women">woman</Link>
          </li>
          <li>
            <Link to="/designers">designers</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.nav}>
        <ul>
          <li onClick={() => setOpenSearch(true)}>search</li>
          <li onClick={openCart}>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
