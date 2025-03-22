import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import industryBg from '../assets/industryBg.png'
import twitterCard from '../assets/twitterCard.png'
import twitterCardBlur from '../assets/twitterCardBlur.png'
import angels from '../assets/angels.png'
import star from '../assets/star.png'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'


export default function BackedBy() {
    const [currentIndex, setCurrentIndex] = useState(2);
    const totalCards = 5;

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full flex flex-col items-center gap-10 py-12 overflow-hidden lg:overflow-auto">
            {/* 📌 Background Image (Covers Entire Section) */}
            <div className="absolute inset-0 w-full h-full -z-10">
                <img
                    src={industryBg}
                    alt="Industry Background"
                    className="w-[90%] h-[80%] relative left-[5%] object-cover border-black border-[3px] rounded-3xl"
                />
            </div>

            {/* 📌 Header Section (Now inside the background) */}
            <div className="relative w-full max-w-3xl bg-white/90 p-6 rounded-3xl shadow-md text-center">
                <div className='flex justify-between w-full items-center md:px-12 text-xs'>
                    <span></span>
                    <div className="flex gap-2.5 justify-center items-center  py-1 mb-4 font-semibold tracking-wider leading-8 text-center text-blue-500 uppercase whitespace-nowrap rounded-[99px] ">
                        <div className="flex shrink-0 self-stretch my-auto w-4 bg-blue-500 rounded h-[5px]" />
                        <span className="self-stretch my-auto">backed by</span>
                    </div>
                    <span className="text-gray-500">/ 04</span>
                </div>
                <h2 className="text-3xl font-bold">The industries best</h2>
                <img
                    src={angels}
                    alt="Decorative"
                    className="object-contain inline-block ml-3 w-[150px] h-[40px] "
                />
                <p className="text-gray-500 mt-2 text-sm">
                    Backed by industries' leading angel investors and one of the
                    most sought-after products to gain early access to.
                </p>

                {/* 🌟 Star at Bottom-Right of Header */}
                <img
                    src={star}
                    alt="Star"
                    className="absolute -bottom-12 -right-8 w-24 h-24 md:w-24 md:h-24"
                />
            </div>

            {/* 📌 Carousel Section */}
            <div className="relative w-full h-[450px] flex justify-center items-center ">
                {/* Stacked Twitter Cards */}
                <div className="relative flex justify-center items-center w-full h-[75%]">
                    {[...Array(totalCards)].map((_, index) => {
                        const isActive = index === currentIndex;
                        const position = index - currentIndex;

                        return (
                            <img
                                key={index}
                                src={isActive ? twitterCard : twitterCardBlur}
                                alt={`Twitter Card ${index + 1}`}
                                className={`absolute transition-all duration-500 rounded-2xl w-[380px] h-[500px]
                  ${isActive ? "z-20 scale-100 opacity-100" : "z-10 scale-95 opacity-75"}
                  ${position === -2 ? "-translate-x-32 opacity-50" : ""}
                  ${position === -1 ? "-translate-x-16 opacity-75" : ""}
                  ${position === 1 ? "translate-x-16 opacity-75" : ""}
                  ${position === 2 ? "translate-x-32 opacity-50" : ""}
                `}
                            />
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-5 text-2xl text-black p-2 rounded-full"
                >
                    {/* <FaArrowLeft /> */}
                    <img src={leftArrow} className="max-h-12" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-5 text-2xl text-black p-2 rounded-full"
                >
                    {/* <FaArrowRight /> */}
                    <img src={rightArrow} className="max-h-12" />
                </button>
            </div>

            {/* 🌟 Star at Bottom-Left of the Component */}
            <img
                src={star}
                alt="Star"
                className="absolute bottom-0 left-48 w-24 h-24 md:w-24 md:h-24"
            />
        </div>
    );
}
