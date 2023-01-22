import { async } from "@firebase/util";
import React, { useState } from "react";
import styles from "./Payment.module.css";
import { useNavigate } from "react-router-dom";


const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const addressObj = JSON.parse(localStorage.getItem("addreddObj"));
  //   console.log(addressObj.fullName);

const emptycart =  (buttype) => {
  if(buttype==="pay"){
     
  }


   fetch(`http://localhost:8080/cart`)
   .then((res)=>res.json())
   .then((res)=>{
     for(let i=0;i<res.length;i++){
        let id = res[i].id;
        fetch(`http://localhost:8080/cart/${id}`,{
          method : "DELETE"
        })
      }
   }).then(()=> { 
    alert("Hurray! your order is placed"); 
    navigate("/");
  })
   .catch((err)=>console.log(err))
}

  const handleSubmit = async (event) => {
    console.log("hi");
  };
  return (
    <div className={styles.mainPayment}>
      <div className={styles.mainPaymentInputs}>
        <p>Hi {addressObj?.fullName}</p>
        <p>Your Product will be delivered to</p>
        <p>{addressObj?.address}</p>
        <p style={{ color: "red" }}>Thank you for Shopping with us</p>
      </div>

      <div className={styles.cardaPymentNew}>
        <button  onClick={()=>emptycart("cod")}>Cash On Delivery?</button>
        <h2>Online Payment</h2>
        <div className={styles.cardPaymentInputs}>
          <p>Name on the card</p>
          <input type="text" />
          <p>Card Number</p>
          <input
            type="number"
            maxlength="16"
            placeholder="Enter your card number"
          />
          <p style={{ margin: "1rem 0" }}>Expire </p>
          <select>
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
          <select>
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
          <input type="tel" maxLength={3} placeholder="***" />
        </div>
        <button onClick={()=>emptycart("pay")}>Pay</button>
      </div>
    </div>
  );
};

export default Payment;
