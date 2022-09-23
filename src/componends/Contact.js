import React, { useState } from "react";
import "./css/contact.style.css";

const Contact = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const formSubmit = (Event) => {
    Event.preventDefault();
    alert("Thank you for Booking Table");
    setTime("");
    setDate("");
    setName("");
    setEmail("");
    setNumber("");
  };
  return (
    <div className="contactBody">
      <div className="leftImg">
        <img
          id="img1"
          src="https://thumbs.dreamstime.com/b/tasty-burger-isolated-white-background-clipping-path-included-top-view-tasty-burger-isolated-clipping-path-included-top-view-120943050.jpg"
        />
        <img
          id="img2"
          src="https://cdn.shopify.com/s/files/1/0575/4142/7381/products/BurrenBalsamicsBalsamicBurgerSauce290ml_1200x.jpg?v=1649261732"
        />
      </div>
      <div className="contactForm">
        <div className="contactTitle">
          <p>RESERVATION</p>
          <h1>BOOK YOUR TABLE</h1>
        </div>
        <form onSubmit={formSubmit}>
          <div className="infoInput">
            <input
              type="text"
              placeholder="NAME"
              value={name}
              onChange={(Event) => setName(Event.target.value)}
            />
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(Event) => setEmail(Event.target.value)}
            />
            <input
              type="date"
              placeholder="DATE"
              value={date}
              onChange={(Event) => setDate(Event.target.value)}
            />
            <input
              type="time"
              placeholder="TIME"
              value={time}
              onChange={(Event) => setTime(Event.target.value)}
            />
            <input
              type="number"
              placeholder="PEOPLE"
              value={number}
              onChange={(Event) => setNumber(Event.target.value)}
            />
            <button type="submit">FIND A TABLE</button>
          </div>
        </form>
      </div>
      <div className="rightImg">
        <img src="https://live.staticflickr.com/65535/48692659582_3f051ef545_b.jpg" />
      </div>
    </div>
  );
};

export default Contact;
