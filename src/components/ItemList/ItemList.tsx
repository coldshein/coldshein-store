import React from "react";
import CardItem from "../ItemCard/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  fetchCategoryCollections,
  fetchCollections,
  fetchSexCollections,
  fetchShopItems,
} from "../../redux/itemSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { Link, useParams } from "react-router-dom";
import HomeSkeleton from "../../Skeletons/HomeSkeleton";
import styles from './ItemList.module.scss'

export type QueryType = {
  query: string;
  designer: string;
  sex: string;
  category: string;
};

const ItemList: React.FC = () => {
  const { query, designer, sex, category } = useParams<QueryType>();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const { items, loading } = useSelector((state: RootState) => state.shopItems);

  React.useEffect(() => {
    if (designer) {
      dispatch(fetchCollections(designer) as any);
    } else if (sex) {
      dispatch(fetchSexCollections({ sex }) as any);
      if (category) {
        dispatch(fetchSexCollections({ sex, category }) as any);
      }
    } else if (category) {
      dispatch(fetchCategoryCollections(category) as any);
    } else {
      dispatch(fetchShopItems(query) as any);
    }
  }, [designer, query, sex, category]);
  
  return (
    <div className={styles.list}>
      {loading === "pending" ? (
        [...Array(8)].map((item, index) => (
          <HomeSkeleton key={index}/>
        ) )
      ) : query ? (
        items.length > 0 ? (
          items.map((item) => (
            <Link to={`../items/${item.id}`} key={item.id}>
              <CardItem
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                brand={item.brand}
                size={item.size}
              />
            </Link>
          ))
        ) : (
          <h1 className="alert-title">
            No results found for “{query}”. Check the spelling or use a
            different word or phrase.
          </h1>
        )
      ) : (
        items.map((item) => (
          <Link to={`../items/${item.id}`} key={item.id}>
            <CardItem
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              brand={item.brand}
              size={item.size}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default ItemList;
