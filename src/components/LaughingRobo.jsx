import React from "react";
import desktop from "../assets/desktop.png";
import cultureDesktop from "../assets/cultureDesktop.png";
import Vector from "../assets/Vector.png";
import robo2 from "../assets/robo2.png";
import eyes from "../assets/eyes.png";
import temp from "../assets/temp.png";
import fingers from "../assets/fingers.png";
import iphone_15 from "../assets/iphone-15.png";

const LaughingRobo = () => {
  return (
    <div
      className="relative w-full min-h-screen mt-32 flex justify-center items-center bg-no-repeat bg-center bg-cover rounded-t-3xl"
      style={{ backgroundColor: "#ffd972" }}
    >
      {/* Background Vector */}
      <img
        src={Vector}
        alt=""
        className="absolute w-[600px] max-md:w-[300px] max-md:top-0 max-md:left-1/2 max-md:-translate-x-1/2"
      />

      {/* iPhone Image */}
      <img
        src={iphone_15}
        alt=""
        className="absolute w-[600px] bottom-72 right-32 max-md:w-[300px] max-md:bottom-48 max-md:right-1/2 max-md:translate-x-1/2"
      />

      {/* Robot Image */}
      <img
        src={robo2}
        alt=""
        className="absolute w-[400px] bottom-12 right-12 max-md:w-[200px] max-md:bottom-8 max-md:right-1/2 max-md:translate-x-1/2"
      />

      {/* Launch App Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 max-md:top-1/3 max-md:left-1/2 max-md:-translate-x-1/2">
        <div className="relative">
          <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-black">
            ✨
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-full text-lg shadow-lg border-2 border-white max-md:text-sm max-md:px-4 max-md:py-1">
            Launch App
          </button>
        </div>
      </div>

      {/* Left Text Content */}
      <div className="absolute top-16 left-10 text-black max-w-md max-md:top-8 max-md:left-5 max-md:max-w-[80%]">
        <p className="text-xs uppercase font-bold">// Don't Miss Out</p>
        <h2 className="text-lg font-medium mt-2 leading-snug max-md:text-sm">
          Crypto should move as fast as you do. You’re not just using digital
          assets—you’re integrating them seamlessly into your life.
        </h2>
      </div>

      {/* Bottom Left Section */}
      <div className="absolute bottom-16 left-10 max-md:bottom-8 max-md:left-5 max-md:max-w-[80%]">
        <p className="text-sm max-md:text-xs">Ready to experience the difference? 🚀</p>
        <h1 className="text-7xl font-bold leading-tight max-md:text-4xl">
          Powered by{" "}
          <img
            src={cultureDesktop}
            alt="culture"
            className="object-contain mt-3.5 max-w-full aspect-[4.27] w-[300px] max-md:w-[150px]"
          />
        </h1>
      </div>

      {/* Right Side Icons */}
      <div className="absolute top-16 right-10 flex flex-col gap-4 max-md:top-8 max-md:right-5 max-md:gap-2">
        <div className="bg-yellow-400 rounded-lg shadow-lg w-14 h-14 flex justify-center items-center max-md:w-10 max-md:h-10">
          <img src={eyes} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="bg-yellow-400 rounded-lg shadow-lg w-14 h-14 flex justify-center items-center max-md:w-10 max-md:h-10">
          <img src={fingers} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="bg-yellow-400 rounded-lg shadow-lg w-14 h-14 flex justify-center items-center max-md:w-10 max-md:h-10">
          <img src={temp} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default LaughingRobo;