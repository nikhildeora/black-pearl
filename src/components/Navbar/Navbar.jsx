import React, { useState } from 'react'
import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"
import Indiaflag from "../../assets/Indiaflag.png"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={styles.navbar__maincontainer}>
            <div className={styles.navbar__logodiv}>
                <img className={styles.navbar__logo} src={logo} alt="logo" />
            </div>
            <ul type="none" className={styles.navbar__pagesroutes}>
                <li className={styles.navbar__pagesroutes_link_div}>
                    <i class="uil uil-house-user"></i>
                    FREE TRY AT HOME
                </li>
                <li className={styles.navbar__pagesroutes_link_div}>
                    <i class="uil uil-store-alt"></i>
                    FIND STORE
                </li>
                <li className={styles.navbar__pagesroutes_link_div}>
                    <i class="uil uil-briefcase-alt"></i>
                    PLAN OF PURCHASE
                </li>
                <li className={styles.navbar__pagesroutes_link_div}>
                    <i class="uil uil-gold"></i>
                    BUY DIGITAL GOLD
                </li>
                <li className={styles.navbar__pagesroutes_link_div}>
                    <input className={styles.navbar__serchbar} type="text" placeholder='Search' />
                    <i className={`uil uil-search ${styles.navbar__serchicon}`}></i>
                </li>

            </ul>

            <ul type="none" className={styles.navbar__mainthirdpart}>
                <li><i class="uil uil-map-marker"></i> pincode</li>
                <li> <img className={styles.Indiaflag} src={Indiaflag} alt="flag" /> </li>
                <li><i class="uil uil-user"></i></li>
                <li><i class="uil uil-heart-alt"></i></li>
                <li><i class="uil uil-shopping-bag"></i></li>
            </ul>
        </div>
    )
}

export default Navbar;