import React from "react";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Alert from "./Alert";
const Orders = ({ listitem, settingList }) => {
  const [items, setItems] = useState(listitem);
  const [alert, setAlert] = useState({ state: false, id: 0 });
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState({
    show: false,
    msg: "",
    type: "",
    height: "",
    width: "",
  });

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
  const trash = (id, title) => {
    console.log(title);
    const newlist = items.filter((item) => item[0].id !== id);
    setItems(newlist);
    settingList(newlist);
    showAlert(true, "The item removed successfully", "");
  };
  const edit = (id) => {
    setAlert({ state: true, id: id });
    setCount(dict[id]);
  };
  const change = (e) => {
    e.preventDefault();
    let newAlter = items.filter((item) => item[0].id !== ids);
    var i;
    for (i = 0; i < count; i++) {
      let temp = items.filter((item) => item[0].id === ids);
      newAlter.push(temp[0]);
    }
    setItems(newAlter);
    setAlert({ state: false, id: 0 });
  };
  const showAlert = (show = false, msg = "", type = "") => {
    var element = document.getElementById("listss");
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    console.log("height=" + height + "width=" + width);
    setMessage({ show, msg, type, height, width });
  };
  const setAll = (id) => {
    showAlert(true, "The changes have done successfully", "");
    setIds(id);
  };

  let amount = 0;
  return (
    <>
      <h4>
        <b>
          <i>Your Orders</i>
        </b>
      </h4>

      {message.show && <Alert {...message} removeAlert={showAlert} />}

      <br />
      <br />
      <div className="list" id="listss">
        {items.map((list) => {
          const item = list[0];

          dict1[item.id]++;
          const { id, title, img, price } = item;
          amount += price;

          if (dict1[item.id] === dict[item.id]) {
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

                    {alert.state && item.id === alert.id && (
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
                          onClick={() => setAll(item.id)}
                        >
                          {" "}
                          Confirm
                        </button>
                      </form>
                    )}
                    <div className="butt">
                      <button
                        className="but"
                        onClick={() => {
                          edit(item.id);
                        }}
                      >
                        <FaEdit />
                      </button>
                      &nbsp; &nbsp;
                      <button
                        type="button"
                        className="but"
                        onClick={() => trash(item.id, item.title)}
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
    </>
  );
};

export default Orders;
