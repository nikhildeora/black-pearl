import React from "react";
import styles from "./PlanOfPurchase.module.css";
import caratlane__banner__desk from "../../assets/caratlane__banner__desk.jpg";
import calender2 from "../../assets/calender2.png";
import gift from "../../assets/gift.png";
import purchase from "../../assets/purchase.png";
import chart from "../../assets/chart.png";
import caratlaneBanner2 from "../../assets/caratlaneBanner2.jpg";
import call2 from "../../assets/call2.png";
import mobile__banner__1 from "../../assets/mobile__banner__1.jpg"
import caratlane__banner2__mobile from "../../assets/caratlane__banner2__mobile.jpg"
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
        <img className={styles.desktopBanner1} src={caratlane__banner__desk} alt="" />
        <img className={styles.mobileBanner1}src={mobile__banner__1} alt="" />
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
                name="Amount"
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
        <img className={styles.banner2__desk} src={caratlaneBanner2} alt="" />
        <img className={styles.banner2__mob}src={caratlane__banner2__mobile} alt="" />
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

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Is PoP applicable on all categories of products?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can purchase any Diamond/Gemstone/Platinum/Plain Gold
              Jewellery/Shaya designs. But you can't purchase Gold coins, Loose
              Diamonds, Mounts, 22kt Jewellery, Gift Cards using PoP! balance.
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
              No, you are eligible to have only 1 active plan in your account.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.Accordian}>
        <h1>Enrolment</h1>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I withdraw my paid instalment after 2 months?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Yes, you can withdraw your instalment at any time. But if you
              withdraw your paid instalment after 2 months, you will only get
              back your principal amount without any gift from CaratLane.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Is it possible to change the monthly amount in between the
                  instalments?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              No, you will not be able to change the monthly amount in between
              the instalments.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I come to the store and give cash every month?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Yes, you can pay your plan amount in cash only up to ₹10,000 every
              month.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I pay the instalment in cash? Also, can I pay the
                  instalment through gold coins?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              No. We do not accept instalment payments through Gold Coins now.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Where can I check my active PoP! plan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can check your PoP! value in the My Accounts section.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I have multiple PoP! accounts at the same time?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              No. You can have only 1 active PoP account at any given time.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Do you have any auto debit facility for monthly instalments?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Yes, we do have an auto debit facility.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I open PoP! account for my minor daughter?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              No. Anybody over the age of 18 is eligible to enrol.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className={styles.Accordian}>
        <h1>Redemption</h1>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I redeem the amount before 6 months?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Yes, you can redeem the amount even after 4 or 5 instalments.
              However, in that case CaratLane's gift will reduce to 10% of your
              first month plan amount.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  What happens to the paid amount if I don’t redeem at the end
                  of my plan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              If your PoP! balance is not redeemed within the redemption period,
              the entire principal amount is credited back to your bank account
              without the CaratLane gift (30% of your first instalment).
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  What happens to the paid amount if I cancel my order?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              In case of cancellation, the entire amount (Principal+CaratLane
              gift value) will be credited back to your CaratLane PoP! account
              and you can redeem it within your redemption period.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I club xCLusive points or coupon codes while redeeming my
                  CaratLane PoP! account balance?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can either use xCLusive points or a coupon code while
              purchasing jewellery using your CaratLane PoP! account balance.
              You can also avail the ongoing strikethrough discounts & offers.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I buy multiple products while redeeming PoP balance?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Yes, you can purchase multiple CaratLane products with your PoP!
              value, depending on your principal amount, except for gold coins.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Will late payment affect my CaratLane PoP! account balance?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              In case you fail to pay the amount within 7 days of the due date,
              CaratLane's gift value shall be adjusted proportionally to the
              effect of the number of days the payment is delayed by.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I redeem only part of the amount at the end of 7 months?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              No, you need to redeem the entire amount in your PoP! account.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can a nominee be eligible to redeem on behalf of the
                  enrollment person?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              In the event of the death of the enrolling individual, the nominee
              gets that amount. The nominee has to submit the required documents
              to transfer the PoP! balance to the nominee
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Do I have to come to a store to redeem the PoP! Value?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can redeem your PoP! balance anywhere online or in-store.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  How long do I have to wait for the CaratLane gift*?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You need to wait for 30 days after your last instalment payment.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  How can I pay my balance amount if I purchase more than my
                  PoP! account balance?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              You can use any online payment mode (Debit card/Credit
              Card/Netbanking/UPI) to pay the balance while redeeming online or
              at the store. Additionally, cash can also be paid for the
              remaining balance.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  Can I place an order for customized/ personalized design with
                  PoP account value?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Yes, you can.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  What is the redemption window for my PoP! Balance?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Your redemption window opens 30 days after your last instalment
              payment, and it remains open for 3 months post that.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                  When can I redeem my PoP! plan?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
              Once the final instalment is paid, you will have to wait for 30
              days before you can redeem your PoP! amount. This redemption
              period continues for the next 3 months, in which you can redeem
              your balance.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className={styles.Accordian}>
        <h1>Policy</h1>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                If I cancel the order, how will the CaratLane gift* be treated? 
                Will I get it in my account or is it lost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            In case of cancellations, PoP! Balance used will be credited back to your account, which you can use to place another order.
             This balance will remain in your account until the end of the redemption window. 
             We will refund your payments to your bank account if you do not make a CaratLane purchase with PoP! 
             balance (but you will not receive the CaratLane gift* value of 30%).
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                If I do a 15 day return, how will the CaratLane gift* value be treated? Will I get it in my account or is it lost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            In case of a 15 Day Return, the customer will not receive the CaratLane gift* value of 30%.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                If I do a 15 day exchange, how will the CaratLane gift* value be treated? Will I get it in my account or is it lost?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            In the case of a 15 day exchange, the customer will be able to use PoP balance until the end of the redemption window.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={styles.AccordianBtn}>
                <Box as="span" flex="1" textAlign="left">
                If I do an LTE on the product, will this amount be deducted as “discount recovery”?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className={styles.AccordianPanel} pb={4}>
            No. PoP! Balance used in the invoice will be treated as Payment mode.
             So there won't be any deduction in the CaratLane gift* value given.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PlanOfPurchase;
