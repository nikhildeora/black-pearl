import React from "react";
import styles from "./PlanOfPurchase.module.css";
import caratlane__banner__desk from "../../assets/caratlane__banner__desk.jpg";
import calender2 from "../../assets/calender2.png";
import gift from "../../assets/gift.png";
import purchase from "../../assets/purchase.png";
import chart from "../../assets/chart.png";
import caratlaneBanner2 from "../../assets/caratlaneBanner2.jpg";
import call2 from "../../assets/call2.png";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const PlanOfPurchase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner__container}>
        <img src={caratlane__banner__desk} alt="" />
        <div className={styles.text_container}>
          <div>
            <h1>
              Buying jewellery should be joyful! At CaratLane, we don't want you
              to think twice or wait long.
            </h1>
          </div>
          <div className={styles.button__div}>
            <button className={styles.button__play}>Plan Now</button>
            <a href="#next">Learn More</a>
          </div>
        </div>
      </div>
      <div id="next" className={styles.how_it_works}>
        <div className={styles.how_it_works__child}>
          <p>How It Works</p>
          <h1>
            It's quick and simple, just like popping a bubble. It's so
            hassle-free that the only thing you need to worry about is choosing
            the outfit you'll be wearing with your favourite jewellery.
          </h1>
          <div className={styles.button__div}>
            <button className={styles.button__play}>Plan Now</button>
          </div>
          <p>
            You don't have to wait till the 6th month to redeem. Refer to the
            calculator below to feel the joy sooner!
          </p>
        </div>
        <div className={styles.how_it_works__child2}>
          <div className={styles.how_it_works__child2__inner}>
            <div>
              <img src={calender2} alt="" />
            </div>
            <div>
              <h2>Pay Monthly</h2>
              <p>
                Take easy, baby steps by choosing a fixed plan amount to keep
                aside with CARATLANE every month.
              </p>
            </div>
          </div>
          <div className={styles.how_it_works__child2__inner}>
            <div>
              <img src={gift} alt="" />
            </div>
            <div>
              <h2>Our gift* to you</h2>
              <p>
                At the end of 6 months, CARATLANE will issue a gift* value
                equivalent to 30% of your first month's plan amount.
              </p>
            </div>
          </div>
          <div className={styles.how_it_works__child2__inner}>
            <div>
              <img src={purchase} alt="" />
            </div>
            <div>
              <h2>Purchase</h2>
              <p>
                You can redeem by purchasing jewellery of your choice, either at
                our stores or online.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.how_it_works}>
        <div className={styles.how_it_works__child}>
          <p>Calculate PoP!</p>
          <h1>
            This plan will turn that frown upside down and make your smile PoP!
            Here's how you can calculate your purchase better. Enter the amount
            you'd like to keep aside with us for 6 months and see our gift*
            value.
          </h1>
          <div className={styles.button__div}>
            <button className={styles.button__play}>Plan Now</button>
          </div>
          {/* <p>You don't have to wait till the 6th month to redeem. Refer to the calculator below to feel the joy sooner!</p> */}
        </div>
        <div className={styles.how_it_works__child2}>
          <div>
            <p>Enter Any Amount</p>
            <p>Min ₹1,000</p>
          </div>

          <div className={styles.input__and__button}>
            <div className={styles.input__wrapper}>
              <input
                // value="284003"
                spellCheck="false"
                name="Pincode"
                className={styles.location__input}
                placeholder="1000"
              />
            </div>
            <button
              content="See Designs"
              className={styles.location__input__btn}
            >
              check
            </button>
          </div>
          <div>
            <p>Customers Usually Prefer</p>
            <div className={styles.preferred__btn}>
              <button>₹10,000</button>
              <button>₹20,000</button>
              <button>₹30,000</button>
            </div>
          </div>
          <div className={styles.chartImg}>
            <img src={chart} alt="chart" />
          </div>
          <div>
            <div className={styles.price}>
              <h2>YOU PAY (6 months) </h2>
              <h2> 6,000</h2>
            </div>

            <div className={styles.price}>
              <h2>YOU GET (30% of 1 month) </h2>
              <h2> 300</h2>
            </div>
          </div>

          <hr />
          <div className={styles.price}>
            <h2>
              Total Amount
              <br />
              <p>(Redeemable) </p>
            </h2>
            <h2> 6,300</h2>
          </div>
        </div>
      </div>
      <div className={styles.banner__container2}>
        <img src={caratlaneBanner2} alt="" />
        <div className={styles.text_container2}>
          <div>
            <p>Why CaratLane PoP!</p>
            <h1>
              In the true spirit of making fine jewellery accessible and
              affordable to all, we've introduced CaratLane PoP! It is the
              quickest way to enjoy wearing your favourite jewellery,
              frequently.
            </h1>
          </div>
          <div className={styles.button__div}>
            <button className={styles.button__play}>Plan Now</button>
          </div>
        </div>
      </div>
      <div className={styles.how_it_works}>
        <div className={styles.how_it_works__child}>
          <p>Frequently Asked Questions</p>
          <h1>
            If it's still too good to be true, read through these questions to
            get a clearer picture. You can also drop in your number and we will
            get in touch regarding your PoP!
          </h1>
        </div>
        <div className={styles.child2}>
          <div className={styles.child2__img}>
            <img src={call2} alt="call2.png" />
            <p>At Your Service. Always.</p>
          </div>
          <div className={styles.child2__input}>
            <p>Mobile Number </p>
            <input type="text" />
            <button>Request Call Back</button>
          </div>
        </div>
      </div>
      <div className={styles.Accordian}>
        <h1>Generic</h1>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  What is the minimum amount that I need to set aside every
                  month?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can start your Plan of Purchase with a minimum amount of
              ₹1,000 every month.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                What is the maximum amount limit of PoP!?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            There is no maximum limit
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem >
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                Is PoP applicable on all categories of products?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
        <AccordionPanel className={styles.AccordianPanel} pb={4}>
        You can purchase any Diamond/Gemstone/Platinum/Plain Gold Jewellery/Shaya designs. But you can't purchase Gold coins, Loose Diamonds, Mounts, 22kt Jewellery, Gift Cards using PoP! balance.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                Can I club two or more PoP! accounts with my PoP! account?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            Can I club two or more PoP! accounts with my PoP! account?
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PlanOfPurchase;
