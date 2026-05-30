
import Container from '../Common/Container'
import Button from '../Common/Button'
import Images from '../Common/Images'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const NavBAr = () => {
  const [show, setShow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className={`w-full z-40 transition-all duration-500 bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#0f766e] text-white shadow-xl ${
        showNavbar ? "fixed top-0 left-0 animate-slideDown" : "relative"
      }`}>
        <Container className="px-4">
          <div className="flex items-center justify-between py-6 md:py-6">
            
            {/* Logo */}
            <div className="flex items-center">
              <Images
                img="https://neeshorgo.com.bd/wp-content/uploads/2020/11/Neeshorgo-Logo.png"
                alt="logo"
                className="w-36 md:w-44 h-auto object-contain pl-3 md:pl-0"
              />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-7 uppercase text-sm tracking-[2px]">
              <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">
                <Link to="/rooms">Rooms</Link>
              </li>
              
              {/* Dropdown */}
              <li className="relative group list-none">
                <Link to="/amenities"><span className="hover:text-[#5eead4] duration-300 cursor-pointer text-[18px] uppercase">
                  Amenities
                </span>
                </Link>
                <div className="absolute top-full left-0 mt-4 w-48 bg-[#0d8367] rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[#5eead4]/20">
                  <ul className="flex flex-col py-3">
                    <Link to="/juice"><li className="px-5 py-3 hover:bg-[#064e3b] hover:text-[#5eead4] text-[16px] uppercase duration-300 cursor-pointer">Juice Bar</li></Link>
                    <Link to="/restaurants"><li className="px-5 py-3 hover:bg-[#064e3b] hover:text-[#5eead4] text-[16px] uppercase duration-300 cursor-pointer">Restaurant</li></Link>
                    <Link to="/facilities"><li className="px-5 py-3 hover:bg-[#064e3b] hover:text-[#5eead4] text-[16px] uppercase duration-300 cursor-pointer">Facilities</li></Link>
                  </ul>
                </div>
              </li>

              <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">About</li>
              <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">Contact</li>
              <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">Login</li>
            </ul>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <Button
                Text="BOOK NOW"
                className="bg-[#99f6e4] text-[#022c22] font-semibold px-5 py-2 rounded-lg hover:bg-[#5eead4] duration-300 shadow-lg"
              />
            </div>

            {/* Hamburger Icon */}
            <div onClick={handleShow} className="lg:hidden pr-3 text-2xl md:text-3xl cursor-pointer">
              <FaBars />
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu - Moved Outside Main Nav to Prevent Overflow Issues */}
      <div className={`lg:hidden fixed top-0 bottom-0 right-0 w-[75%] max-w-[300px] h-screen bg-[#AD9044] transition-transform duration-500 z-50 shadow-2xl flex flex-col justify-between py-10 ${
        show ? "translate-x-0" : "translate-x-full"
      }`}>
        <div>
          {/* Close Button */}
          <div className="flex justify-end px-6">
            <button
              onClick={() => setShow(false)}
              className="text-white text-3xl hover:rotate-90 duration-300"
            >
              <RxCross2 />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-center gap-5 mt-6 uppercase tracking-wider overflow-y-auto max-h-[70vh] px-4">
           <Link to="/"> <li className="hover:text-[#5eead4] text-[20px] duration-300 cursor-pointer">Home</li></Link>
           <Link to="/rooms"> <li className="hover:text-[#5eead4] text-[20px] duration-300 cursor-pointer">Rooms</li></Link>
            <Link to="/amenities"><li className="hover:text-[#5eead4] text-[20px] duration-300 cursor-pointer font-bold">Amenities</li></Link>
           <Link to="/juice"> <li className="hover:text-[#5eead4] text-[15px] pl-4 duration-300 cursor-pointer text-white/80">Juice Bar</li></Link>
           <Link to="/restaurants"> <li className="hover:text-[#5eead4] text-[15px] pl-4 duration-300 cursor-pointer text-white/80">Restaurant</li></Link>
           <Link to="/facilities"> <li className="hover:text-[#5eead4] text-[15px] pl-4 duration-300 cursor-pointer text-white/80">Facilities</li></Link>
            <li className="hover:text-[#5eead4] text-[20px] duration-300 cursor-pointer"><Link to="/about">About</Link></li>
            <li className="hover:text-[#5eead4] text-[20px] duration-300 cursor-pointer"><Link to="/contact">Contact</Link></li>
            <li className="hover:text-[#5eead4] text-[20px] duration-300 cursor-pointer"><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Mobile Button */}
        <div className="flex justify-center px-6">
          <Button
            Text="BOOK NOW"
            className="bg-[#99f6e4] text-[#022c22] font-semibold px-6 py-3 rounded-lg hover:bg-[#5eead4] duration-300 shadow-lg w-full text-center"
          />
        </div>
      </div>

      {/* Dark Overlay when mobile menu is open */}
      {show && (
        <div 
          onClick={() => setShow(false)} 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}
    </>
  );
};

export default NavBAr;