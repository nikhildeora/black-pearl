import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "./Homepage.module.css";
import slider1 from "../../assets/HomeImage/slider1-1.jpg";
import slider2 from "../../assets/HomeImage/slider1-2.jpg";
import slider3 from "../../assets/HomeImage/slider1-3.jpg";
import ankletLeft from "../../assets/HomeImage/ankletLeft.jpg";
import ringRight1 from "../../assets/HomeImage/ringRight1.jpg";
import ringRight2 from "../../assets/HomeImage/ringRight2.jpg";
import dropEarRings from "../../assets/HomeImage/dropEarRings.jpg";
import modernMangalSutra from "../../assets/HomeImage/modernMangalSutra.jpg";
import giftsUnder20k from "../../assets/HomeImage/giftsUnder20k.jpg";
import engagementRings from "../../assets/HomeImage/engagementRings.jpg";
import stunningBangles from "../../assets/HomeImage/stunningBangles.jpg";
import mensRing from "../../assets/HomeImage/mensRing.jpg";
import barlaCollection from "../../assets/HomeImage/barlaCollection.jpg";
import mograCollection from "../../assets/HomeImage/mograCollection.jpg";
import harmonyCollection from "../../assets/HomeImage/harmonyCollection.jpg";
import markMilestoneLeft from "../../assets/HomeImage/markMilestoneLeft.jpg";
import diamondStuddedRight from "../../assets/HomeImage/diamondStuddedRight.jpg";
import clearanceRight from "../../assets/HomeImage/clearanceRight.gif";
import roadLeft from "../../assets/HomeImage/roadLeft.gif";
import goldExchange from "../../assets/HomeImage/goldExchange.png";
import taniksh from "../../assets/HomeImage/taniksh.png";
import spriteImage1 from "../../assets/HomeImage/spriteImage2 (1).png";
import spriteImage2 from "../../assets/HomeImage/spriteImage2 (2).png";
import spriteImage3 from "../../assets/HomeImage/spriteImage2 (3).png";
import spriteImage4 from "../../assets/HomeImage/spriteImage2 (4).png";
import spriteImage5 from "../../assets/HomeImage/spriteImage1.png";

const Homepage = () => {
  return (
    <div style={{ marginTop: "7rem" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.swiper}>
          <img src={slider1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <img src={slider2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper}>
          <img src={slider3} alt="slider3" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.homepageMain}>
        <div className={styles.ankletRing}>
          <img src={ankletLeft} alt="ankletLeft" />
          <div className={styles.ringRight}>
            <img
              style={{ marginBottom: "1vw" }}
              src={ringRight1}
              alt="ringRight1"
            />
            <img src={ringRight2} alt="ringRight2" />
          </div>
        </div>
        <div className={styles.category6}>
          <img src={dropEarRings} alt="dropEarRings" />
          <img src={modernMangalSutra} alt="modernMangalSutra" />
          <img src={giftsUnder20k} alt="giftsUnder20k" />
          <img src={engagementRings} alt="engagementRings" />
          <img src={stunningBangles} alt="stunningBangles" />
          <img src={mensRing} alt="mensRing" />
        </div>
        <div className={styles.collection}>
          <img src={barlaCollection} alt="" />
          <div className={styles.collection__innerdiv}>
          <img src={mograCollection} alt="mograCollection" />
        <div className={styles.button}>
          <button>View all Collection</button>
        </div>

          </div>
          <img src={harmonyCollection} alt="" />
        </div>
        <div className={styles.milestone}>
          <img src={markMilestoneLeft} alt="" />
          <img src={diamondStuddedRight} alt="" />
          <img src={roadLeft} alt="" />
          <img src={clearanceRight} alt="" />
        </div>
        <div className={styles.goldExchange}>
          <div>
            <img src={goldExchange} alt="" />
          </div>
          <div className={styles.goldExchangetext}>
            <h1>Your precious gold. Our new designs!</h1>
            <p>
              - A Gold Exchange Program that lets you preserve your memories and
              make new ones! Please note: The old gold doesn't have to be from
              only CaratLane, it can be any gold jewellery you have.{" "}
            </p>
            <button>Know More</button>
          </div>
        </div>
        <div className={styles.trustTanishq}>
          <img src={taniksh} alt="tanishq" />
          <p>
            The highest quality of craftsmanship and innovation, that brings you
            modern, everyday designs.
          </p>
          <button>Know More</button>
        </div>
        <div className={styles.spriteImage}>
          <div>
            <div>
              <img src={spriteImage1} alt="" />
            </div>
            <div>
              <h3>100% Certified & Free Shipping</h3>
              <p>
                Our jewellery always comes with a certificate of authentication.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={spriteImage2} alt="" />
            </div>
            <div>
              <h3>15 Day Money-Back</h3>
              <p>Get 100% refund if you don't like your jewellery.</p>
            </div>
          </div>
          <div>
            <div>
              <img src={spriteImage3} alt="" />
            </div>
            <div>
              <h3>Lifetime Exchange</h3>
              <p>Exchange your old designs anytime you want an upgrade.</p>
            </div>
          </div>
          <div>
            <div>
              <img src={spriteImage4} alt="" />
            </div>
            <div>
              <h3>One Year Replacement Warranty</h3>
              <p>If your jewellery has a defect, we will fix it.</p>
            </div>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.insta}>
                <img src={spriteImage5} alt="" />
                <p>
                  ”The six of us wanted to celebrate our year of togetherness
                  with something which will stay with us forever. So, all of us
                  bought this beautiful ring which is the perfect symbol of our
                  friendship and is just so classy!”
                </p>
                <div className={styles.instap}>
                  <p>- Shilpa Praveen via Instagram</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.insta}>
                <img src={spriteImage5} alt="" />
                <p>
                  ”My fiance wanted to give me something classic and unique. He
                  searched everywhere, literally half of the Chandigarh for the
                  unique design. Our search was complete when we entered
                  CaratLane store. My fiance selected the diamond and I selected
                  the design. I love it because it is designed just for me.”
                </p>
                <div className={styles.instap}>
                  <p>- Pooja Rajpoot via Instagram</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.insta}>
                <img src={spriteImage5} alt="" />
                <p>
                “I got this necklace as my wedding gift and instantly loved it. It is literally the only accessory I wore on my entire honeymoon. I love how delicate and beautiful it is.”
                </p>
                <div className={styles.instap}>
                  <p>- Tanya Gupta via Instagram</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.shopInsta}>
            <h2>Shop Our Instagram</h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
