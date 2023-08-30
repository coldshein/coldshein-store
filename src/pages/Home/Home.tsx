import React, { useState } from "react";
import CardItem from "../../components/ItemCard/ItemCard";
import Sort from "../../components/Sort/Sort";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

const Home:React.FC = () => {
  const { sex } = useParams();
  const items = useSelector((state: RootState) => state.shopItems.items);

  const allCategories = items.map((item) => item.category);
  const categories = new Set<string>(allCategories);
  const category = Array.from(categories);

  return (
    <section className="home">
      <div className="container">
        <div className="home-inner">
          <div className="page-header">
            Home * Collection * {`${sex ? sex : ""}`}{" "}
          </div>
          <div className="main-block">
            <div className="main-block__inner">
              <div className="list-info">
                <div className="list-info__title">Newness</div>
                <nav className="list-info__nav">
                  <ul>
                    {category.map((item: string) => (
                      <li>
                        <Link to={`${sex ? `/${sex}/${item}` : `/${item}`}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="item-block">
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
