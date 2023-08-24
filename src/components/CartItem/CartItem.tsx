import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartSlice";

interface cartItemProps {
  title: string,
  size: string,
  price: string,
  imageUrl: string[],
  addedDate: string,
}

const CartItem: React.FC<cartItemProps> = ({title, size, price, imageUrl, addedDate}) => {
  const dispatch = useDispatch();

  let [quantity, setQuantity] = React.useState(1);

  const addQuantity = () => {
    setQuantity(++quantity)
  }
  const removeQuantity = () => {
    if(quantity > 1){
      setQuantity(--quantity)
    } else {
      setQuantity(1)
    }
  }

  const onClickRemove = () => {
    dispatch(removeItem(addedDate))
  }
  return (
    <div className="cart-item">
      <div className="cart-item__img">
       <img src={imageUrl[0]} alt="" />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__title">{title}</div>
        <div className="cart-item__size">Size: {size}</div>
        <div className="cart-item__counter">
            <div className="counter" onClick={() => addQuantity()}>+</div>
            <div className="count">{quantity}</div>
            <div className="counter" onClick={() => removeQuantity()}>-</div>
        </div>
      </div>
      <div className="cart-item__remove" onClick={onClickRemove}>
        <img src="/assets/icons/delete.svg" alt="" />
      </div>
      <div className="cart-item__price">{price}.00</div>
    </div>
  );
};

export default CartItem;
