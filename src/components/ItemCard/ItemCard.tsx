import React from 'react'

interface ICardItem {
    title: string;
    imageUrl: string[];
    price: string;
    brand: string;
    size: string[];
}

const ItemCard: React.FC<ICardItem> = ({title, imageUrl, price, size}) => {
    return ( 
        <div className="card-item">
            <div className="card-img">
                <img src={imageUrl[0]} alt="" />
            </div>
            <div className="card-title">{title}</div>
            <div className="card-price">{price}.00 USD</div>
        </div>
     );
}
 
export default ItemCard;