import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import offerBanner from '../../../assets/images/offer-banner.png'
import offerBanner1 from '../../../assets/images/offer-banner.png'
import offerBanner2 from '../../../assets/images/offer-banner-2.png'

const Banner = () => {
  const slides = [
    {
      image: offerBanner2,
      title: "Welcome to Our Store",
      desc: "Your one-stop destination for quality products",
    },
    {
      image: offerBanner,
      title: "Best Deals Await You",
      desc: "Get amazing discounts on your favorite items",
    },
    {
      image: offerBanner,
      title: "Shop with Confidence",
      desc: "Trusted by thousands of happy customers",
    },
  ];

  return (
    <section className="max-h-80">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 60000, // 3 sec delay
          disableOnInteraction: false, // autoplay will not stop now
        }}
        loop
        className=" max-h-80 w-full sm:h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-white text-sm sm:text-lg mt-2 max-w-2xl">
                  {slide.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
