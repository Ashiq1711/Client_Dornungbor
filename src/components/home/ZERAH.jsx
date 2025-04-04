import React from "react";
import compDesk from "../../assets/Images/compDesk.png";
import shadow from "../../assets/Images/shadow.png";
import Title from "../common/Title";
import Revenue from "../common/icons/Revenue";
import Development_icon from "../common/icons/Development_icon";
import Exprience_icon from "../common/icons/Exprience_icon";


const whatIsZERAH = [
  {
    id: 1,
    title: "Simplified Development",
    description:"Pre-built tools and SDKs for quick integration.",
    icon: <Development_icon />,
  },
  {
    id: 1,
    title: "Revenue Opportunities",
    description:"Enable your business to unlock new financial growth",
    icon: <Revenue />,
  },
  {
    id: 1,
    title: "Seamless Experiences",
    description:"Frictionless digital interactions for end users.",
    icon: <Exprience_icon />,
  },
]

const ZERAH = () => {
  return (
    <div id="about" className="flex relative flex-col lg:flex-row items-center justify-center lg:items-start section-padding-x gap-10 py-10 md:py-20 xmd:py-[120px]">
      {/* Left - Image */}

      <div className="w-full lg:w-1/2">
        <img src={compDesk} alt="Computer Desk" className="w-full h-auto sm:h-[400px] md:h-[500px] xmd:h-[680px] object-cover" />
      </div>

      {/* Right - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center  items-start text-left">
        <Title title1="What is" title2="ZERAH?" />
        <p className="text-sm sm:text-base xl:text-lg text-gray-600 mt-3">
        ZERAH is an AI-powered platform that simplifies agentic AI development for developers, unlocks new revenue 
        opportunities for enterprises, and delivers frictionless digital experiences for end users..
        </p>
       <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-6 w-full mt-6 sm:mt-8 ">
       {whatIsZERAH.map((item) => (
        <div key={item.id} className="group flex items-center p-3 md:p-4 xl:p-6 gap-4 border bg-secondary border-[#E9E9E9] rounded-[12px] hover:bg-primary hover:text-white duration-300 ease-out cursor-pointer">

          <p className=" p-2 rounded-full md:mr-4 bg-primary group-hover:bg-white duration-300 ">{item.icon}</p>
          <div className="flex flex-col gap-1 sm:gap-4">
            <h3 className="text-lgxl:text-[32px] font-semibold">{item.title}</h3>
            <p className="text-sm md:text-base">{item.description}</p>
          </div>
        </div>
      ))}
       </div>
      </div>
    </div>
  );
};

export default ZERAH;
