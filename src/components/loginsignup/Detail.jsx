



   import React from 'react'
   import styles from "../loginsignup/Detail.module.css"
   export default function Detail() {
     return (
       <div>
         <div className={styles.main}>
            <div className={styles.div1}>
                <img src="https://cdn.caratlane.com/media/catalog/product/J/L/JL04330-YGP9P0_1_lar.jpg" alt="" />
            </div>
            <div className={styles.div2}>
                <div className={styles.div20}>
                    <img src="data:image/png;base64,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" alt="" />
                   <div className={styles.reviw}>7 Ratings
                                               / Reviews</div> 
                </div>
              <div className={styles.productname} ><h2 >Oleria Tulip Pearl Necklace</h2> </div> <i style={{marginLeft:"10rem"}} class="fa-regular fa-heart"></i>  <br />

              <div className={styles.productdetail} ><a href="">Product details</a></div> <br />
              <div className={styles.productdes} ><p>Set in 18 KT Yellow Gold(4.440 g) with diamonds (0.090 ct ,IJ-SI)</p></div><br />
              <div className={styles.pincode}>
              <input style={{backgroundColor:"white",border:"0.5px solid",padding:"0.5rem"}} placeholder='Pincode' type="text" />
              </div><br /> 
              <div className={styles.spotlight} >SPOTLIGHTS</div><br />
              <div className={styles.productprice}><h2 >₹42,034</h2></div>
              <div>
                <button className={styles.button}> ADD TO CART </button>
                <button className={styles.button2}> ADD TO WISHLIST</button>
              </div>
              <div className={styles.notify} ><p>Upon Price Drop, <span style={{color:"#de57e5",cursor:"pointer"}} > Notify Me</span></p></div>
            </div>
            </div>
            <div className={styles.prdetail}>
              <div className={styles.heading} ><h1>Product Details</h1></div>
              <div className={styles.productinfo}>
                <div>
                  <p style={{color:"rgb(136, 99, 251)"}}>Product Information</p>
                  <ul style={{listStyle:"none"}}>
                    <li style={{textAlign:"left"}} > Length - 43.18cm (17 inches)</li>
                    <li style={{textAlign:"left"}} > Height - 12.25 mm</li>
                    <li style={{textAlign:"left"}} > Purity - 18 KT</li>
                    <li style={{textAlign:"left"}} >Gross Weight - 4.638 g</li>

                   </ul>
                 
                  </div>
                <div><p>Set in 18 KT Yellow Gold(4.440 g) with diamonds (0.090 ct ,IJ-SI)</p></div>
                <div><img src="https://assets.cltstatic.com/images/responsive/packaging.jpg" alt="" /></div>
              </div>
            </div>

           
           
       </div>
     )
   }
//    Length - 43.18cm (17 inches)

// Height - 12.25 mm

// Purity - 18 KT

// Gross Weight - 4.638 g