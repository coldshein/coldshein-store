import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchShopItems } from "../../redux/itemSlice";

const Brands: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.shopItems.items )
  React.useEffect(() => {
    dispatch(fetchShopItems() as any);
  }, []);
  
  const designers = items.map((obj) => obj.brand).sort((a,b) => a.localeCompare(b));

  return (
    <div className="main-block">
      <div className="container">
        <div className="page-header">home * designers</div>
        <div className="brands-block">
          <div className="brands-title">Designers</div>
          <div className="brands-list">
            <ul>
              {designers
                ? designers.map((item) => (
                    <li>
                      <Link
                        to={`/collections/${item.toLowerCase().replace(/[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+/g, '-')}`}
                      >
                        {item.toUpperCase()}
                      </Link>
                    </li>
                  ))
                : "Loading..."}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
