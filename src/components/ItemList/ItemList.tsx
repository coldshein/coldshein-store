import React from "react";
import CardItem from "../CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchShopItems } from "../../redux/itemSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { Link, useParams } from "react-router-dom";

type QueryType = {
  query: string,
}

const ItemList = () => {
  
  const { query } = useParams<QueryType>();

  const { items, loading } = useSelector((state: RootState) => state.shopItems);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const isItemsLoading = loading === "pending";

  React.useEffect(() => {
    dispatch(fetchShopItems(query) as any);

  }, []);
  return (
    <div className="item-list">
      {isItemsLoading
        ? "Loading"
        : items.map((item) => (
            <Link to={`../items/${item.id}`} key={item.id}>
              <CardItem
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                brand={item.brand}
                size={item.size}
              />
            </Link>
          ))}
    </div>
  );
};

export default ItemList;
