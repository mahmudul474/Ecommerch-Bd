// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1Img from "../../assates/slide1.jpg";
import slide2Img from "../../assates/slide2.jpg";
import slide3Img from "@/assates/slide3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[300px] lg:h-[525px] flex justify-between items-center ">
            <Image
              layout="fill"
              objectFit="cover"
              quality={90}
              className="w-full h-full bg-cover bg-no-repeat"
              src={slide1Img}
              alt="sliderimg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[300px] lg:h-[525px] flex justify-between items-center ">
            <Image
              layout="fill"
              objectFit="cover"
              quality={90}
              className="w-full h-full bg-cover bg-no-repeat"
              src={slide2Img}
              alt="sliderimg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[300px] lg:h-[525px] flex justify-between items-center ">
            <Image
              layout="fill"
              objectFit="cover"
              quality={90}
              className="w-full h-full bg-cover bg-no-repeat"
              src={slide3Img}
              alt="sliderimg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
