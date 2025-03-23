import React from 'react';
import us from '../assets/us.png';
import book from '../assets/book.png';
import book2 from '../assets/book2.png';
import bookTop from '../assets/bookTop.png';
import hand from '../assets/hand.png';
import globe from '../assets/coin.png';
import books from '../assets/books.png';
import elipse from '../assets/elipse.png';
import yields from '../assets/yield.png';

const FeaturesSection = () => {
  return (
    <section id="features" className="flex overflow-hidden flex-col justify-center items-center px-4 md:px-16  py-12 md:py-52 w-full bg-neutral-100">
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
                className="-translate-x-[40%] object-contain absolute -left-[5vw] z-[999]  w-[30vw] md:w-[15vw] lg:w-[15vw] top-[25vh] transform -translate-y-1/2"
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

                <div className=' flex flex-col gap-16'>
                  {/* Feature 1 */}
                  <div className="max-w-[600px] rounded-3xl relative min-h-56 border border-gray-200 p-6  bg-white h-fit">
                    <div className='flex flex-col gap-1 items-end justify-center w-[90%] ml-auto'>
                    <h3 className="text-2xl font-semibold mb-4 text-right">
                      One-Click Cross-Chain Swaps
                    </h3>
                    <p className="text-[#535353] font-light">
                      Swap any token across any chain in one click. <br /> No native gas or bridging, just press swap.
                    </p>
                    </div>
                    <img
                      src={bookTop}
                      alt="Cross-Chain Swap"
                      className=" absolute bottom-[-3rem] w-[30rem] bg-white "
                    />
                  </div>
                  {/* Feature 3 */}
                  <article className="max-w-[600px] rounded-3xl flex flex-col justify-end border min-h-96 relative border-gray-200 p-6 bg-white h-fit">
                    <img
                      src={book2}
                      alt="Cross-Chain Swap"
                      className="mt-6 w-[28rem] rounded-3xl absolute top-[-7rem] right-0 "
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      DeFi-Powered Spending
                    </h3>
                    <p className="text-[#535353] font-light">
                      Buying and spending crypto has never been easier. Instantly buy any token with Apply Pay or Google Pay, then spend them in the real world with a debit card. </p>
                  </article>

                </div>

                <div className='flex flex-col gap-4 -top-28 relative '>
                  {/* Feature 2 */}
                  <article className="max-w-[600px] rounded-3xl border relative border-gray-200 p-6 md:pt-32 bg-white h-fit">
                    <img
                      src={globe}
                      alt="Cross-Chain Swap"
                      className=" w-[20rem]  md:absolute md:-top-[60%] right-0 "
                    />
                    <h3 className="text-2xl font-semibold mb-4">
                      Fused Cross-Chain Balance
                    </h3>
                    <p className="text-[#535353] font-light">
                      Unified Balance Spend: Combine all your USDT, USDC, and ETH across chains into a single, spendable balance. Withdraw $300 spread across Optimism, Solana, and Base to any chain—even Avalanche—seamlessly, no bridging required.
                    </p>
                  </article>



                  {/* Feature 4 */}
                  <article className="max-w-[600px] rounded-3xl border flex md:flex-row flex-col min-h-96 items-center gap-2 relative border-gray-200 p-6 bg-white h-fit">
                    <div className=' flex flex-col gap-2 md:w-[50%]'>
<h3 className="text-3xl font-semibold mb-4">
                      Automated One-Click Yield
                    </h3>
                    <p className="text-[#535353] font-light ">
                      Make one-click deposits into yield protocols like Aave, Compound, and Ethena, with fully automated backend chain management and a unified dashboard for tracking yield across protocols and chains.
                    </p>
                    </div>
                    
                    <img
                      src={yields} alt="Yield Dashboard"
                      className=" w-[15rem] rounded-3xl md:absolute top-[-5rem] right-16 "
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