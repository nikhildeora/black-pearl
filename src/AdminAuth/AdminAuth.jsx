import React, { useRef } from "react";
import styles from "./AdminAuth.module.css";
const AdminAuth = () => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const imageRef = useRef(null);
  const categoryRef = useRef(null);
  const shippingRef = useRef(null);

  const postData = async (e) => {
    e.preventDefault();
    if (
      nameRef.current.value == "" ||
      priceRef.current.value == "" ||
      imageRef.current.value == "" ||
      categoryRef.current.value == "" ||
      shippingRef.current.value == ""
    ) {
      // console.log(addressObj);
      alert("Please fill Complete Details");
      return;
    }

    let newData = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
      category: categoryRef.current.value,
      shipping: shippingRef.current.value,
    };

    // let res = await fetch("http://localhost:8080/jewellery", {
    let res = await fetch("https://blackpearl.onrender.com/jewellery", {
      method: "POST",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data1 = await res.json();
    
    nameRef.current.value = null;
    priceRef.current.value = null;
    imageRef.current.value = null;
    categoryRef.current.value = null;
    shippingRef.current.value = null;
    alert("Product added successfully")
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <div>
          <h1>Admin Dashboard</h1>
        </div>

        <div className={styles.formContainer}>
          <form
            className={styles.adminForm}
            onSubmit={(e) => {
              postData(e);
            }}
          >
            <div className={styles.input_div}>
              <p>Name</p>
              <input type="text" placeholder="Name" ref={nameRef} />
            </div>

            <div className={styles.input_div}>
              <p>Price</p>
              <input type="number" placeholder="Amount" ref={priceRef} />
            </div>
            <div className={styles.input_div}>
              <p>Image</p>
              <input type="url" placeholder="Image URL" ref={imageRef} />
            </div>
            <div className={styles.input_div}>
              <p>Category</p>
              <input type="text" placeholder="Category" ref={categoryRef} />
            </div>
            <div className={styles.input_div}>
              <p>Shipping</p>
              <input
                type="text"
                placeholder="Shipping Info"
                ref={shippingRef}
              />
            </div>
            <div>
              <input className={styles.button} type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
