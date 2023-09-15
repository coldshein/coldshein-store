import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, setCloseCart } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { Link } from "react-router-dom";
import styles from './Cart.module.scss'

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
    <section className={`${styles.cart} ${openCart && styles.open}`}>
      <div className={styles.block}>
        <div className={styles.close} onClick={onClickCloseCart}>
          <img src="/assets/icons/close.svg" alt="" />
        </div>
        <div className={styles.title}>Your items</div>
        {items.length > 0 ? (
          <>
            <div className={styles.list}>
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

            <span className={styles.total}>Total: ${totalPrice}.00</span>
            <div className={styles.button}>checkout</div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
};

export default Cart;
