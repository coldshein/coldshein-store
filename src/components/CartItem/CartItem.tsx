import React from "react";


const CartItem: React.FC = () => {

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
  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img
          src="https://www.onenessboutique.com/cdn/shop/files/ONENESS_0012_NIKE-AIR-FORCE-1-LV8-WHITE_SAIL_PLATNIUM-TINT-CW7584-100_1100x.jpg?v=1691090632"
          alt=""
        />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__title">NIKE AIR FORCE 1 LV8 XLD</div>
        <div className="cart-item__size">Size: 40</div>
        <div className="cart-item__counter">
            <div className="counter" onClick={() => addQuantity()}>+</div>
            <div className="count">{quantity}</div>
            <div className="counter" onClick={() => removeQuantity()}>-</div>
        </div>
      </div>
      <div className="cart-item__price">$100.00</div>
    </div>
  );
};

export default CartItem;
