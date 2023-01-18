import React, { useState } from 'react'
import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"
import Indiaflag from "../../assets/Indiaflag.png"

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={styles.navbar__outermain_div}>
            <div className={styles.navbar__maincontainer}>
                <div className={styles.navbar__logodiv}>
                    <img className={styles.navbar__logo} src={logo} alt="logo" />
                </div>
                <ul type="none" className={styles.navbar__pagesroutes}>
                    <li className={styles.navbar__pagesroutes_link_div}>
                        <i className={`uil uil-house-user ${styles.navbar__top_icons}`}></i>
                        FREE TRY AT HOME
                    </li>
                    <li className={styles.navbar__pagesroutes_link_div}>
                        <i className={`uil uil-store-alt ${styles.navbar__top_icons}`}></i>
                        FIND STORE
                    </li>
                    <li className={styles.navbar__pagesroutes_link_div}>
                        <i className={`uil uil-briefcase-alt ${styles.navbar__top_icons}`}></i>
                        PLAN OF PURCHASE
                    </li>
                    <li className={styles.navbar__pagesroutes_link_div}>
                        <i className={`uil uil-gold ${styles.navbar__top_icons}`}></i>
                        BUY DIGITAL GOLD
                    </li>
                    <li className={styles.navbar__pagesroutes_link_div_search}>
                        <input className={styles.navbar__searchbar} type="text" placeholder='Search' />
                        <i className={`uil uil-search ${styles.navbar__searchicon}`}></i>
                    </li>

                </ul>

                <ul type="none" className={styles.navbar__mainthirdpart}>
                    <li><i className={`fa-sharp fa-solid fa-location-dot ${styles.navbar__mainthirdpart_icon}`}></i> pincode</li>
                    <li> <img className={styles.Indiaflag} src={Indiaflag} alt="flag" /> </li>
                    <li><i className={`fa-solid fa-user ${styles.navbar__mainthirdpart_icon}`}></i></li>
                    <li><i className={`fa-solid fa-heart ${styles.navbar__mainthirdpart_icon}`}></i></li>
                    <li><i className={`fa-solid fa-bag-shopping ${styles.navbar__mainthirdpart_icon}`}></i></li>
                </ul>
            </div>

            <div className={styles.navbar__secondcontainer}>
               <ul type="none" className={styles.navbar__secondmenu}>
                <li>NEW ARRIVALS</li>
                <li>RINGS</li>
                <li>EARRINGS</li>
                <li>BRACELETS & BANGLES</li>
                <li>SOLITAIRES</li>
                <li>MANGALSUTRA</li>
                <li>READY TO SHIP</li>
                <li>KIDS</li>
                <li>OTHER JEWELLERY</li>
                <li>GIFTING</li>
               </ul>
            </div>
        </div>
    )
}

export default Navbar;