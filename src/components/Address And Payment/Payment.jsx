import React, { useState, useRef } from "react";
import styles from "./Payment.module.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const nameRef = useRef(null);
  const cardRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const cvvRef = useRef(null);
  const navigate = useNavigate();

  const addressObj = JSON.parse(localStorage.getItem("addreddObj"));
  const totalAmount = localStorage.getItem("totalAmount");
  //   console.log(addressObj.fullName);

  const emptycart = (buttype) => {
    if (buttype === "pay") {
      if (
        nameRef.current.value == "" ||
        cardRef.current.value == "" ||
        monthRef.current.value == "" ||
        yearRef.current.value == "" ||
        cvvRef.current.value == ""
      ) {
        // console.log(addressObj);
        alert("Please fill all the filds");
        return;
      } else if (String(cardRef.current.value).length != 16) {
        alert("Please check the card number");
        return;
      } else if (String(cvvRef.current.value).length != 3) {
        alert("Check your CVV");
        return;
      }
    }

    // fetch(`http://localhost:8080/cart`)
    fetch(`https://blackpearl.onrender.com/cart`)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          let id = res[i].id;
          // fetch(`http://localhost:8080/cart/${id}`, {
          fetch(`https://blackpearl.onrender.com/cart/${id}`, {
            method: "DELETE",
          });
        }
      })
      .then(() => {
        alert("Hurray! your order is placed");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (event) => {
    console.log("hi");
  };
  return (
    <div className={styles.mainPayment}>
      <div className={styles.mainPaymentInputs}>
        <p>Hi {addressObj?.fullName}</p>
        <p>Your Product will be delivered to</p>
        <p>{addressObj?.address}</p>
        <p style={{ color: "green" }}>Thank you for Shopping with us</p>
      </div>

      <div className={styles.cardaPymentNew}>
        <h2>Total Amount : &#8377; {totalAmount}</h2>
        <button style={{marginBottom:"50px"}} onClick={() => emptycart("cod")}>Cash On Delivery?</button>
        <h2>Online Payment</h2>
        <div className={styles.cardPaymentInputs}>
          <p>Name on the card</p>
          <input type="text" ref={nameRef} />
          <p>Card Number</p>
          <input
            ref={cardRef}
            type="number"
            placeholder="Enter your card number"
          />
          <p style={{ margin: "1rem 0" }}>Expire </p>
          <select ref={monthRef}>
            <option value="">Month</option>
            <option value="1">January - 01</option>
            <option value="2">February - 02</option>
            <option value="3">March - 03</option>
            <option value="4">April - 04</option>
            <option value="5">May - 05</option>
            <option value="6">June - 06</option>
            <option value="7">July - 07</option>
            <option value="8">August - 08</option>
            <option value="9">September - 09</option>
            <option value="10">October - 10</option>
            <option value="11">November - 11</option>
            <option value="12">December - 12</option>
          </select>
          <select ref={yearRef}>
            <option value="">Year</option>
            <option value="2023">2023</option>
            <option value="2204">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
          <p>CVV</p>
          <input ref={cvvRef} type="number" placeholder="***" />
        </div>
        <button onClick={() => emptycart("pay")}>Pay</button>
      </div>
    </div>
  );
};

export default Payment;
