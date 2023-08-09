import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

type itemParams = {
  id: string;
};

const FullCard: React.FC = () => {
  const [items, setItems] = React.useState<{
    id: string;
    price: string;
    title: string;
    imageUrl: string[];
    size: number[];
    brand: string;
    sex: string;
    type: string;
  }>();
  const { id } = useParams<itemParams>();
  const fetchOneItem = async (id: any) => {
    const { data } = await axios.get(`http://localhost:3001/items/${id}`);
    setItems(data);
  };
  React.useEffect(() => {
    fetchOneItem(id);
  }, []);

  if (!items) {
    return <>Loading...</>;
  }

  return (
    <div className="full-card">
      <div className="container">
        <div className="page-header">
          <Link to="/">Home</Link> *{" "}
          <Link to={`/items/${id}`}>{items.title}</Link>
        </div>
        <div className="full-card__inner">
          <div className="photo-block">
            {items.imageUrl.map((url, index) => (
              <img key={index} src={url} alt={items.title} />
            ))}
          </div>
          <div className="item-info">
            <div className="item-brand">{items.brand}</div>
            <div className="item-title">{items.title}</div>
            <div className="item-type">
              TYPE: {items.sex}'s {items.type}
            </div>
            <div className="item-price">{items.price}.00 USD</div>
            <div className="item-sizes">
              Size:
              <div className="item-sizes__block">
                {items.size.map((item) => (
                  <div className="size-item">{item}</div>
                ))}
              </div>
            </div>
            <button className="add-to-bag">add to bag</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
