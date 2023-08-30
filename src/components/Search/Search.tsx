import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/itemSlice";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

interface ISearch {
    closeSearch: () => void;
}

const Search: React.FC<ISearch> = ({closeSearch}) => {
    const dispatch = useDispatch();
    const searchValue = useSelector(
        (state: RootState) => state.shopItems.searchValue
      );
      const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(event.target.value));
      };
     
  return (
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
            src="/assets/icons/search-icon.svg"
            className="search-icon"
            alt=""
          />
          {searchValue && (
            <div className="search-list" onClick={closeSearch}>
              <Link to={`/search/${searchValue}`}>
                Search for "{searchValue}"
                <img src="/assets/icons/arrowRight.svg" alt="" />
              </Link>
            </div>
          )}
        </div>
        <div onClick={closeSearch} className="close-search">
          <img src="/assets/icons/close.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
