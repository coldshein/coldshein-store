import React from "react";
import Sort from "../../components/Sort/Sort";
import ItemList from "../../components/ItemList/ItemList";

const SearchResult = () => {
  return (
    <div className="container">
      <div className="home-inner">
        <div className="main-block">
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
