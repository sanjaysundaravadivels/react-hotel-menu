import React, { useState } from "react";
import Menu from "./Menu";
import Orders from "./Orders";
import Categories from "./Categories";
import items from "./data";
import { FaTimes } from "react-icons/fa";
import { useGlobalCOntext } from "./context";
import { FaBars } from "react-icons/fa";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalCOntext();
  const [menu, setMenu] = useState(items);
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState(false);

  const setting = (id) => {
    const newList = items.filter((item) => item.title === id);
    setList([...list, newList]);
  };

  const yourOrders = () => {
    const newal = !alert;

    setAlert(newal);
  };
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenu(newItem);
  };
  const settingList = (nl) => {
    console.log(nl);
    setList(nl);
  };

  return (
    <main>
      <section className="menu section">
        <div className="gbb">
          <div className="bgg">
            <div className="title">
              <h2>Our menu</h2>

              <div className="underline"></div>
              <div className="sidebar-toggle ">
                {isSidebarOpen || (
                  <button className="side" onClick={openSidebar}>
                    <FaBars />
                  </button>
                )}
              </div>
            </div>
            <Categories
              yourOrders={yourOrders}
              filterItems={filterItems}
              categories={allCategories}
              alert={alert}
            />
          </div>
        </div>
        {alert ? (
          <Orders
            listitem={list}
            settingList={settingList}
            yourOrders={yourOrders}
          />
        ) : (
          <Menu items={menu} setting={setting} />
        )}
      </section>
    </main>
  );
}

export default App;
