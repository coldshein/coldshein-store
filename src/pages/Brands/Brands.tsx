import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Brands: React.FC = () => {
  const [designers, setDesigners] = React.useState<string[]>([]);
  const fetchDesigners = async () => {
    const { data } = await axios.get("http://localhost:3001/designers");
    setDesigners(data);
  };

  React.useEffect(() => {
    fetchDesigners();
  }, []);
  const sortedDesigners = designers.sort((a, b) => a.localeCompare(b));

  return (
    <div className="main-block">
      <div className="container">
        <div className="page-header">home * designers</div>
        <div className="brands-block">
          <div className="brands-title">Designers</div>
          <div className="brands-list">
            <ul>
              {sortedDesigners
                ? sortedDesigners.map((item) => (
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
