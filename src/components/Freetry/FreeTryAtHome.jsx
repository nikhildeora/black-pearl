import React from 'react'
import "./FreeTryAtHome.css"

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
      
       
        
    </div>
  )
}
export default FreeTryAtHome;