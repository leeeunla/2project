import styled from "styled-components";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";

const Container = styled.div``;

const GameSwiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
  };
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        style={{ width: "900px", height: "400px", backgroundColor: "white" }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // slidesOffsetAfter={0}
        // slidesOffsetBefore={0}
        spaceBetween={40}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <img src="imge/map.png" style={{ width: "900px", height: "400px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="imge/map2.png"
            style={{ width: "900px", height: "400px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="imge/map3.png"
            style={{ width: "900px", height: "400px" }}
          />
        </SwiperSlide>
        ...
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Container>
  );
};
export default GameSwiper;
