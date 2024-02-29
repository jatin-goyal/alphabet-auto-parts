"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { images } from "@/lib/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImgSlider() {
  return (
    <section className="pt-6 z-10">
      <div className="container">
        <Swiper
          navigation
          loop={true}
          pagination={{ type: "fraction", clickable: false }}
          modules={[Autoplay, Navigation, Pagination]}
          onSwiper={(swiper) => console.log(swiper)}
          className="h-30 md:h-60 lg:h-96 w-full rounded-lg"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
