import React from 'react'
import styles from "./singleitem.module.css"
import { useNavigate } from "react-router-dom"

const SingleProduct = (props) => {
    const { id, image, price, name, shipping, star, category } = props;
   const navigate = useNavigate()

    const addtocart = async () => {
        let res = await fetch(`http://localhost:8080/cart`, {
            method: "POST",
            body: JSON.stringify({ ...props }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

 const navigatefun = () => {
    navigate(`/product/${id}`)
 }

const addtowishlist =  async () => {
    let res = await fetch(`http://localhost:8080/wishlist`, {
        method: "POST",
        body: JSON.stringify({ ...props }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

    return (
        <>
            <div key={id} className={styles.single__maindiv}>
                <img className={styles.single__image} src={image} alt="name" />
                <div className={styles.single__name_heart}>
                <p className={styles.single__pricetag}>&#8377;{" "}{price}</p>
                <p className={styles.single__wishlist} onClick={addtowishlist}><i class="fa-solid fa-heart"></i></p>
                </div>
                <p>{name}</p>
                <div className={styles.single__buttondiv}>
                    <button onClick={() => addtocart()}>Cart</button>
                    <button onClick={navigatefun}>Details</button> 
            </div>
        </div> 
    </>
  )
}

export default SingleProduct;
