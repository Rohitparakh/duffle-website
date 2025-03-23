import { useState } from "react";
import { Menu, X } from "lucide-react";
import duffleLogo from '../assets/duffleLogo.png';
import heroHand from '../assets/heroHand.png';

const NAV_ITEMS = [
  { name: "Features", url: "#features" },
  { name: "Statistics", url: "#statistics" },
  { name: "Positioning", url: "#positioning" },
  { name: "NFTs", url: "#nfts" },
  { name: "Lifestyle", url: "#lifestyle" },
  { name: "Don't miss out", url: "#dontMissOut" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center relative">

        <img src={heroHand} className="absolute z-[999] hidden md:block top-[-1rem] left-44 w-52" alt="" />
        {/* Logo */}
        <img src={duffleLogo} alt="Duffle Logo" className="h-12" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-600 border border-gray-900 px-5 py-2 rounded-3xl">
        <li  >
              <a  className="cursor-pointer text-orange-600 hover:text-black transition">About Us</a>
            </li>
          {NAV_ITEMS.map(({ name, url }) => (
            <li key={name} >
              <a href={url} className="cursor-pointer hover:text-black transition">{name}</a>
            </li>
          ))}
        </ul>

        {/* Launch App Button */}
        <button className="hidden md:block border border-gray-900 rounded-3xl text-black px-6 py-2 shadow shadow-orange-200 transition-all duration-300 active:scale-95">
          Launch App
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md p-4 flex flex-col">
          <ul className="flex flex-col space-y-4 text-gray-600">
            {NAV_ITEMS.map(({ name, url }) => (
              <li key={name} onClick={()=>setIsOpen(false)} className="justify-center flex">
                <a href={url} className="cursor-pointer hover:text-black transition">{name}</a>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
            Launch App
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
