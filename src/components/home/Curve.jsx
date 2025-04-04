import React from "react";
import AI from "../common/icons/AI";
import Industry_icon from "../common/icons/Industry_icon";
import Expert from "../common/icons/Expert";
import Title from "../common/Title";
const CirveData=[
  {
    id: 1,
    icon: <AI />,
    title: "AI in Development",
    description: "Best Practices & Innovations shaping AI development.",
  },
  {
    id: 2,
    icon: <Industry_icon />,
    title: "Industry Use Cases",
    description: " Discover how AI is transforming Businesses.",
  },
  {
    id: 3,
    icon: <Expert />,
    title: "Expert Insights",
    description: "Thought leadership from ZERAH engineers",
  },
]
const Curve = () => {
  return (
    <section id="store" className="bg-secondary py-0 sm:py-10 xl:py-20">
      <div className="section-padding-x  py-8 xl:py-16 flex flex-col items-center">
      <Title title1="Stay Ahead of the" title2="Curve" title3="  with ZERAH" />
        <div className=" mt-10 md:mt-20 w-full grid grid-cols-1 sm:grid-cols-2 xmd:grid-cols-3 gap-4 md:gap-6">
          {
            CirveData.map((item) => (
              <div
                key={item.id}
                className="group px-4 text-center xmd:px-12 py-6 xmd:py-16 bg-white rounded-lg flex flex-col items-center  hover:bg-primary duration-300 cursor-pointer hover:text-white"
              >
                <p>{item.icon}</p>
                <h1 className="text-[20px] sm:text-[24px] xl:text-[32px] font-bold mt-4 md:mt-10">{item.title}</h1>
                <p className=" text-sm sm:text-base md:mt-4 mt-2">{item.description}</p>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default Curve;
