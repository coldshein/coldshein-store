import React from "react";

const Sort = () => {
  const [sort, setSort] = React.useState(false);

  const openSortList = () => {
    setSort(!sort);
  };
  return (
    <>
      <div className="item-sort__list">
        <div className="sort" onClick={openSortList}>
          date, new to old
        </div>
      </div>
      {sort ? (
        <div className="sort-list">
          <ul>
            <li>date, new to old</li>
            <li>date, old to new</li>
            <li>price, high to low</li>
            <li>price, low to high</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sort;
