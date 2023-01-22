import React, { useState } from 'react'
import styles from "./navbar.module.css"
import logo from "../../assets/logo.png"
import {Link as RouterLink} from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const {Logout, currentUser} = useContext(AuthContext)

    return (

        <div className={styles.navbar__outermain_div}>
            <div className={styles.navbar__maincontainer}>
                <div className={styles.navbar__logodiv}>
                    {toggle ? <i onClick={() => setToggle(!toggle)} className={`uil uil-times ${styles.navbar__hemburger_icon}`}></i> : <i onClick={() => setToggle(!toggle)} className={`uil uil-bars ${styles.navbar__hemburger_icon}`}></i>}
                    <RouterLink to={"/"}> <img className={styles.navbar__logo} src={logo} alt="logo" /></RouterLink>
                </div>
                <ul type="none" className={toggle ? `${styles.navbar__pagesroutes} ${styles.navbar__showmenu}` : styles.navbar__pagesroutes}>
                    <li className={styles.navbar__pagesroutes_link_div}>
                        <i className={`uil uil-house-user ${styles.navbar__top_icons}`}></i>
                       <RouterLink to={"/freetry"}>  FREE TRY AT HOME </RouterLink>
                    </li>
                    <li className={styles.navbar__pagesroutes_link_div}>
                        <i className={`uil uil-store-alt ${styles.navbar__top_icons}`}></i>
                       <RouterLink to={"/newarrival/findstore"}>  FIND STORE </RouterLink>
                    </li>
                    <li className={styles.navbar__pagesroutes_link_div}>
                        <i className={`uil uil-briefcase-alt ${styles.navbar__top_icons}`}></i>
                       <RouterLink to={"/plan"}> PLAN OF PURCHASE </RouterLink>
                    </li>
                    <li className={styles.navbar__pagesroutes_link_div}>
                        <i className={`uil uil-gold ${styles.navbar__top_icons}`}></i>
                        <RouterLink to={"/diggold"}> BUY DIGITAL GOLD </RouterLink>
                    </li>
                    <li className={styles.navbar__pagesroutes_link_div_search}>
                        <input className={styles.navbar__searchbar} type="text" placeholder='Search' />
                        <i className={`uil uil-search ${styles.navbar__searchicon}`}></i>
                    </li>

                </ul>


                <ul type="none" className={toggle ? `${styles.navbar__mainthirdpart} ${styles.navbar__showmenu}` : styles.navbar__mainthirdpart}>
                   {currentUser===null ? <li><RouterLink to={"/login"}><i className={`fa-solid fa-user ${styles.navbar__mainthirdpart_icon}`}></i>{" "}Login</RouterLink></li> : currentUser.displayName===null ? "username" : currentUser.displayName }

                  { currentUser === null ? <li><RouterLink to={"/signup"}><i className={`fa-solid fa-user ${styles.navbar__mainthirdpart_icon}`}></i>{" "}Singup</RouterLink></li> : <li onClick={Logout} style={{cursor:"pointer"}}><i className={`fa-solid fa-user ${styles.navbar__mainthirdpart_icon}`}></i>{" "}Logout</li> }

                    <li><RouterLink to={"/wishlist"}> <i className={`fa-solid fa-heart ${styles.navbar__mainthirdpart_icon}`}></i></RouterLink></li>
                    <li><RouterLink to={"/cart"}> <i className={`fa-solid fa-bag-shopping ${styles.navbar__mainthirdpart_icon}`}></i></RouterLink></li>
                </ul>
            </div>

            <div className={toggle ? `${styles.navbar__secondcontainer} ${styles.navbar__showmenu}` : styles.navbar__secondcontainer}>
                <ul type="none" className={styles.navbar__secondmenu}>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://banner.caratlane.com/live-images/8cc65a91a5c14b6a9ac518a052bfcc32.gif" alt="navbarimage" />
                        <p><RouterLink to={"/newarrival/all"}> NEW ARRIVALS </RouterLink> </p></li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://banner.caratlane.com/live-images/b6bfe45c721e42fd80987ef221f170cb.jpg" alt="navbarimage" />
                        <p>  <RouterLink to={"/newarrival/rings"}>   RINGS  </RouterLink></p></li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://banner.caratlane.com/live-images/b652f34428f14bb196e5313ab30a7724.jpg" alt="navbarimage" />
                        <p> <RouterLink to={"/newarrival/earrings"}>  EARRINGS  </RouterLink></p> </li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://banner.caratlane.com/live-images/daf137df3b5542d1afc770d4fb0f7a54.png" alt="navbarimage" />
                        <p> <RouterLink to={"/newarrival/bracelet"}>   BRACELETS & BANGLES </RouterLink></p> </li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://banner.caratlane.com/live-images/dffd86ef97164d24b2883317e9d541ff.jpg" alt="navbarimage" />
                        <p> <RouterLink to={"/newarrival/solitaire"}>   SOLITAIRES </RouterLink></p> </li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://banner.caratlane.com/live-images/91f7ce7a31b2412a878b95e06d20fb33.jpg" alt="navbarimage" />
                        <p>  <RouterLink to={"/newarrival/mangalsutra"}>MANGALSUTRA  </RouterLink></p> </li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/T/JT01390-1RP600_11_listfront.jpg" alt="navbarimage" />
                        <p>  <RouterLink to={"/newarrival/ready"}>  READY TO SHIP  </RouterLink></p></li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://github.com/pras75299/Jewellery/blob/master/img/banner/1.1.jpg?raw=true" alt="navbarimage" />
                        <p>  <RouterLink to={"/newarrival/kids"}>  KIDS  </RouterLink></p></li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="	https://banner.caratlane.com/live-images/796094b0bfd6480d99862d0b1b3b6df6.jpg" alt="navbarimage" />
                        <p> <RouterLink to={"/otherjwel"}>   OTHER JEWELLERY  </RouterLink></p></li>
                    <li>
                        <img className={styles.navbar__secondmenu_image} src="https://banner.caratlane.com/live-images/26fa8578bcd943c283875444feff3603.jpg" alt="navbarimage" />
                        <p><RouterLink to={"/newarrival/gifts"}>  GIFTING  </RouterLink></p></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;