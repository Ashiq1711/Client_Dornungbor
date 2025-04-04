import React, { useRef, useState } from "react";
import group from "@/assets/Images/group.png";
import Title from "../common/Title";

const InteractionData = [
  {
    id: 1,
    title: "Smarter Shopping with AI",
    video_url: "zP-9QKSqL9s", // Only the video ID
    description:
      "Enhance customer engagement with AI-powered conversational shopping, offering real-time recommendations and a truly personalized retail experience.",
  },
  {
    id: 2,
    title: "Effortless Flight Booking & Itineraries",
    video_url: "p2rj7FKrp14",
    description:
      "Revolutionize the travel experience with AI-driven flight booking and itinerary management, ensuring seamless and efficient travel planning for users.",
  },
  {
    id: 3,
    title: "Seamless Hotel Reservations",
    video_url: "nQWFzMvCfLE",
    description:
      "Streamline hotel reservations with instant availability, AI-driven recommendations, and frictionless booking experiences for travelers.",
  },
  {
    id: 4,
    title: "Hands-Free Dining Experience",
    video_url: "GfVd5x9W1Xc",
    description:
      "Empower customers with AI-powered voice-activated ordering, enabling a hands-free, seamless, and efficient dining experience.",
  },
];

const Interaction = () => {
  const [currentVideoId, setCurrentVideoId] = useState(
    InteractionData[0].video_url
  );
  const videoRef = useRef(null); // Reference to the video section

  const handleVideoChange = (videoId) => {
    setCurrentVideoId(videoId);

    // Scroll to video section smoothly
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top - 100; // Scroll 100px above the video
  
      window.scrollTo({ top: absoluteTop, behavior: 'smooth' });
    }
  };

  const embedUrl = `https://www.youtube.com/embed/${currentVideoId}`;
  return (
    <section id="interaction" className="bg-secondary relative ">
      <img
        src={group}
        alt="Group Overlay"
        className="absolute top-0 left-0 hidden h-full sm:block "
      />

      <div className="flex flex-col w-full items-center section-padding-x py-10 md:py-20 xmd:py-[120px] relative z-10">
        <Title
          title1="ZERAH"
          title2="Powers Frictionless"
          title3="Digital Interactions"
        />
        {/* Video Section */}
        <div ref={videoRef} className="my-10 relative w-full max-w-[1194px]">
          <iframe
            className="rounded-xl w-full h-[300px] sm:h-[400px] md:h-[500px] xmd:h-[680px]"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Interaction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6  xl:gap-12">
          {InteractionData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col p-4 sm:p-6 bg-white rounded-[12px] shadow-lg cursor-pointer ${
                currentVideoId === item.video_url
                  ? "border-2 border-primary"
                  : ""
              }`}
              onClick={() => handleVideoChange(item.video_url)}
            >
              <h1 className="md:text-2xl bg-primary rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center text-white font-bold">
                {item.id}
              </h1>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mt-4 sm:mt-5">
                {item.title}
              </h3>
              <p className="text-[#556987] mt-1 sm:mt-3 text-sm sm:text-base md:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interaction;
