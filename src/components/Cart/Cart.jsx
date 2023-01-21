import React from "react";
import styles from "./Cart.module.css";
import wishlist from "../../assets/wishlist.png";
import { useEffect, useState } from "react";

const Cart = () => {
  const [status, setStatus] = useState(false);
  const [datas, setDatas] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(datas);

  const deleteWishlist = async (id) => {
    let res = await fetch(`http://localhost:8080/cart/${id}`, {
      method: "Delete",
    });
    setStatus(!status);
  };

  function getTotal() {
    datas.map((data) => setTotal(total + Number(data.price)));
  }

  useEffect(() => {
    async function getWishList() {
      let res = await fetch("http://localhost:8080/cart");
      let data1 = await res.json();
      setDatas(data1);
      let total = await data1.reduce((total, num) => {
        return total + num;
      }, 0);
      console.log("total", total);
    }
    // numbers.reduce(getSum, 0);

    getWishList();
    getTotal();
  }, [status]);

  if (datas.length === 0) {
    return (
      <div className={styles.emptyWishlistMain}>
        <div className={styles.emptyYourWishlist}>
          <h2>Your Cart</h2>
        </div>
        <img src={wishlist} alt="" />
        <p>Uh Oh!</p>
        <p>Your Cart Seems to be Empty!</p>
        <button>start Shoping</button>
      </div>
    );
  }

  return (
    <div className={styles.wishlistMain}>
      <h2>Your Cart</h2>
      <div className={styles.wishListDetails}>
        {datas.map((data) => (
          <div key={data.id} className={styles.single__maindiv}>
            <img className={styles.single__image} src={data.image} alt="name" />

            <p className={styles.single__pricetag}>&#8377; {data.price}</p>

            <p className={styles.single__nametag}>{data.name}</p>
            <div className={styles.single__buttondiv}>
              <button onClick={() => deleteWishlist(data.id)}>
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <p>{total}</p>
      <div className={styles.single__buttondiv}>
        <button>Proced to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
