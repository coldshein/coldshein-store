import React from "react";
import CardItem from "../ItemCard/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  fetchCollections,
  fetchSexCollections,
  fetchShopItems,
} from "../../redux/itemSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { Link, useParams } from "react-router-dom";

type QueryType = {
  query: string;
  link: string;
  sex: string;
};

const ItemList = () => {
  const { query, link, sex } = useParams<QueryType>();
  const { items, loading } = useSelector((state: RootState) => state.shopItems);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const isItemsLoading = loading === "pending";

  React.useEffect(() => {
    if (link) {
      dispatch(fetchCollections(link) as any);
    } else if (sex) {
      dispatch(fetchSexCollections(sex) as any);
    } else {
      dispatch(fetchShopItems(query) as any);
    }
  }, [link, query, sex]);
  return (
    <div className="item-list">
      {isItemsLoading ? (
        "Loading"
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
