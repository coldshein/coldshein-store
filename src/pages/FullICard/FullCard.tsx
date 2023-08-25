import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem, postCartItem, setOpenCart } from "../../redux/cartSlice";

type itemParams = {
  id: string;
};

const FullCard: React.FC = () => {
  const dispatch = useDispatch() as any;
  const [items, setItems] = React.useState<{
    id: string;
    price: string;
    title: string;
    imageUrl: string[];
    size: string[];
    brand: string;
    sex: string;
    type: string;
  }>();

  const [size, setSize] = React.useState("");

  const { id } = useParams<itemParams>();

  const fetchOneItem = async (id: any) => {
    const { data } = await axios.get(`http://localhost:3001/items/${id}`);
    setItems(data);
  };
  React.useEffect(() => {
    fetchOneItem(id);
  }, []);

  const handleSize = (size: any) => {
    setSize(size);
  };

  if (!items) {
    return <>Loading...</>;
  }
  const addToCart = () => {
    if (items) {
      if (!size) {
        alert("Choose your size");
      } else {
        const addedItem = {
          id: items.id + size,
          title: items.title,
          size: size,
          brand: items.brand,
          imageUrl: items.imageUrl,
          price: items.price,
          addedDate: new Date().toISOString(),
          count: 1,
        } as any;

        dispatch(addItem(addedItem));
        dispatch(postCartItem(addedItem));
        dispatch(setOpenCart())
        console.log(addedItem);
      }
    }
  };

  return (
    <div className="full-card">
      <div className="container">
        <div className="page-header">
          <Link to="/">Home</Link> *{" "}
          <Link to={`/items/${id}`}>{items.title}</Link>
        </div>
        <div className="full-card__inner">
          <div
            className={
              items.imageUrl.length === 1 ? `photo-block` : `photo-list`
            }
          >
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
                  <div key={item}
                    className={`size-item ${
                      size === item ? `size-item__active` : ``
                    }`}
                    onClick={() => handleSize(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <button className="add-to-bag" onClick={addToCart}>
              add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
