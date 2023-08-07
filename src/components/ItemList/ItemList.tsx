import React from "react";
import CardItem from "../CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchShopItems } from "../../redux/itemSlice";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

const ItemList = () => {
  const { items, loading } = useSelector((state: RootState) => state.shopItems);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const isItemsLoading = loading === "pending";

  React.useEffect(() => {
    dispatch(fetchShopItems() as any);
  }, []);
  return (
    <div className="item-list">
      {isItemsLoading
        ? "Loading"
        : items.map((item) => (
            <CardItem
              title={item.title}
              key={item.id}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
    </div>
  );
};

export default ItemList;
