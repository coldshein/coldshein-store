import React from "react";
import styles from './Sort.module.scss'

type SortType = {
  name: string;
  sortProp: string;
};

const Sort: React.FC = () => {
  const [sort, setSort] = React.useState(false);
  
  const sortList: SortType[] = [
    { name: "date, new to old", sortProp: "date" },
    { name: "date, old to new", sortProp: "-date" },
    { name: "price, high to low", sortProp: "price" },
    { name: "price, low to high", sortProp: "-price" },
  ];

  const openSortList = () => {
    setSort(!sort);
  };

  return (
    <>
      <div className={styles.sort}>
        <div className={styles.item} onClick={openSortList}>
          date, new to old
        </div>
      </div>
      {sort ? (
        <div className={styles.list}>
          <ul>
            {sortList.map((item) => (
              <li>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sort;
