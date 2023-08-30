import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { setSearchValue } from "../../redux/itemSlice";
import { setOpenCart } from "../../redux/cartSlice";
import Search from "../Search/Search";

const Header:React.FC = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setSearchValue(""));
    return () => setOpenSearch(false);
  }, []);

  const closeSearch = () => {
    setOpenSearch(false);
    dispatch(setSearchValue(""));
  };
  const openCart = () => {
    dispatch(setOpenCart());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <nav className="header-nav">
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
          <Link className="logo" to="/">
            NOIROVERCLOTHES
          </Link>
          <nav className="header-nav">
            <ul>
              <li onClick={() => setOpenSearch(true)}>search</li>
              <li onClick={openCart}>cart</li>
            </ul>
          </nav>
        </div>
      </div>
      {openSearch ? <Search closeSearch={closeSearch} /> : ''}
    </header>
  );
};

export default Header;
