import React from "react";
import styles from "./Wishlist.module.css";
import wishlist from "../../assets/wishlist.png";
import { useEffect, useState } from "react";

const Wishlist = () => {
  const [status, setStatus] = useState(false);
  const [datas, setDatas] = useState([]);
  console.log(datas);

  const addtocart = async (data) => {
    // let res = await fetch(`http://localhost:8080/cart`, {
    let res = await fetch(`https://blackpearl.onrender.com/cart`, {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const deleteWishlist = async (id) => {
    // let res = await fetch(`http://localhost:8080/wishlist/${id}`, {
    let res = await fetch(`https://blackpearl.onrender.com/wishlist/${id}`, {
      method: "Delete",
    });
    setStatus(!status);
  };

  useEffect(() => {
    async function getWishList() {
      // let res = await fetch("http://localhost:8080/wishlist");
      let res = await fetch("https://blackpearl.onrender.com/wishlist");
      let data1 = await res.json();
      setDatas(data1);
    }
    getWishList();
  }, [status]);

  if (datas.length === 0) {
    return (
      <div className={styles.emptyWishlistMain}>
        <div className={styles.emptyYourWishlist}>
          <h2>Your Wishlist</h2>
        </div>
        <img src={wishlist} alt="" />
        <p>Uh Oh!</p>
        <p>Your Wishlist Seems to be Empty!</p>
        <button>start Shoping</button>
      </div>
    );
  }

  return (
    <div className={styles.wishlistMain}>
      <h2>Your Wishlist</h2>
      <div className={styles.wishListDetails}>
        {datas.map((data) => (
          
          <div key={data.id} className={styles.single__maindiv}>
            <img className={styles.single__image} src={data.image} alt="name" />

            <p className={styles.single__pricetag}>&#8377; {data.price}</p>

            <p>{data.name}</p>
            <div className={styles.single__buttondiv}>
              <button onClick={() => addtocart(data)}>Cart</button>
              <button onClick={() => deleteWishlist(data.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
