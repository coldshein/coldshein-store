import React from 'react'
import styles from './ItemCart.module.scss'


interface ICardItem {
    title: string;
    imageUrl: string[];
    price: string;
    brand: string;
    size: string[];
}

const ItemCard: React.FC<ICardItem> = ({title, imageUrl, price, size}) => {
    return ( 
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={imageUrl[0]} alt="" />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}.00 USD</div>
        </div>
     );
}
 
export default ItemCard;