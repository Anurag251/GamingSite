import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import phoneImage from "../assets/images/how-sostronk-works-1.webp";

const HowItWorkComponent = () => {
  return (
    <div className="how-it-work">
      <div className="wrapper">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          speed={1000}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <div className="content">
                <h5>Join 24/7 Conteste!</h5>
                <div className="number">01</div>
                <p>
                  Instant & Mega Contests. <br /> No Waiting!
                </p>
              </div>
              <div className="image-sec">
                <img src={phoneImage} alt="" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item">
              <div className="content">
                <h5>Join 24/7 Conteste!</h5>
                <div className="number">01</div>
                <p>
                  Instant & Mega Contests. <br /> No Waiting!
                </p>
              </div>
              <div className="image-sec">
                <img src={phoneImage} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HowItWorkComponent;
