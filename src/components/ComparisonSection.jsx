import us from '../assets/us.png';
import bigger_than_crypto from '../assets/bigger_than_crypto.png';
import duffleLogo from '../assets/duffleLogo.png';
import coinbase from '../assets/coinbase.png';
import robinhood from '../assets/robinhood.png';

export default function WhyUsSection() {
  return (
    <section id="positioning" className="flex flex-col px-40 pt-48 mb-96 w-full bg-neutral-100 max-md:px-5 max-md:pt-24">
      {/* Section Header */}
      <div className='flex justify-between w-full items-center  text-xs'>
        <div className="flex gap-2.5 justify-center items-center  py-1 mb-4 font-semibold tracking-wider leading-8 text-center text-orange-500 uppercase whitespace-nowrap rounded-[99px] ">
          <div className="flex shrink-0 self-stretch my-auto w-4 bg-orange-500 rounded h-[5px]" />
          <span className="self-stretch my-auto">Positioning</span>
        </div>
        <span className="text-gray-500">/ 05</span>
      </div>

      {/* Title & Description */}
      <h2 className="self-start mt-6 text-6xl font-bold tracking-tighter leading-none text-gray-900 flex items-center gap-2 max-md:text-4xl">
        Why
        <img
          src={us}
          alt="Decorative"
          className="object-contain z-10 aspect-[1.94] w-[91px] relative top-2"
        />
        ?
      </h2>

      <p className="mt-6 text-base leading-6 text-neutral-700 w-[537px] max-md:max-w-full max-md:w-full">
        In a crowded space, not all platforms are built the same. We prioritize
        security, efficiency, and real financial benefits that actually make a
        difference.
      </p>

      {/* Comparison Table */}
      <div className='overflow-x-hidden overflow-y-visible h-[1000px] pt-36 max-md:overflow-x-auto max-md:overflow-y-visible' style={{ scrollBehavior: 'smooth', scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
      <div className="">
  <div className=" border-[3px] border-white grid grid-flow-col auto-cols-fr gap-6 md:gap-3 text-center rounded-2xl max-md:text-sm min-w-[800px] ">
    {/* Empty Column for Alignment */}
    <div className="flex flex-col gap-20 items-center p-2 max-md:gap-10 max-md:p-2">
      <h5 className="text-xs font-semibold uppercase mt-12 mb-8 "></h5>
      <p className="relative z-20 text-xs font-semibold uppercase max-md:text-[10px]">
        YEILD
        <div className='absolute -bottom-[40px] left-[-20vw] h-[1px] w-[100vw] bg-gray-300 max-md:hidden'></div>
        </p>
      
      <p className="relative text-xs uppercase max-md:text-[10px]">SECURITY
      <div className='absolute -bottom-[45px] left-[-20vw] h-[1px] w-[100vw] bg-gray-300 max-md:hidden'></div>

      </p>
      <p className="relative text-xs uppercase max-md:text-[10px]">FEES
      <div className='absolute -bottom-[45px] left-[-20vw] h-[1px] w-[100vw] bg-gray-300 max-md:hidden'></div>

      </p>
      <p className="relative text-xs uppercase max-md:text-[10px]">WITHDRAWALS
      <div className='absolute -bottom-[45px] left-[-20vw] h-[1px] w-[100vw] bg-gray-300 max-md:hidden'></div>
      
      </p>
    </div>

    {/* Duttle (Highlighted) */}
    <div className="relative z-[999] flex flex-col gap-16 items-center bg-amber-500 rounded-2xl border-gray-900 border-[3px] shadow-[4px_4px_0px_rgba(0,0,0,1)] border-r h-[120%] pt-[7rem] -top-[10%]">
      <img
        src={duffleLogo}
        alt="Duttle"
        className="w-[150px]"
      />

      <div className="flex flex-col gap-16 mt-[15px]">
        <p className="text-xs md:font-bold uppercase mb-8 max-md:text-[10px] -mt-[15px]">6%-15%</p>
        <p className="text-xs md:font-bold uppercase mb-8 max-md:text-[10px] -mt-[15px]">Protected deposits</p>
        <p className="text-xs md:font-bold uppercase mb-8 max-md:text-[10px] -mt-[20px]">No fees</p>
        <p className="text-xs md:font-bold uppercase max-md:text-[10px] -mt-[20px]">Instant</p>
      </div>
      <img
        src={bigger_than_crypto}
        alt="Duffle"
        className="w-[20rem] relative bottom-8 max-md:w-[10rem] max-md:bottom-4 mt-16"
      />
    </div>

    {/* Coinbase */}
    <div className=" relative flex flex-col gap-20 items-center  p-4 max-md:gap-10 max-md:p-2">
      <div>
        <img src={coinbase} className="h-16" />
        <h3 className="text-xs font-semibold uppercase max-md:mt-6 max-md:mb-8">COINBASE</h3>
      <div className='absolute top-[120px] left-[-50vw] h-[1px] w-[100vw] bg-gray-300 max-md:hidden'></div>

      </div>
      <p className="text-xs font-semibold uppercase max-md:text-[10px] border-b border-gray-300">4%</p>
      <p className="text-xs uppercase max-md:text-[10px]">FDIC (BANK ONLY)</p>
      <p className="text-xs uppercase max-md:text-[10px]">No fees</p>
      <p className="text-xs uppercase max-md:text-[10px]">2-3 Days</p>
    </div>

    {/* Robinhood */}
    <div className="flex flex-col gap-20 items-center  p-4 max-md:gap-10 max-md:p-2">
      <div>
        <img src={robinhood} className="h-16" />
        <h3 className="text-xs font-semibold uppercase max-md:mt-6 max-md:mb-8">ROBINHOOD</h3>
      </div>
      <p className="text-xs font-semibold uppercase max-md:text-[10px]">4%</p>
      <p className="text-xs uppercase max-md:text-[10px]">FDIC (BANK ONLY)</p>
      <p className="text-xs uppercase max-md:text-[10px]">No fees</p>
      <p className="text-xs uppercase max-md:text-[10px]">2-3 Days</p>
    </div>

    {/* Other DeFi */}
    <div className="flex flex-col gap-20 items-center p-4 max-md:gap-10 max-md:p-2 mt-4">
      <h3 className="text-xs font-semibold uppercase mt-12 max-md:mb-8">OTHER DEFI</h3>
      <p className="text-xs font-semibold uppercase max-md:text-[10px]">6%-20%+</p>
      <p className="text-xs uppercase max-md:text-[10px]">No protection</p>
      <p className="text-xs uppercase max-md:text-[10px]">No fees</p>
      <p className="text-xs uppercase max-md:text-[10px]">Mixed</p>
    </div>
  </div>
      </div>
      </div>


    </section>
  );
}