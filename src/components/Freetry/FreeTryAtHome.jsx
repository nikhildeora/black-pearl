import React from 'react'
import "./FreeTryAtHome.css"
import bag from "../../assets/bag.png";
import calender from "../../assets/calender.png"
import mobile from "../../assets/mobile.png"
import person from "../../assets/person.png"
import customercoma from "../../assets/customer coma.png"
 const FreeTryAtHome = () => {
  return (
    <div className="main__container">
        <div className="video__container">
        <video autoPlay loop playsInline muted>
         <source src="https://assets.cltstatic.com/images/responsive/TAH-Desktop-Snippet.mp4" type='video/mp4'/>
         
        </video>
        <div className='text__container'>
        <h2 className='text'>Your Favourite Designs at Your Doorstep!</h2>
        <div className='input__and__button'>
        <div className='input__wrapper'>
         <span className='location__logo'></span>
         <input value="284003" spellCheck="false" name='Pincode' className='location__input' placeholder='Enter PinCode' />
        </div>
        <button content="See Designs" className='location__input__btn' >See Designs</button>
        </div>
         <span className='video__player'></span>
         <p>See How It Works</p>
        </div>
        
        </div>
      
       <div className='Two__Products'>
          <div className='products'>
            <div> 
              <img src="https://assets.cltstatic.com/images/responsive/tah-gift-ribbon.png" alt="" />
            </div>
            <div className='product__info'>
              <h3>Give Her the Gift of Choice!</h3>
              <p>Book a surprise Try at Home and let her pick from 5 stunning designs.</p>
            </div>
          </div>
          <div className='products'>
          <div> 
              <img src="https://assets.cltstatic.com/images/responsive/tah-gift-ring.png" alt="" />
            </div>
            <div className='product__info'>
              <h3>Ensure the Perfect Fit...</h3>
              <p>Always...</p>
            </div>
          </div>
       </div>
       <div className='options'>
       <div className='options__child'>
          <h1>It Doesn't Get Easier than This!</h1>
          <p>It’s free and there’s no obligation to buy!</p>
        </div>
        <div className='option__images'>
          <section className='option__section'>
          <div className='option__section__div'>
             <div className='option__section__span__div'>
            <img src={mobile} alt="" />
             </div>
             <div className='option__section__info__div'> 
              <h3>
                <p>Pick your favourite
                  <br />
                  designs online
                </p>
              </h3>
              <p>Add Minimum 1 design</p>
             </div>
            </div>
            <div className='option__section__div'>
             <div className='option__section__span__div'>
            <img src={calender} alt="" />
             </div>
             <div className='option__section__info__div'> 
              <h3>
                <p>Book an appointment
                   (It’s Free!)
                </p>
              </h3>
              <p>Select your convenient date,
                  time and place.</p>
             </div>
            </div>
            <div className='option__section__div'>
             <div className='option__section__span__div'>
            <img src={person} alt="" />
             </div>
             <div className='option__section__info__div'> 
              <h3>
                <p>Try the designs </p>
              </h3>
              <p>Our Try at Home consultants
                  will get you your chosen
                  designs - at home or at work!
                  </p>
              </div>
            </div>
            <div className='option__section__div'>
             <div className='option__section__span__div'>
            <img src={bag} alt="" />
             </div>
             <div className='option__section__info__div'> 
              <h3>
                <p>Buy Only if You like</p>
              </h3>
              <p>Buy on the spot! And if you don't
                like it, there's no obligation to buy.</p>
             </div>
            </div>
          </section>
           
        </div>
       </div>
       <div className='bestseller'>
          <div className='bestseller_div'>
            <h2 className='bestseller_h2'>Pick from Our Bestsellers</h2>
          </div>
         <div className='input__box'>
          <div className='input__wrapper2'>
            <span className='input__wrapper2__span'></span>
            <label htmlFor="" className='input__wrapper2__label'>Enter Pincode</label>
            <input spellCheck="false" className='input__wrapper2__input' name='pincode' placeholder='PINCODE' id='pincode' style={{width:"20rem",height:"3.6rem",color:"#33363e"}} value="284003"/>
          </div>
          <button className='submit__btn'>Submit</button>
          <p>OR</p>
          <div className='locate__me'>
            <button className='locate__me__btn'>Locate Me</button>
          </div>
         </div>
         <div className='p__div'>
          <p>Try at Home is Not Available at This Location</p>
          <p>Change Your Pincode to See Designs</p>
         </div>
       </div >
       <div className='customer__query'>
        <h1>Hear it from Our Customers</h1>
        <img src={customercoma} alt=""  style={{width:"200px"}}/>
       </div>
    </div>
  )
}
export default FreeTryAtHome;