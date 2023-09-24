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
import { useGetAllStoreItemsQuery } from "../../redux/API";


export type QueryType = {
  query: string;
  designer: string;
  sex: string;
  category: string;
};

const ItemList: React.FC = () => {
  const { query, designer, sex, category } = useParams<QueryType>();
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const {data, error, isLoading} = useGetAllStoreItemsQuery();
  console.log(data, error, isLoading);
 
  return (
    <div className={styles.list}>
      {isLoading === true ? (
        [...Array(8)].map((item, index) => (
          <HomeSkeleton key={index}/>
        ) )
      ) : query ? (
        data && data.length > 0 ? (
          data.map((item) => (
            <Link to={`../products/${item.id}`} key={item.id}>
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
       data && data.map((item) => (
          <Link to={`../products/${item.id}`} key={item.id}>
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
