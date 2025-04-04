import React from "react";
import amico from "@/assets/images/amico.png";
import Title from "../common/Title";

const Marketplace = [
  {
    id: 1,
    title: "Comprehensive Documentation",
    description:
      "Step-by-step instructions to help you integrate APIs quickly.",
  },
  {
    id: 2,
    title: "Interactive Sandbox",
    description: "Test and refine integrations in a live environment.",
  },
  {
    id: 3,
    title: "Developer Community ",
    description: "Connect with peers and experts for guidance and support.",
  },
];
const APIMarketplace = () => {
  return (
    <div id="marketplace" className="section-padding-x gap-8 py-10 md:py-20 xmd:py-[120px] flex flex-col lg:flex-row justify-between w-full">
      <div className="flex flex-col w-full lg:w-1/2">
    <Title title1="Access" title2="ZERAH SDK" title3="  & Enterprise API Marketplace" />
        <div className="mt-8 flex flex-col gap-6">
            {Marketplace.map((item) => (
          <div key={item.id} className="md:p-6 p-4 flex flex-col gap-2 sm:gap-3 bg-secondary rounded-[12px] hover:bg-primary duration-300 hover:text-white">
            <h1 className="lg:text-2xl text-lg md:text-[20px] font-semibold">{item.title}</h1>
            <p className="lg:text-lg text-sm sm:text-base  ">{item.description}</p>
          </div>
                
            ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
        <img src={amico} alt="" className=""/>
      </div>
    </div>
  );
};

export default APIMarketplace;
