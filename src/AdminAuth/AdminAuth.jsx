import React from 'react'
import styles from './AdminAuth.module.css'
 const AdminAuth = () => {
  return (
    <div>
        <div className={styles.mainContainer}>
            
                <div>
                <h1>Admin Dashboard</h1>
                </div>
                 
                 <div className={styles.formContainer}>
                 <form action="">
                    <div className={styles.input_div}>
                    <p>Name</p>
                    <input type="text" placeholder='Name'/>
                    </div>
                    
                    <div className={styles.input_div}>
                    <p>Price</p>
                    <input type="number" placeholder='Amount' />
                    </div>
                    <div className={styles.input_div}>
                    <p>Image</p>
                    <input type="url" placeholder='Image' />
                    </div>
                    <div className={styles.input_div}>
                    <p>Category</p>
                    <input type="text" placeholder='Category'/>
                    </div>
                    <div className={styles.input_div}>
                    <p>Shipping</p>
                    <input type="text" placeholder='Shipping Info'/>
                    </div>
                    <div>
                    <input className={styles.button} type="submit" />
                    </div>
                      
                 </form>
                 </div>
           
        </div>
    </div>
  )
}

export default AdminAuth;