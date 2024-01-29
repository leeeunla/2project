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
        style={{ width: "1500px", height: "400px", backgroundColor: "white" }}
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
          <img
            src="https://cdn.pixabay.com/photo/2014/04/05/11/40/chess-316658_1280.jpg"
            style={{ width: "1500px", height: "400px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/eb/3a/72/eb3a7218ef974af7f39d18daf508a167.jpg"
            style={{ width: "1500px", height: "400px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2022/12/04/15/10/game-7634718_1280.jpg"
            style={{ width: "1500px", height: "400px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2015/05/10/21/16/board-761586_1280.jpg"
            style={{ width: "1500px", height: "400px" }}
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
