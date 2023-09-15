import React, { useState } from "react";
import CardItem from "../../components/ItemCard/ItemCard";
import Sort from "../../components/Sort/Sort";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import styles from './Home.module.scss'

const Home:React.FC = () => {
  const { sex } = useParams();
  const items = useSelector((state: RootState) => state.shopItems.items);

  const allCategories = items.map((item) => item.category);
  const categories = new Set<string>(allCategories);
  const category = Array.from(categories);

  return (
    <section>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.header_page}>
            Home * Collection * {`${sex ? sex : ""}`}{" "}
          </div>
          <div>
            <div className={styles.main}>
              <div className={styles.info}>
                <div className={styles.info_title}>Newness</div>
                <nav className={styles.info_nav}>
                  <ul>
                    {category.map((item: string) => (
                      <li key={item}>
                        <Link to={`${sex ? `/${sex}/${item}` : `/${item}`}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className={styles.items}>
                <Sort />
                <ItemList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
