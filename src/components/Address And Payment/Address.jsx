import React, { useRef, useState } from "react";
import styles from "./Address.module.css";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const addreddRef = useRef(null);
  const cityRef = useRef(null);
  const statelRef = useRef(null);
  const navigate = useNavigate();

  const getFormData = () => {
    if (
      nameRef.current.value == "" ||
      emailRef.current.value == "" ||
      addreddRef.current.value == "" ||
      cityRef.current.value == "" ||
      statelRef.current.value == ""
    ) {
      // console.log(addressObj);
      alert("Please fill Complete Address");
      return;
    }

    let addressObj = {
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      address: addreddRef.current.value,
      city: cityRef.current.value,
      state: statelRef.current.value,
    };

    // console.log(addressObj);
    localStorage.setItem("addreddObj", JSON.stringify(addressObj));

    navigate("/payment")
    // console.log();
  };

  return (
    <div className={styles.addressMain}>
      <h1>Billing Address</h1>
      <div className={styles.addressInput}>
        <p>Full Name</p>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          ref={nameRef}
        />
        <p>Email</p>
        <input type="email" name="email" placeholder="Email" ref={emailRef} />
        <p>Address</p>
        <input
          type="text"
          name="address"
          placeholder="Full Address"
          ref={addreddRef}
        />
        <p>City</p>
        <input type="text" name="city" placeholder="City" ref={cityRef} />
        <select name="state" ref={statelRef}>
          <option value="">Choose State..</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Delhi">Delhi</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Haryana">Haryana</option>
          <option value="Gujrat">Gujrat</option>
          <option value="Uttrakhand">Uttrakhand</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Punjab">Punjab</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>
      </div>
      <button onClick={() => getFormData()}>Continue to Payment</button>
    </div>
  );
};

export default Address;
