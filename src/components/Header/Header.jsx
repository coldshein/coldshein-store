import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [openSearch, setOpenSearch] = React.useState(false);
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <nav className="header-nav">
            <ul>
              <li>
                <a href="">men</a>
              </li>
              <li>
                <a href="">women</a>
              </li>
              <li>
                <Link to="/designers">designers</Link>
              </li>
            </ul>
          </nav>
          <Link className="logo" to="/">
            COLDSHEIN
          </Link>
          <nav className="header-nav">
            <ul>
              <li onClick={() => setOpenSearch(true)}>search</li>
              <li>
                <a href="">cart</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {openSearch ? (
        <div className="search-modal">
          <div className="search-block">
            <div className="search-bar">
              <input type="text" placeholder=" " id="search" />
              <label htmlFor="search">Search</label>
            </div>
            <div onClick={() => setOpenSearch(false)} className="close-search">
              X
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
