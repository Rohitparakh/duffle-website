import { useState } from "react";
import industryBg from "../assets/industryBg.png";
import backedRobo from "../assets/backedRobo.png";
import angels from "../assets/angels.png";
import star from "../assets/star.png";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Profile Imports
import upside from "../assets/profiles/oxUpside.jpg";
import SeiNetwork from "../assets/profiles/SeiNetwork.jpg";
import gmoneyNFT from "../assets/profiles/gmoneyNFT.jpg";
import dingalingts from "../assets/profiles/dingalingts.jpg";
import thebrianjung from "../assets/profiles/thebrianjung.jpg";
import VDiordiiev from "../assets/profiles/VDiordiiev.jpg";
import krybharat from "../assets/profiles/krybharat.jpg";
import KevinHenrikson from "../assets/profiles/KevinHenrikson.jpg";
import shanicucic96 from "../assets/profiles/shanicucic96.jpg";
import gmcapital_ from "../assets/profiles/gmcapital_.jpg";

// Profile Data
const profiles = [
    { image: upside, username: "0xUpside" },
    { image: SeiNetwork, username: "SeiNetwork" },
    { image: gmoneyNFT, username: "gmoneyNFT" },
    { image: dingalingts, username: "dingalingts" },
    { image: thebrianjung, username: "thebrianjung" },
    { image: VDiordiiev, username: "VDiordiiev" },
    { image: krybharat, username: "krybharat" },
    { image: KevinHenrikson, username: "KevinHenrikson" },
    { image: shanicucic96, username: "shanicucic96" },
    { image: gmcapital_, username: "gmcapital_" },
];

export default function BackedBy() {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: <img src={leftArrow} className="h-24 cursor-pointer" />,
        nextArrow: <img src={rightArrow} className="h-24 cursor-pointer" />,
        afterChange: (current) => setActiveIndex(current),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [currentIndex, setCurrentIndex] = useState(2);
    const totalCards = profiles.length;

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
    };

    return (
        <div id="dontMissOut" className="relative w-full flex flex-col items-center gap-10 py-12 overflow-hidden lg:overflow-auto">
            {/* 📌 Background Image */}
           

            {/* 📌 Header Section */}
            <div className="relative w-full max-md:max-w-[90vw] max-w-6xl border-[2px] bg-[#f5f5f5] border-black shadow-[0px_10px_0px_rgba(1,1,1,1)] p-6 rounded-3xl shadow-md text-center">
                <div className="flex justify-center w-full items-center md:px-12 text-xs">
                    <span></span>
                    <div className="flex gap-2.5 justify-center items-center py-1 mb-4 font-semibold tracking-wider leading-8 text-center text-blue-500 uppercase whitespace-nowrap rounded-[99px]">
                        <div className="flex shrink-0 self-stretch my-auto w-4 bg-blue-500 rounded h-[5px]" />
                        <span className="self-stretch my-auto">backed by</span>
                    </div>
                    {/* <span className="text-gray-500">/ {totalCards}</span> */}
                </div>
                <h2 className="text-3xl font-bold">The industry's best</h2>
                <img src={angels} alt="Decorative" className="object-contain inline-block ml-3 w-[150px] h-[40px]" />
                <p className="text-gray-500 mt-2 text-sm max-w-md m-auto">
                    Backed by industry-leading angel investors and one of the most sought-after products to gain early access to.
                </p>

                {/* 🌟 Star at Bottom-Right */}
                {/* <img src={star} alt="Star" className="absolute -bottom-12 -right-8 w-24 h-24 md:w-24 md:h-24" /> */}
            </div>

            {/* 📌 Carousel Section */}
            <div className="relative w-full max-md:max-w-[100vw] -top-[50px] h-[450px] flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0 w-full max-md:max-w-[100vw] h-full -z-10">
                <img
                    src={industryBg}
                    alt="Industry Background"
                    className="w-[90%] h-[80%] relative left-[5%] object-contain max-md:object-cover max-md:w-[120%] max-md:left-[0%]"
                />
                
            </div>
            <div className="absolute inset-0 w-full max-md:max-w-[90vw] h-full z-[99]">
            <img
                    src={backedRobo}
                    alt="Industry Background"
                    className="w-[100%] h-[80%] hidden xl:block relative left-[22%] object-contain "
                />
</div>
                {/* Profile Cards Carousel */}
                <div className="-top-[50px] -left-[25px] max-md:left-0 max-md:w-[70vw] relative w-full max-w-6xl">
                <Slider {...settings}>
                    {profiles.map((profile, index) => {
                        let classNames = "bg-white border-[3px] border-black rounded-[64px] max-md:rounded-[32px] p-2 flex max-md:min-w-[60vw] min-w-[320px] items-center transition-all duration-300 shadow-[5px_5px_0px_rgba(1,1,1,1)]";
                        
                        if (index === activeIndex) {
                            classNames += " scale-[1.1] shadow-xl z-[99] relative";
                        } else if (Math.abs(index - activeIndex) === 1) {
                            classNames += " scale-[1] opacity-90 blur-[6px]";
                        } else if (Math.abs(index - activeIndex) === 2) {
                            classNames += " scale-[0.9] opacity-80 blur-sm";
                        } else {
                            classNames += " scale-[0.8] opacity-60 blur-sm";
                        }
                        
                        return(
                        <div key={index} className="p-4">
                            <div className={classNames}>
                                <img
                                    src={profile.image}
                                    alt={profile.username}
                                    className="h-28 max-md:h-14 max-md:rounded-[24px] w-auto object-cover rounded-[48px] border-[4px] border-black"
                                />
                                <p className="pl-4 text-xl font-[500]">@{profile.username}</p>
                            </div>
                        </div>
)})}
                </Slider>





 {/* <Slider {...settings}>
                    {profiles.map((profile, index) => {
                        const isActive = index === currentIndex;
                        const position = index - currentIndex;
                        // if(position!=-2 || position!=-1 ||position!=0 ||position!=1 ||position!=2) return;
                        return (
                            <div className={`min-w-[300px] max-h-36 bg-white flex justify-center items-center p-4 rounded-[64px] border-[3px] border-black bg-white opacity-100
                                ${isActive ? "z-20 scale-110 opacity-100" : ""}
                                ${position === -2 ? "-translate-x-64 z-10 scale-[.8]" : ""}
                                ${position === -1 ? "-translate-x-32 z-10 scale-95" : ""}
                                ${position === 1 ? "translate-x-32 z-[12] scale-[.8]" : ""}
                                ${position === 2 ? "translate-x-64 z-10 scale-95" : ""}`}
                                >
                            <img
                                key={index}
                                src={profile.image}
                                alt={profile.username}
                                className={`relative transition-all duration-500 rounded-2xl h-28 w-auto object-cover rounded-[48px] border-[4px] border-black
                                    
                                `}
                            />
                            <p className="pl-3 text-xl font-[500]">@{profile.username}</p>
                            </div>
                        );
                    })}
                    </Slider> */}
                    
                    {/* Navigation Buttons */}
                    {/* <button
                        onClick={prevSlide}
                        className="absolute -translate-x-[28rem] text-2xl text-black p-2 rounded-full z-[99]"
                    >
                        <img src={leftArrow} className="max-h-12" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute translate-x-[29rem] text-2xl text-black p-2 rounded-full z-[99]"
                    >
                        <img src={rightArrow} className="max-h-12" />
                    </button> */}
                </div>
            </div>

            {/* 🌟 Star at Bottom-Left */}
            <img src={star} alt="Star" className="absolute bottom-0 left-48 w-24 h-24 md:w-24 md:h-24" />
        </div>
    );
}
