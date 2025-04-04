import React from "react";
import SDK_Icon from "../common/icons/SDK_Icon";
import ApiI_Icon from "../common/icons/ApiI_Icon";
import Document_Icon from "../common/icons/Document_Icon";
import Support_Icon from "../common/icons/Support_Icon";
import Title from "../common/Title";

const Developers = [
  {
    id: 1,
    icon: <SDK_Icon />,
    title: "ZERAH SDK",
    description: "Pre-built tools for fast, scalable integration.",
  },
  {
    id: 2,
    icon: <ApiI_Icon />,
    title: "Enterprise API Marketplace",
    description:
      " Access agentic AI enterprise APIs across multiple verticals.",
  },
  {
    id: 3,
    icon: <Document_Icon />,
    title: "Developer Documentation",
    description: "Comprehensive guides to help developers integrate quickly.",
  },
  {
    id: 4,
    icon: <Support_Icon />,
    title: "Community & Support",
    description: "Join a growing community for collaboration and expert help.",
  },
];
const ForDevelopers = () => {
  return (
    <section id="developers" className="bg-secondary">
      <div className="flex flex-col items-center justify-center text-center py-10 md:py-20 xmd:py-[120px] section-padding-x">
        <div className="max-w-[725px] ">
          <Title title1="For" title2="Developers," title3="By Developers" />
          <p className="text-sm sm:text-base xl:text-lg text-gray mt-4">
            ZERAH provides the tools and infrastructure developers need to
            build, integrate, and scale agentic AI solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-8 my-6 md:my-[60px]">
          {Developers.map((item) => (
            <div
              key={item.id}
              className="group svg-hover flex flex-col items-center justify-center gap-4 hover:shadow-md hover:bg-primary duration-300 md:px-12 px-8 py-10 sm:py-12 md:py-16 text-[#333333]  cursor-pointer hover:text-white bg-white rounded-lg"
            >
              <p>{item.icon}</p>
              <h3 className="text-[20px] sm:text-[24px] xl:text-[32px] font-bold">{item.title}</h3>
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForDevelopers;
