import React from "react";

const EmptyCart: React.FC = () => {
  return (
    <div className="empty-cart">
      <h1>Your cart is empty</h1>
      <p>Add some items in your cart to see there's here</p>
    </div>
  );
};

export default EmptyCart;
