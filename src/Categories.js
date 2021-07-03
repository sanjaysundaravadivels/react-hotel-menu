import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalCOntext } from "./context";

const Categories = ({ filterItems, categories, yourOrders, alert }) => {
  const { isSidebarOpen, closeSidebar } = useGlobalCOntext();

  return (
    <div className={isSidebarOpen ? `btn-container sidebar` : `btn-container`}>
      {alert ||
        categories.map((category, index) => {
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
      <button className="filter-btn" onClick={() => yourOrders()}>
        {alert ? "Back to Menu" : "Your Orders"}
      </button>
      {alert ||
        (isSidebarOpen && (
          <button type="button" onClick={closeSidebar} className="close">
            <FaTimes />
          </button>
        ))}
    </div>
  );
};

export default Categories;
