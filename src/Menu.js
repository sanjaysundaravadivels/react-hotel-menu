import React from "react";

const Menu = ({ items, setting }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₹ {price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
            <button className="filter-btn" onClick={() => setting(title)}>
              Order
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
