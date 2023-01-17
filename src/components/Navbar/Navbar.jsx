import React, { useState } from 'react'
import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <div className={styles.navbar__maincontainer}>
        <div className={styles.navbar__logodiv}>
            <img className={styles.navbar__logo} src={logo} alt="logo" />
        </div>
        <ul type="none" className={styles.navbar__pagesroutes}>
             <li>
                FREE TRY AT HOME
             </li>
             <li>
                FIND STORE
             </li>
             <li>
                PLAN OF PURCHASE
             </li>
             <li>
                BUY DIGITAL GOLD
             </li>
             <li>
                <input type="text" placeholder='search' />
             </li>

        </ul>

        <ul type="none" className={styles.navbar__mainthirdpart}>
            <li><i class="uil uil-map-marker"></i> pincode</li>
            <li>country</li>
            <li>login</li>
            <li>wishlist</li>
            <li>cart</li>
        </ul>
    </div>
  )
}

export default Navbar;