import React from "react";
import bannerLayer from "@/assets/Images/BannerLayer.png";
import bannerDots from "@/assets/Images/bannerDots.png";
import bannerRight from "@/assets/Images/bannerRight.png";
import redLine from "@/assets/Images/redLine.png";
import Button from "../common/Button";

const Banner = () => {
  return (
    <div
      id="home"
      className="h-[530px] sm:h-[500px] md:h-[550px] xmd:h-[680px] xl:h-[880px] w-full relative flex items-center justify-center"
    >
      {/* Background Banner */}
      <img src={bannerLayer} alt="Banner" className="h-full w-full " />
      <img
        src={bannerDots}
        alt="Banner Dots"
        className="absolute top-0 left-0 h-full section-padding-x"
      />
      {/* Left & Right Content */}
      <div className="absolute inset-0 flex items-center justify-between section-padding-x pt-24">
        {/* Left Content */}
        <div className="text-white max-w-[978px] ">
          <div className="relative">
            <h1 className="text-[32px] xlg:text-[48px] xxl:text-[72px] font-bold">
              The Agentic AI Marketplace for Developers
            </h1>
            <img
              src={redLine}
              alt=""
              className="absolute hidden xxl:block top-24 left-36"
            />
          </div>
          <p className="text:sm md:text-base xl:text-lg w-full lg:w-[700px]  font-medium mt-4 md:mt-0">
            Build, integrate, and scale agentic AI solutions with ZERAH’s SDK &
            Enterprise API Marketplace—designed for developers, trusted by
            enterprises..
          </p>
          <div className="flex flex-col xxs:flex-row gap-4 md:gap-8 md:items-center mt-10 md:mt-20">
            <a href="#earlyaccess">
              <Button className="bg-white border border-white text-primary hover:bg-transparent hover:text-white  px-6 cursor-pointer duration-300  shadow-md hover:bg-gray-200 transition">
                Give me early access
              </Button>
            </a>
            <a href="#partnership">
              <Button className="border border-white text-white  hover:bg-white hover:text-primary duration-300 px-6  shadow-md hover:bg-gray-200 transition">
                I want to partner with you
              </Button>
            </a>
          </div>
        </div>

        {/* Right Content */}
        {/* Right Content */}
        {/* Right Content */}
        <div className="xl:absolute hidden lg:block  sm:bottom-[-20px] sm:right-12 xxl:right-28 text-white ">
          <img src={bannerRight} alt="Banner Right" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
