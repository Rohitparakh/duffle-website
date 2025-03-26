import footerRobo from '../assets/footerRobo.png';
import duffleLogo from '../assets/duffleLogo.png';
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
    return (
        <footer className="w-full bg-[#F8F8F8] py-10 flex justify-center items-center border-t-2 border-[#101321] rounded-[5rem] relative mt-36">
            <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-around px-6 md:px-12">

                {/* Left: Image */}
                <div className="flex items-center mb-8 md:mb-0">
                    <img
                        src={footerRobo}
                        alt="duffle"
                        className="h-auto  max-h-[200px] lg:max-h-[300px] max-w-[380px] md:max-w-[300px] absolute left-[33%] lg:left-[20%] top-[-20%] "
                    />
                </div>

                {/* Center: Logo and CTA Section */}
                <div className="flex flex-col items-center space-y-6 md:space-y-8 mt-20 lg:mt-0">
                    {/* Logo */}
                    <img
                        src={duffleLogo}
                        alt="Duffle Logo"
                        className="w-[250px] sm:w-[350px] md:max-w-[350px]"
                    />

                    {/* CTA Section */}
                    <div className="flex md:flex-row flex-col md:gap-10 gap-5 items-center text-center space-y-4">
                        <div className='flex flex-col gap-2'>
                        <p className="text-gray-900 font-medium text-lg md:text-xl">
                            Ready to experience the difference? 🚀
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 text-gray-700">
                            <span className="text-sm">Stay up to date</span>
                            <a href="https://x.com/dufflelabs" target='_blank' className="text-xl hover:text-black">
                                    <img src={twitter} height={26} width={26}/>
                                </a>
                                <a href="#" className="text-xl hover:text-black">
                                <img src={discord} height={26} width={26}/>
                                </a>
                        </div>

                        </div>

                        {/* Launch App Button */}
                        <button className="mt-3 bg-black text-white py-2 px-6 rounded-full text-sm md:text-base">
                            Take Flight
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;