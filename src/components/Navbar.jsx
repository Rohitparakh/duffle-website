import { useState } from "react";
import { Menu, X } from "lucide-react";
import duffleLogo from "../assets/duffleLogo.png";
import heroHand from "../assets/heroHand.png";
import aboutHand from "../assets/aboutHand.png";
import flag from "../assets/flag.png";
import flagSecondary from "../assets/flagSecondary.png";

const NAV_ITEMS = [
  { name: "About Us", url: "#about" },
  { name: "Features", url: "#features" },
  { name: "Statistics", url: "#statistics" },
  { name: "Positioning", url: "#positioning" },
  { name: "NFTs", url: "#nfts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("About Us");

  return (
    <nav className="bg-gray-100 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center relative">
        <img
          src={heroHand}
          className="absolute z-[999] hidden md:block top-[-1rem] left-44 w-52"
          alt=""
        />
        {/* Logo */}
        <img src={duffleLogo} alt="Duffle Logo" className="h-12" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-600 border border-gray-900 px-5 py-2 rounded-3xl">
          {NAV_ITEMS.map(({ name, url }) => (
            <li key={name} onClick={() => setActiveItem(name)}>
              <a
                href={url}
                className={`cursor-pointer flex items-center gap-1 transition ${
                  activeItem === name ? "text-orange-600" : "hover:text-black"
                }`}
              >
                { activeItem === name && (
                  <img src={aboutHand} alt="about" className="h-4" />
                )}
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Launch App Button */}
        <button className="hidden md:flex items-center justify-center border border-gray-900 rounded-3xl text-black px-6 py-2 shadow shadow-orange-200 transition-all duration-300 active:scale-95">
          Take Flight <img src={flag} alt="flag" className="h-8" />
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
              <li key={name} onClick={() => { setIsOpen(false); setActiveItem(name); }} className="justify-center flex">
                <a
                  href={url}
                  className={`cursor-pointer transition ${
                    activeItem === name ? "text-orange-600" : "hover:text-black"
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <button className="flex items-center justify-center mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
            Take Flight <img src={flagSecondary} alt="flag" className="h-8" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
