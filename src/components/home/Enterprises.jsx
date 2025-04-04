import React, { useState } from "react";
import EnterprisesImg from "@/assets/Images/EnterprisesImg.png";
import Title from "../common/Title";
import tiqIcon from "@/assets/Images/tiqIcon.png";

const Enterprises = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const accordionData = [
    {
      title: "Expand Reach",
      summary: "Serve millions of developers without overwhelming your infrastructure.",
      features: [
        "Serve millions of developers without overwhelming your infrastructure.",
        "Reach developers worldwide without compromising your business model.",
        "Faster developer onboarding without additional operational overhead.",
        "Serve more traffic at scale without additional infrastructure costs."
      ]
    },
    {
      title: "Monetize APIs",
      summary: "Flexible pricing and full control over API usage and billing.",
      features: [
        "Reduce time-to-market for new features and services.",
        "Leverage our global infrastructure for instant scalability.",
        "Eliminate costly infrastructure investments."
      ]
    },
    {
      title: "Secure APIs",
      summary: "Enterprise-grade security and compliance safeguards.",
      features: [
        "Built-in compliance with industry standards.",
        "End-to-end encryption for all data transfers.",
        "Regular security audits and penetration testing."
      ]
    },
    {
      title: "Gain Insights",
      summary: "Real-time analytics and governance tools for APIs.",
      features: [
        "No upfront costs or long-term commitments.",
        "Volume discounts for high-usage customers.",
        "Predictable billing with no hidden fees."
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <div id="enterprises" className="flex flex-col xmd:flex-row w-full items-start justify-between section-padding-x gap-5 py-10 md:py-20 xmd:py-[120px]">
      {/* Left Column - Accordions */}
      <div className="lg:w-1/2 w-full ">
        <div>
          <Title title1="Why" title2="Enterprises," title3="Choose ZERAH" />
          
          <div className="space-y-3 sm:space-y-4 mt-10">
            {accordionData.map((item, index) => (
              <section 
                key={index} 
                className="p-3 sm:p-4 lg:p-5 bg-white border border-[#58585883] rounded-lg overflow-hidden"
              >
                <div
                  className="cursor-pointer flex justify-between items-start"
                  onClick={() => toggleAccordion(index)}
                >
                  <div>
                    <h2 className=" text-lg xxs:text-xl md:text-2xl font-medium text-gray-800">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-gray-600">
                      {item.summary}
                    </p>
                  </div>
                  <svg
                    className={`h-6 w-6 text-[#01046B] transform transition-transform duration-300 mt-2 ${
                      expandedAccordion === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                  >
                    <path
                      d="M2.39839 4.46617H16.6276C16.7717 4.46663 16.9129 4.50636 17.0361 4.5811C17.1592 4.65584 17.2597 4.76275 17.3266 4.89033C17.3935 5.01791 17.4244 5.16132 17.4159 5.30513C17.4073 5.44895 17.3598 5.58771 17.2782 5.70649L10.1636 15.9832C9.86875 16.4093 9.15886 16.4093 8.86321 15.9832L1.74859 5.70649C1.66623 5.58796 1.61794 5.44912 1.60895 5.30507C1.59997 5.16102 1.63063 5.01726 1.69761 4.88941C1.76459 4.76156 1.86533 4.65451 1.98887 4.57989C2.11242 4.50528 2.25406 4.46595 2.39839 4.46617Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedAccordion === index
                      ? "max-h-[500px] opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-4  pb-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <img src={tiqIcon} alt="icon" className="w-5 h-5" />
                        <p className="text-gray-600 text-sm md:text-base">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Fixed Image */}
      <div className="lg:w-1/2 w-full sticky  ">
        
          <img 
            src={EnterprisesImg} 
            alt="Enterprises" 
            className="w-full h-auto object-cover "
          />
       
      </div>
    </div>
  );
};

export default Enterprises;