"use client";

import { IImage } from "@/types/home";
import React from "react";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import Slider from "react-slick";
import classes from "./HeroSection.module.scss";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

interface IProps {
  images: IImage[];
}
const HeroSection = (props: IProps) => {
  const { images } = props;

  const SampleNextArrow = (props: any) => {
    const { style, onClick } = props;
    return (
      <div
        className="absolute z-[100000000] -translate-y-1/2 left-0 top-1/2 h-8 w-8 flex justify-center items-center bg-[#00000033] hover:bg-[#eaeaea5e] transform hover:cursor-pointer"
        onClick={onClick}
      >
       <BsChevronLeft size={24} />
      </div>
    );
  };
  const SamplePrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-[100000000] -translate-y-1/2 right-0 top-1/2 h-8 w-8 flex justify-center items-center bg-[#00000033] hover:bg-[#eaeaea5e] transform hover:cursor-pointer"
        onClick={onClick}
      >
        <BsChevronRight size={24} />
      </div>
    );
  };
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 1000,
    adaptiveHeight: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="grid grid-cols-1 md:gap-4 md:grid-cols-3 items-center w-full">
      <div className="col-span-2 mb-4 md:mb-0 h-fit">
        <Slider {...settings} className="relative slider">
          {images?.length > 0 &&
            images.map((img) => {
              return (
                <div
                  className="flex-center w-full rounded-2xl overflow-hidden"
                  key={img._key}
                >
                  <Image
                    key={img._key}
                    src={urlForImage(img)}
                    alt={""}
                    width={800}
                    height={500}
                    className="img"
                    style={{ height: "300px" }}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
      <div className="grid h-full gap-4">
        <div className="flex-center w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-1.jpeg"
            alt="hero-1"
            width={240}
            height={100}
            className="img scale-animation"
          />
        </div>
        <div className="flex-center w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/hero-2.jpeg"
            alt="hero-2"
            width={240}
            height={100}
            className="img scale-animation"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
