import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, removeItem } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

interface cartItemProps {
  title: string;
  size: string;
  price: number;
  imageUrl: string[];
  addedDate: string;
  id: string;
}

const CartItem: React.FC<cartItemProps> = ({
  title,
  size,
  price,
  imageUrl,
  addedDate,
  id,
}) => {
  const dispatch = useDispatch();

  let [quantity, setQuantity] = React.useState(1);

  const addQuantity = () => {
    setQuantity(++quantity);
  };
  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(--quantity);
    } else {
      setQuantity(1);
    }
  };

  const onClickRemove = () => {
    dispatch(removeCartItem(id) as any);
    dispatch(removeItem(id));
  };
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={imageUrl[0]} alt="" />
      </div>
      <div className="cart-item__info">
        <Link to={`items/${id}`}>
          <div className="cart-item__title">{title}</div>
        </Link>
        <div className="cart-item__size">Size: {size}</div>
        <div className="cart-item__counter">
          <div className="counter" onClick={() => addQuantity()}>
            +
          </div>
          <div className="count">{quantity}</div>
          <div className="counter" onClick={() => removeQuantity()}>
            -
          </div>
        </div>
      </div>
      <div className="cart-item__remove" onClick={onClickRemove}>
        <img src="/assets/icons/delete.svg" alt="" />
      </div>
      <div className="cart-item__price">${price}.00</div>
    </div>
  );
};

export default CartItem;
