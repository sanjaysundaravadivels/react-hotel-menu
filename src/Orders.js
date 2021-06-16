import React from "react";

const Orders = ({ items, setting }) => {
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
  console.log(dict);
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
                    <i>No of Items :</i> {dict[item.id]}
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
