import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Orders from "./Orders";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);

  const setting = (id) => {
    const newList = items.filter((item) => item.title === id);
    setList([...list, newList]);
  };

  const yourOrders = () => {
    setAlert(true);
  };
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenu(newItem);
  };

  return (
    <main>
      <section className="menu section">
        <div className="gbb">
          <div className="bgg">
            <div className="title">
              <h2>Our menu</h2>
              <div className="underline"></div>
            </div>
            <Categories
              yourOrders={yourOrders}
              filterItems={filterItems}
              categories={categories}
            />
          </div>
        </div>
        {alert ? (
          <Orders listitem={list} setting={setting} />
        ) : (
          <Menu items={menu} setting={setting} />
        )}
      </section>
    </main>
  );
}

export default App;
