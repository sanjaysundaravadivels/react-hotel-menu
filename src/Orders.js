import React from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Orders = ({ listitem, setting }) => {
  const [items, setItems] = useState(listitem);
  const [alert, setAlert] = useState({ state: false, id: 0 });
  const [count, setCount] = useState(0);
  const [ids, setIds] = useState(0);
  let dict = {};
  items.map((item) => {
    dict[item[0].id] = 0;
  });
  let dict1 = {};
  items.map((item) => {
    dict1[item[0].id] = 0;
  });
  items.map((item) => {
    dict[item[0].id]++;
  });
  const trash = (id) => {
    console.log("removed", id, dict[id]);
    const newlist = items.filter((item) => item[0].id != id);
    setItems(newlist);
  };
  const edit = (id) => {
    setAlert({ state: true, id: id });
    setCount(dict[id]);
  };
  const change = (e) => {
    e.preventDefault();
    console.log(count, ids);
    let newAlter = items.filter((item) => item[0].id != ids);
    console.log(newAlter);
    var i;
    for (i = 0; i < count; i++) {
      let temp = items.filter((item) => item[0].id === ids);
      newAlter.push(temp[0]);
    }
    console.log(newAlter);
    setItems(newAlter);
    setAlert({ state: false, id: 0 });
  };
  let amount = 0;
  return (
    <>
      <h4>
        <b>
          <i>Your Orders</i>
        </b>
      </h4>
      <br />
      <br />
      <div className="list">
        {items.map((list) => {
          const item = list[0];

          dict1[item.id]++;
          const { id, title, img, desc, price } = item;
          amount += price;

          if (dict1[item.id] == dict[item.id]) {
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">₹. {price * dict[item.id]}</h4>
                  </header>
                  <p className="item-text">
                    <i>No of Items :{dict[item.id]}</i>

                    {alert.state && item.id == alert.id && (
                      <form onSubmit={change}>
                        <input
                          type="number"
                          className="form"
                          value={count}
                          onChange={(e) => setCount(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="form-btn"
                          onClick={() => setIds(item.id)}
                        >
                          {" "}
                          Confirm
                        </button>
                      </form>
                    )}
                    <div className="but">
                      <button className="but" onClick={() => edit(item.id)}>
                        <FaEdit />
                      </button>
                      &nbsp; &nbsp;
                      <button
                        type="button"
                        className="but"
                        onClick={() => trash(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </p>
                </div>
              </article>
            );
          }
        })}
      </div>
      <br />
      <br />
      <br />
      <h4 className="amount">
        <b>
          <i>Total amount is : ₹ {amount}</i>
        </b>
      </h4>
      <br />
      <br />
      <br />
      <form action="/">
        <button type="submit" className="btn">
          Back to menu
        </button>
      </form>
    </>
  );
};

export default Orders;
