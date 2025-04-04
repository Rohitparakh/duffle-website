import React from 'react';
import animeboy from '../assets/animeboy.png';
import bluesign from '../assets/bluesign.png';
import orangesign from '../assets/orangesign.png';
import yellowAvatar from '../assets/yellowAvatar.png';
import nft from '../assets/nft.png';
import { ArrowRight } from 'lucide-react';

const NFTSection = () => {
  return (
    <div className='bg-[#ffd972]'>
    <section id="nfts" className="z-20 relative max-md:rounded-t-[50px] rounded-t-[100px] flex flex-col px-2 items-center pb-28 max-md;mt-24 w-full rounded-t-3xl z-50 bg-neutral-100 max-md:pb-24 max-md:max-w-full">
      {/* Heading Section */}
      <div className="w-full max-w-[1164px] px-6 max-md:max-w-full">
        <div className="flex justify-between items-center mt-12 max-md:mt-10">
          <div className="flex justify-between w-full items-center text-xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase">
              <div className="w-4 h-1 bg-sky-600 rounded" />
              <span>NFTs</span>
            </div>
            <span className="text-gray-900">/ 07</span>
          </div>
        </div>

        <div className="max-w-[40%] max-md:max-w-full">
          <h2 className="mt-6 text-5xl font-bold tracking-tighter leading-none text-gray-900 max-md:text-4xl">
            We have <img src={nft} alt="NFT" className="inline-block h-12 max-md:h-8" /> as well
          </h2>
          <p className="mt-4 text-base text-neutral-700 max-md:text-sm">
          Our NFT collection isn’t just about art, it’s about connection, fostering a community where creativity meets belonging.
          </p>
        </div>
        <div className="flex justify-end items-center mt-4 gap-2 text-red-400 max-md:justify-start">
          <p className="cursor-pointer hover:underline max-md:text-sm">See full collection</p>
          <ArrowRight className="w-4 h-4 max-md:w-3 max-md:h-3" />
        </div>
      </div>

      {/* NFT Images Grid with Fade Effect */}
      <div
        className="grid grid-cols-5 gap-2 mt-12 w-full max-w-[1164px] max-md:grid-cols-5 max-md:gap-1 relative"
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 0) 100%)',
        }}
      >
        {/* Column 1 - 1 Image */}
        <div className="flex justify-center">
          <img
            src={animeboy}
            alt="NFT 1"
            className="w-full max-w-[200px] md:max-w-[15vw] h-auto rounded-lg object-contain bg-transparent"
          />
        </div>

        {/* Column 2 - 2 Images */}
        <div className="flex flex-col gap-6 items-center max-md:gap-1">
          <img
            src={yellowAvatar}
            alt="NFT 3"
            className="w-full max-w-[200px] md:max-w-[15vw] h-auto rounded-lg object-contain bg-transparent"
          />
          <img
            src={animeboy}
            alt="NFT 2"
            className="w-full max-w-[200px] md:max-w-[15vw] h-auto rounded-lg object-contain bg-transparent"
          />
        </div>

        {/* Column 3 - 2 Images */}
        <div className="flex flex-col gap-6 items-center max-md:gap-1">
          <img
            src={orangesign}
            alt="NFT 6"
            className="w-full max-w-[200px] md:max-w-[15vw] h-auto rounded-lg object-contain bg-transparent"
          />
          <img
            src={bluesign}
            alt="NFT 5"
            className="w-full max-w-[200px] md:max-w-[15vw] h-auto rounded-lg object-contain bg-transparent"
          />
        </div>

        {/* Column 4 - 1 Image */}
        <div className="flex justify-center">
          <img
            src={animeboy}
            alt="NFT 4"
            className="w-full max-w-[200px] md:max-w-[15vw] h-auto rounded-lg object-contain bg-transparent"
          />
        </div>

        {/* Column 5 - 2 Images */}
        <div className="flex flex-col gap-6 items-center max-md:gap-1">
          <img
            src={bluesign}
            alt="NFT 5"
            className="w-full max-w-[200px] md:max-w-[15vw] h-auto rounded-lg object-contain bg-transparent"
          />
          <img
            src={orangesign}
            alt="NFT 6"
            className="w-full max-w-[200px] md:max-w-[15vw] h-auto rounded-lg object-contain bg-transparent"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default NFTSection;