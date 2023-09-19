import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItem, postCartItem, setOpenCart } from "../../redux/cartSlice";
import styles from "./FullCard.module.scss";

interface IFullCard {
  id: number;
  price: string;
  title: string;
  imageUrl: string[];
  size: string[];
  brand: string;
  sex: string;
  type: string;
}

const FullCard: React.FC = () => {
  const { id } = useParams();

  const dispatch = useDispatch() as any;
  const [items, setItems] = React.useState<IFullCard>();

  const [size, setSize] = React.useState("");

  const fetchFullCard = async (id: string) => {
    try {
      const { data } = await axios.get(
        `https://650464d5c8869921ae24f99f.mockapi.io/items/${id}`
      );
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    if (id) {
      fetchFullCard(id);
    }
  }, [id]);

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
        } as any;

        dispatch(addItem(addedItem));
        dispatch(postCartItem(addedItem));
        dispatch(setOpenCart());
      }
    }
  };

  return (
    <div>
      <div className={styles.page_header}>
        <Link to="/">Home</Link> *{" "}
        <Link to={`/products/${id}`}>{items.title}</Link>
      </div>
      <div className={styles.inner}>
        <div
          className={
            items.imageUrl.length === 1 ? styles.photo_block : styles.photo_list
          }
        >
          {items.imageUrl.map((url, index) => (
            <img key={index} src={url} alt={items.title} />
          ))}
        </div>
        <div className={styles.info}>
          <div className={styles.brand}>{items.brand}</div>
          <div className={styles.title}>{items.title}</div>
          <div className={styles.type}>
            TYPE: {items.sex}'s {items.type}
          </div>
          <div className={styles.price}>{items.price}.00 USD</div>
          <div className={styles.sizes}>
            Size:
            <div className={styles.size}>
              {items.size.map((item) => (
                <div
                  key={item}
                  className={` ${styles.size_item} ${
                    size === item ? styles.active : ``
                  }`}
                  onClick={() => handleSize(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button className={styles.button} onClick={addToCart}>
            add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
