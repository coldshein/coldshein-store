import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, setCloseCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const dispatch = useDispatch() as any;
  const { items, openCart, totalPrice } = useSelector(
    (state: RootState) => state.cartItems
  );
  const onClickCloseCart = () => {
    dispatch(setCloseCart());
  };
  React.useEffect(() => {
    dispatch(fetchCartItems());
  }, []);
  return (
    <section className={`cart ${openCart && `cart-open`}`}>
      <div className="cart-block">
        <div className="close-cart" onClick={onClickCloseCart}>
          <img src="/assets/icons/close.svg" alt="" />
        </div>
        <div className="cart-title">Your items</div>
        {items.length > 0 ? (
          <>
            <div className="cart-list">
              {items.map((item, index) => (
                <CartItem
                  key={item.title + index}
                  title={item.title}
                  size={item.size}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  addedDate={item.addedDate}
                  id={item.id}
                />
              ))}
            </div>

            <span className="cart-total">Total: ${totalPrice}.00</span>
            <div className="black-btn cart-btn">checkout</div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
};

export default Cart;
