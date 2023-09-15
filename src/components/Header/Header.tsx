import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { setSearchValue } from "../../redux/itemSlice";
import { setOpenCart } from "../../redux/cartSlice";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { setOpenBurger } from "../../redux/burgerSlice";

const Header: React.FC = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  
  const openBurger = useSelector((state:RootState) => state.burgerItems.openBurger)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setSearchValue(""));
  }, []);

  const closeSearch = () => {
    setOpenSearch(false);
    dispatch(setSearchValue(""));
  };
  const openCart = () => {
    dispatch(setOpenCart());
  };
  const handleBurger = () => {
    dispatch(setOpenBurger(!openBurger))
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            NOIROVERCLOTHES
          </Link>
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
          <nav className={styles.nav}>
            <ul>
              <li onClick={() => setOpenSearch(true)}>search</li>
              <li onClick={openCart}>cart</li>
            </ul>
          </nav>
          <div className={`${styles.burger} ${openBurger ? styles.active : ''}`} onClick={handleBurger}>
            <div className={styles.burger_line}></div>
            <div className={styles.burger_line}></div>
            <div className={styles.burger_line}></div>
          </div>
        </div>
      </div>
      <Search closeSearch={closeSearch} openSearch={openSearch} />
    </header>
  );
};

export default Header;
