import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
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

const Homepage = () => {
  return (
    <div>
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
        <SwiperSlide>
          <img src={slider1} alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="slider2" />
        </SwiperSlide>
        <SwiperSlide>
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
          <img src={mograCollection} alt="" />
          <img src={harmonyCollection} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
