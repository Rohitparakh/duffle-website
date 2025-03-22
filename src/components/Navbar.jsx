import { useState } from "react";
import { Menu, X } from "lucide-react";
import duffleLogo from '../assets/duffleLogo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={duffleLogo} alt="Duffle Logo" className="h-12" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600">
          {["Lifestyle", "Features", "Statistics", "Don't miss out", "Positioning", "NFTs"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-black transition">{item}</li>
          ))}
        </ul>

        {/* Launch App Button */}
        <button className="hidden md:block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition">
          Launch App
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md p-4 flex ">
          <ul className="flex flex-col space-y-4 text-gray-600">
            {["Lifestyle", "Features", "Statistics", "Don't miss out", "Positioning", "NFTs"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-black transition">{item}</li>
            ))}
          </ul>
          <button className="mt-4  w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
            Launch App
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
