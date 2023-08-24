import React from 'react'
import CartItem from '../../components/CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { setCloseCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cartItems.items );
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
                    {
                         items.map((item, index) => (
                            <CartItem key={item.id + index} title={item.title} size={item.size} imageUrl={item.imageUrl} price={item.price} addedDate={item.addedDate}/>
                        ))
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Cart;