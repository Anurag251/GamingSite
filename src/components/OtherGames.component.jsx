import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

const OtherGamesComponent = () => {
  const image1 =
    "https://www.sostronk.com/static/cca452f855633a9d34830769b6f1b877/526e6/game-1.webp";

  const image2 =
    "https://www.sostronk.com/static/bbe448bb2a0cd3927907addf4f737ce8/526e6/game-2.webp";

  const image3 =
    "https://www.sostronk.com/static/5c6a93475682d8926be96af7c868775d/526e6/game-3.webp";

  const image4 =
    "https://www.sostronk.com/static/334ade6816c214c17779b75f6260bd1b/526e6/game-4.webp";

  return (
    <div className="other-games">
      <div className="wrapper">
        <div className="other-game-list">
          <Swiper
            slidesPerView={5}
            speed={1000}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={image1} alt="" className="game-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="" className="game-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} alt="" className="game-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} alt="" className="game-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image1} alt="" className="game-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="" className="game-image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OtherGamesComponent;
