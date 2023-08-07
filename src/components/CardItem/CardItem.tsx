import React from 'react'

type CardItemProps = {
    title: string;
    imageUrl: string;
    price: string;
}

const CardItem: React.FC<CardItemProps> = ({title, imageUrl, price}) => {

    
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
 
export default CardItem;