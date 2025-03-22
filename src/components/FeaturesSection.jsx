import React from 'react'
import us from '../assets/us.png'
import book from '../assets/book.png'
import bookTop from '../assets/bookTop.png'
import hand from '../assets/hand.png'
import globe from '../assets/globe.png'

const FeaturesSection = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-52 w-full bg-neutral-100 max-md:px-4 max-md:py-24 max-md:max-w-full">

      <div className="mb-0 w-full max-w-[1189px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:w-full">
            <div className="flex flex-col relative  items-start w-full max-md:mt-5 max-md:max-w-full">
              <img
                src={hand}
                alt="Decorative"
                className="object-contain absolute -left-48 w-[250px] md:w-[300px] lg:w-[350px] max-md:-left-8 max-lg:-left-12 top-1/2 transform -translate-y-1/2"
              />

              <div className="flex gap-2.5 justify-center items-center  py-1 mb-4 text-xs font-semibold tracking-wider leading-8 text-center text-orange-500 uppercase whitespace-nowrap rounded-[99px] md:px-8">
                <div className="flex shrink-0 self-stretch my-auto w-4 bg-orange-500 rounded h-[5px]" />
                <span className="self-stretch my-auto">features</span>
              </div>
              <h2 className="font-bold tracking-tighter max-w-96 text-black leading-[64px] text-7xl max-md:leading-10">
                What you get from
                <img
                  src={us}
                  alt="Decorative"
                  className="object-contain inline-block ml-3 w-[70px] h-[40px] "
                />
              </h2>

              <div className="grid grid-cols-2 gap-8 mt-16 max-md:grid-cols-1 w-full md:w-[80vw] ">

                <article className=" rounded-3xl  ">
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
                <article className=" rounded-3xl  ">
                <img
                    src={globe}
                    alt="Cross-Chain Swap"
                    className="mt-6 w-full rounded-3xl"
                  />
                  <h3 className="text-2xl font-semibold mb-4">
                    Fused Cross-Chain Balance
                  </h3>
                  <p className="text-neutral-600">
                  Unified Balance Spend: Combine all your USDT, USDC, and ETH across chains into a single, spendable balance. Withdraw $300 spread across Optimism, Solana, and Base to any chain—even Avalanche—seamlessly, no bridging required.
                  </p>
                </article>
                <article className=" rounded-3xl  ">
                  <img
                    src={book}
                    alt="Cross-Chain Swap"
                    className="mt-6 w-full rounded-3xl"
                  />

                </article>
                <article className=" rounded-3xl  ">
                  <h3 className="text-2xl font-semibold mb-4">
                    Automated One-Click Yield
                  </h3>
                  <p className="text-neutral-600">
                  Make one-click deposits into yield protocols like Aave, Compound, and Ethena, with fully automated backend chain management and a unified dashboard for tracking yield across protocols and chains.
                  </p>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/fdf58656f4d74f40b9bb2cf067df0bd0/6e9207db0dca390fc4a5140a1d1a052083c6891f?placeholderIfAbsent=true"
                    alt="Yield Dashboard"
                    className="mt-6 w-full"
                  />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
