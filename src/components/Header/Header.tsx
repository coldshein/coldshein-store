import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { setSearchValue } from "../../redux/itemSlice";
import { setOpenCart } from "../../redux/cartSlice";



const Header = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.shopItems.searchValue
  );
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

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
              <li onClick={openCart}>
                cart
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {openSearch ? (
        <div className="search-modal">
          <div className="search-block">
            <div className="search-bar">
              <input
                type="text"
                placeholder=" "
                onChange={onChangeInput}
                value={searchValue}
                id="search"
              />
              <label htmlFor="search">Search</label>
              <img
                src="assets/icons/search-icon.svg"
                className="search-icon"
                alt=""
              />
              {searchValue && (
                <div className="search-list" onClick={closeSearch}>
                  <Link to={`/search/${searchValue}`}>
                    Search for "{searchValue}"
                    <img src="assets/icons/arrowRight.svg" alt="" />
                  </Link>
                </div>
              )}
            </div>
            <div onClick={closeSearch} className="close-search">
              <img src="assets/icons/close.svg" alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
