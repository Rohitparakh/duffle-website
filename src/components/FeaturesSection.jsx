import React from 'react';
import us from '../assets/us.png';
import book from '../assets/book.png';
import bookTop from '../assets/bookTop.png';
import hand from '../assets/hand.png';
import globe from '../assets/globe.png';
import books from '../assets/books.png';
import elipse from '../assets/elipse.png';

const FeaturesSection = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-4 md:px-16  py-12 md:py-52 w-full bg-neutral-100">
      <div className="flex justify-between w-full items-center md:px-12 text-xs">
        <div className="flex gap-2.5 justify-center items-center py-1 mb-4 font-semibold tracking-wider leading-8 text-center text-orange-500 uppercase whitespace-nowrap rounded-[99px]">
          <div className="flex shrink-0 self-stretch my-auto w-4 bg-orange-500 rounded h-[5px]" />
          <span className="self-stretch my-auto">features</span>
        </div>
        <span className="text-gray-500">/ 03</span>
      </div>
      <div className="mb-0 w-full flex justify-center ">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-full ">
            <div className="flex flex-col relative items-start w-full">
              {/* Hand Image */}
              <img
                src={hand}
                alt="Decorative"
                className="object-contain absolute -left-[5vw]   w-[30vw] md:w-[15vw] lg:w-[15vw] top-[25vh] transform -translate-y-1/2"
              />

              {/* Heading */}
              <h2 className="font-bold tracking-tighter max-w-96 text-black leading-[8vw] md:leading-[64px] text-6xl md:text-7xl">
                What you get from
                <img
                  src={us}
                  alt="Decorative"
                  className="object-contain inline-block align-middle ml-3 w-[20vw] md:w-[70px] h-[10vh]  md:h-[10vh]"
                />
              </h2>



              {/* Grid of Features */}
              <div className="flex flex-col md:flex-row gap-8 mt-8 md:mt-16 w-full">

                <div className=' flex flex-col gap-4'>
                  {/* Feature 1 */}
                  <article className="rounded-3xl border border-gray-200 p-6 pl-24 md:pl-0 bg-white h-fit">
                    <h3 className="text-2xl font-semibold mb-4">
                      One-Click Cross-Chain Swaps
                    </h3>
                    <p className="text-neutral-600">
                      Swap any token across any chain in one click. No native gas or bridging, just press swap.
                    </p>
                    <img
                      src={bookTop}
                      alt="Cross-Chain Swap"
                      className="mt-6 w-full"
                    />
                  </article>
                  {/* Feature 3 */}
                  <article className="rounded-3xl border border-gray-200 p-6 bg-white h-fit">
                    <img
                      src={books}
                      alt="Cross-Chain Swap"
                      className="mt-6 w-full rounded-3xl"
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      DeFi-Powered Spending
                    </h3>
                    <p className="text-neutral-600">
                      Buying and spending crypto has never been easier. Instantly buy any token with Apply Pay or Google Pay, then spend them in the real world with a debit card. </p>
                  </article>

                </div>

                <div className='flex flex-col gap-4 '>
                  {/* Feature 2 */}
                  <article className="rounded-3xl border relative border-gray-200 p-6 pt-32 bg-white h-fit">
                    <img
                      src={globe}
                      alt="Cross-Chain Swap"
                      className=" w-full md:w-[20vw] rounded-3xl md:absolute md:bottom-48 md:right-1/3"
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      Fused Cross-Chain Balance
                    </h3>
                    <p className="text-neutral-600">
                      Unified Balance Spend: Combine all your USDT, USDC, and ETH across chains into a single, spendable balance. Withdraw $300 spread across Optimism, Solana, and Base to any chain—even Avalanche—seamlessly, no bridging required.
                    </p>
                  </article>



                  {/* Feature 4 */}
                  <article className="rounded-3xl border border-gray-200 p-6 bg-white h-fit">
                    <h3 className="text-2xl font-semibold mb-4">
                      Automated One-Click Yield
                    </h3>
                    <p className="text-neutral-600">
                      Make one-click deposits into yield protocols like Aave, Compound, and Ethena, with fully automated backend chain management and a unified dashboard for tracking yield across protocols and chains.
                    </p>
                    <img
                      src={elipse} alt="Yield Dashboard"
                      className="mt-6 w-full"
                    />
                  </article>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;