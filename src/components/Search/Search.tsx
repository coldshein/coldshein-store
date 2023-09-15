import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/itemSlice";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import styles from './Search.module.scss'

interface ISearch {
    closeSearch: () => void;
    openSearch: boolean;
}

const Search: React.FC<ISearch> = ({closeSearch, openSearch}) => {
    const dispatch = useDispatch();
    const searchValue = useSelector(
        (state: RootState) => state.shopItems.searchValue
      );
      const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(event.target.value));
      };
     
  return (
    <div className={`${styles.modal} ${openSearch && styles.open}`}>
      <div className={styles.block}>
        <div className={styles.search_bar}>
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
            className={styles.icon}
            alt=""
          />
          {searchValue && (
            <div className={styles.list} onClick={closeSearch}>
              <Link to={`/search/${searchValue}`}>
                Search for "{searchValue}"
                <img src="/assets/icons/arrowRight.svg" alt="" />
              </Link>
            </div>
          )}
        </div>
        <div onClick={closeSearch} className={styles.close}>
          <img src="/assets/icons/close.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Search;
