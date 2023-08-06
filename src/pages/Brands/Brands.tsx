import React from "react";

const Brands = () => {
  return (
    <div className="main-block">
      <div className="page-header">home * designers</div>
      <div className="brands-block">
        <div className="brands-title">Designers</div>
        <div className="brands-list">
            <ul>
                {
                    Array.from(Array(50)).map(item => <li>Lorem ipsum dolor sit amet.</li>)
                }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
