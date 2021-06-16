import React from "react";
import { useState } from "react";
import Orders from "./Orders";

const Categories = ({ filterItems, categories, yourOrders }) => {
  const [order, setOrder] = useState(false);
  if (order) {
    return <>{yourOrders()}</>;
  }
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      <button className="filter-btn" onClick={() => setOrder(true)}>
        Your Orders
      </button>
    </div>
  );
};

export default Categories;
