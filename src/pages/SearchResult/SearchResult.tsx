import React from "react";
import Sort from "../../components/Sort/Sort";
import ItemList from "../../components/ItemList/ItemList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link, useParams } from "react-router-dom";
import { setSearchValue, fetchShopItems } from "../../redux/itemSlice";

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.shopItems.searchValue
  );
  const { query } = useParams();
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };
  React.useEffect(() => {
    if (query) {
      dispatch(setSearchValue(query));
      dispatch(fetchShopItems(query) as any);
    }
  }, [query]);

  return (
    <div className="container">
      <div className="home-inner">
        <div className="main-block">
          <div className="search-block">
            <div className="search-bar">
              <input
                type="text"
                placeholder=" "
                value={searchValue}
                onChange={onChangeInput}
                id="search"
              />
              <label htmlFor="search">Search</label>
              <img
                src="assets/icons/search-icon.svg"
                className="search-icon"
                alt=""
              />
              {searchValue && (
                <div className="search-list">
                  <Link to={`/search/${searchValue}`}>
                    Search for "{searchValue}"
                    <img src="assets/icons/arrowRight.svg" alt="" />
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="main-block__inner">
            <div className="item-block">
              <Sort />
              <ItemList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
