import React from 'react'
import styles from "./FreeTryAtHome.module.css"
import bag from "../../assets/bag.png";
import calender from "../../assets/calender.png"
import mobile from "../../assets/mobile.png"
import person from "../../assets/person.png"
import customercoma from "../../assets/customer coma.png"
import call from "../../assets/call.png"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  
} from '@chakra-ui/react'

 const FreeTryAtHome = () => {
  return (
    <div className={styles.main__container}>
        <div className={styles.video__container}>
        <video autoPlay loop playsInline muted>
         <source src="https://assets.cltstatic.com/images/responsive/TAH-Desktop-Snippet.mp4" type='video/mp4'/>
         
        </video>
        <div className={styles.text__container}>
        <h2 className={styles.text}>Your Favourite Designs at Your Doorstep!</h2>
        <div className={styles.input__and__button}>
        <div className={styles.input__wrapper}>
         <span className={styles.location__logo}></span>
         <input value="284003" spellCheck="false" name='Pincode' className={styles.location__input} placeholder='Enter PinCode' />
        </div>
        <button content="See Designs" className={styles.location__input__btn} >See Designs</button>
        </div>
         <span className={styles.video__player}></span>
         <p>See How It Works</p>
        </div>
        
        </div>
      
       <div className={styles.Two__Products}>
          <div className={styles.products}>
            <div> 
              <img src="https://assets.cltstatic.com/images/responsive/tah-gift-ribbon.png" alt="" />
            </div>
            <div className={styles.product__info}>
              <h3>Give Her the Gift of Choice!</h3>
              <p>Book a surprise Try at Home and let her pick from 5 stunning designs.</p>
            </div>
          </div>
          <div  className={styles.products}>
          <div> 
              <img src="https://assets.cltstatic.com/images/responsive/tah-gift-ring.png" alt="" />
            </div>
            <div className={styles.product__info}>
              <h3>Ensure the Perfect Fit...</h3>
              <p>Always...</p>
            </div>
          </div>
       </div>
       <div className={styles.options}>
       <div className={styles.options__child}>
          <h1>It Doesn't Get Easier than This!</h1>
          <p>It's free and there's no obligation to buy!</p>
        </div>
        <div className={styles.option__images}>
          <section className={styles.option__section}>
          <div className={styles.option__section__div}>
             <div className={styles.option__section__span__div}>
            <img src={mobile} alt="" />
             </div>
             <div className={styles.option__section__info__div}> 
              <h3>
                <p>Pick your favourite  
                  <br />
                  designs online
                </p>
              </h3>
              <p>Add Minimum 1 design</p>
             </div>
            </div>
            <div className={styles.option__section__div}>
             <div className={styles.option__section__span__div}>
            <img src={calender} alt="" />
             </div>
             <div className={styles.option__section__info__div}> 
              <h3>
                <p>Book an appointment
                  <br />
                   (It's Free!)
                </p>
              </h3>
              <p>Select your convenient date,
                  time and place.</p>
             </div>
            </div>
            <div className={styles.option__section__div}>
             <div  className={styles.option__section__span__div}>
            <img src={person} alt="" />
             </div>
             <div className={styles.option__section__info__div}> 
              <h3>
                <p>Try the designs </p>
              </h3>
              <p>Our Try at Home consultants
                  will get you your chosen
                  designs - at home or at work!
                  </p>
              </div>
            </div>
            <div className={styles.option__section__div}>
             <div  className={styles.option__section__span__div}>
            <img src={bag} alt="" />
             </div>
             <div  className={styles.option__section__info__div}> 
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
       <div className={styles.bestseller}>
          <div className={styles.bestseller_div}>
            <h2 className={styles.bestseller_h2}>Pick from Our Bestsellers</h2>
          </div>
         <div className={styles.input__box}>
          <div className={styles.input__wrapper2}>
            <span className={styles.input__wrapper2__span}></span>
            <label htmlFor="" className={styles.input__wrapper2__label}>Enter Pincode</label>
            <input spellCheck="false" className={styles.input__wrapper2__input} name='pincode' placeholder='PINCODE' id='pincode' style={{width:"20rem",height:"3.6rem",color:"#33363e"}} value="284003"/>
          </div>
          <button className={styles.submit__btn}>Submit</button>
          <p>OR</p>
          <div className={styles.locate__me}>
            <button className={styles.locate__me__btn}>Locate Me</button>
          </div>
         </div>
         <div className={styles.p__div}>
          <p>Try at Home is Not Available at This Location</p>
          <p>Change Your Pincode to See Designs</p>
         </div>
       </div >
       <div className={styles.customer__query}>
        <h1>Hear it from Our Customers</h1>
        <img src={customercoma} alt="" className={styles.customer_img} />
       </div>

       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
        <p >Navya pradeep. Bengaluru</p>
        <p className={styles.desc}>
          It was wonderful to have a ability to see and try these at home. 
          <br />
          Classic designs made affordable. Bravo 
        </p>
        </SwiperSlide>
        <SwiperSlide>
        <p >Gokul Karki. New Dehli</p>
        <p className={styles.desc}>
        Try at home service very useful for people like us. Thanks for the excellent service by <br />
         the executive. Very polite person, had good knowledge about the product I will  
         <br /> recommend my friends as well about this service.
        </p>
        </SwiperSlide>
        <SwiperSlide>
        <p> Preeti Singh, Bengaluru</p>
        <p className={styles.desc}>
        It was great experience of try at home. It saves time. Products were also good.
        <br /> Behaviour of person is professional. 
        </p>
        </SwiperSlide>
      </Swiper>

      <div className={styles.Accordian}>
           <div className={styles.questions}>
            <h3>Have Some Questions?</h3>
            <div className={styles.contact}>
             <img src={call}alt="" />
              <div className={styles.contact_call}>
              <p>Just give us a call</p>
              <a href='+91-44-42935000' className={styles.a_href}>+91-44-42935000</a>
              </div>
             
            </div>
           </div>
           <div className={styles.Accordian_options}>
              <Accordion allowToggle>
                <AccordionItem className={styles.AccordianBtn}>
                  <h2 >
                <AccordionButton >
                <Box as="span" flex='1' textAlign='left'>
                What is Try at Home?
                </Box>
                <AccordionIcon />
              </AccordionButton >
                 </h2>
                  <AccordionPanel className={styles.AccordianPanel}  pb={4}>
                    Try at Home is a service that you can avail to try our designs in the comfort of your home. It is a free service, with absolutely no obligation to buy. All you have to do is pick your favourite designs, and schedule an appointment as per your convenience.
              </AccordionPanel>
              </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Is Try at Home available outside India?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
              No, Try at Home is available only within India.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Which are the cities in which this service is available?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
            Try at Home service is currently available in Agra, Ahmedabad, Bangalore, Bhubaneswar,
             Bokaro, Chandigarh, Chennai, Cuttack, Dehradun, Delhi-NCR, Gandhinagar, Guwahati, Haridwar, 
             Hyderabad, Jaipur, Kochi, Kolkata, Lucknow, Ludhiana, Mumbai, Nagpur, Pathankot, Patna, Pune,
              Ranchi, Surat, Vijayawada & Visakhapatnam.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Is the Try at Home service free?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
              Yes, there are absolutely no charges for Try at Home.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Which products can I try?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
            The products available for you are based on your location. 
            Once you enter your pincode on the Try at Home page, you can select any of those designs.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How many products can I try?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
            You can select up to 5 products for Try at Home. If you would like to select a few more designs to try,
              please contact us on 1800-102-0103 (Toll Free), and we will help you with it.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                How will you send me the products for trial?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
              Our Try at Home consultant will visit your location to show you the designs, 
              at a time and place that is convenient to you.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Can I request for a Try at Home at my office?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
             Absolutely! You can request for the appointment to take place at your office, or any other indoor location.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What if the date or time slot convenient to me is not available?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
              In such cases, we request you to contact us on 1800-102-0103 (Toll Free), and we will try to arrange the appointment as per your convenience.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                After trying on the products at home, can I place the order immediately?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
              Yes, if you would like to purchase any of the designs you tried, 
              you can place an order on the spot with our Try at Home consultant.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                Are all the jewellery sent for the Try at Home appointment made of real gold?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
              Yes, the jewellery we send to your home for trial is crafted with real gold and diamonds.
               If you place an order after the trial, you will receive the certificate of authenticity too.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What are the measures CaratLane is taking to ensure the Try at Home consultants are healthy and safe?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
        - Our jewellery consultants use mask, gloves & sanitisers <br />
        - We monitor & record the temperature of all our consultants every day via thermal screening <br />
        - Every consultant uses the Aarogya Setu App to ensure they are healthy, and they have a limited number of appointments per day
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className={styles.AccordianBtn}>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                What are the safety measures taken during the Try at Home appointments?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel  className={styles.AccordianPanel} pb={4}>
             - All our jewellery is sanitised with alcohol swabs before and after the appointment <br />
             - We sanitise our bag, jewellery kit, mirrors, ring sizer, bangle sizer, iPad, and everything else we bring, to ensure your safety <br />
             - For appointments in containment zones, we will first double-check with the customer if the entry is allowed and if it's a non-infected zone <br />
             - Proper social distancing during the appointment is practised, and we also bring a new mask for the customer to wear <br />
            <br />
            <br />
              Please note: We may need to check the status of the customer's health on the Aarogya Setu App.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
           </div>
      </div>
    </div>
  )
}
export default FreeTryAtHome;