"use client";

import { IImage } from "@/types/home";
import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Slider from "react-slick";

interface IProps {
  images: IImage[];
}
const HeroSection = (props: IProps) => {
  const { images } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full">
      <div className="col-span-2 rounded-2xl overflow-hidden h-full slider-container max-h-[300px] md:max-h-[450px]">
        <Slider
          dots={true}
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={5000}
          arrows={false}
        >
          {images?.length > 0 &&
            images.map((img) => {
              return (
                <Image
                  key={img._key}
                  src={urlForImage(img)}
                  alt={""}
                  width={900}
                  height={450}
                  className="img scale-animation"
                />
              );
            })}
        </Slider>
      </div>
      <div className="grid h-full gap-4 max-h-[450px]">
        <div className="flex-center w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-1.jpeg"
            alt="hero-1"
            width={240}
            height={120}
            className="img scale-animation"
          />
        </div>
        <div className="flex-center w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-2.jpeg"
            alt="hero-2"
            width={240}
            height={120}
            className="img scale-animation"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
