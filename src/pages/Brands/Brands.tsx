import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchShopItems } from "../../redux/itemSlice";
import styles from "./Brands.module.scss";

const Brands: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.shopItems.items);

  React.useEffect(() => {
    dispatch(fetchShopItems() as any);
  }, []);

  const designers = items
    .map((obj) => obj.brand)
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className="main-block">
      <div className="page-header">home * designers</div>
      <div className={styles.block}>
        <div className={styles.title}>Designers</div>
        <div className={styles.list}>
          <ul>
            {designers
              ? designers.map((item) => (
                  <li>
                    <Link
                      to={`/collections/${item
                        .toLowerCase()
                        .replace(
                          /[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/g,
                          "-"
                        )}`}
                    >
                      {item.toUpperCase()}
                    </Link>
                  </li>
                ))
              : "Loading..."}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
