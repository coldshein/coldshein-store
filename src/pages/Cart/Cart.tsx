import React from 'react'
import CartItem from '../../components/CartItem/CartItem';
import { useDispatch } from 'react-redux';
import { setCloseCart } from '../../redux/cartSlice';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const closeCart = () => {
        dispatch(setCloseCart())
    }
    return ( 
        <section className="cart">
            <div className="cart-block">
                <div className="close-cart" onClick={closeCart}>
                    <img src="/assets/icons/close.svg" alt="" />
                </div>
                <div className="cart-title">Your items</div>
                <div className="cart-list">
                    <CartItem/>
                </div>
            </div>
        </section>
     );
}
 
export default Cart;