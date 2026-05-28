
import Container from '../Common/Container'
import Button from '../Common/Button'
import Images from '../Common/Images'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const NavBAr = () => {
const [show,setShow] = useState(false)
const handleShow = () => {
  setShow(!show)
}
const [showNavbar, setShowNavbar] = useState(false);


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
  <nav   className={`w-full z-50 transition-all duration-500 bg-gradient-to-r from-[#022c22] via-[#064e3b] to-[#0f766e] text-white shadow-xl ${
    showNavbar
      ? "fixed top-0 left-0 animate-slideDown"
      : "relative "
  }`}>
  <Container className="  px-4 relative">
    
    <div className="flex items-center justify-between py-6 ">
      
      {/* Logo */}
      <div>
        <Images
          img="https://neeshorgo.com.bd/wp-content/uploads/2020/11/Neeshorgo-Logo.png"
          alt="logo"
          className="w-50 pl-3 md:pl-0 md:w-50 h-auto object-cover"
        />
      </div>

      {/* Menu */}
      <ul className="hidden lg:flex items-center gap-7 uppercase text-sm tracking-[2px]">
        <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">
         <Link to="/rooms">Rooms</Link>
        </li>

       <li className="relative group list-none">
  
  <span className="hover:text-[#5eead4] duration-300 cursor-pointer text-[18px] uppercase">
    Amenities
  </span>

  {/* Dropdown */}
  <div className="absolute top-full left-0 mt-4 w-45 bg-[#0d8367] rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-[#5eead4]/20">
    
    <ul className="flex flex-col py-3">
      
      <li className="px-5 py-3 hover:bg-[#064e3b] hover:text-[#5eead4] text-[16px] uppercase duration-300 cursor-pointer">
        Juice Bar
      </li>

      <li className="px-5 py-3 hover:bg-[#064e3b] hover:text-[#5eead4] text-[16px] uppercase duration-300 cursor-pointer">
        Restaurant
      </li>

      <li className="px-5 py-3 hover:bg-[#064e3b] hover:text-[#5eead4] text-[16px] uppercase duration-300 cursor-pointer">
        Facilities
      </li>

    </ul>
  </div>
</li>
        <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">
          About
        </li>

        <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">
          Contact
        </li>

        <li className="hover:text-[#5eead4] text-[18px] duration-300 cursor-pointer">
          Login
        </li>
      </ul>

      {/* Button */}
      <div className="hidden md:block">
        <Button
          Text="BOOK NOW"
          className="bg-[#99f6e4] text-[#022c22] font-semibold px-5 py-2 rounded-lg hover:bg-[#5eead4] duration-300 shadow-lg"
        />
      </div>

     
      <div onClick={handleShow} className="lg:hidden pr-3 md:pr-0 text-3xl cursor-pointer">
        <FaBars/>
      </div>



    </div>

{/* Mobile Menu */}
<div
  className={`lg:hidden fixed top-0 ${
    show ? "right-0" : "-right-full"
  } w-[75%] h-screen bg-[#AD9044] transition-all duration-500 z-50 shadow-2xl`}
>
  
  {/* Cross Button */}
  <div className="flex justify-end p-5">
    <button
      onClick={() => setShow(false)}
      className="text-white text-4xl hover:rotate-90 duration-300"
    >
      <RxCross2 />
    </button>
  </div>

  {/* Menu Items */}
  <ul className="flex flex-col items-center gap-6 py-10 uppercase tracking-wider">
    
    <li className="hover:text-[#5eead4] text-[25px] text-uppercase duration-300 cursor-pointer">
      Home
    </li>

    <li className="hover:text-[#5eead4] text-uppercase  text-[25px] duration-300 cursor-pointer">
      Rooms
    </li>

    <li className="hover:text-[#5eead4] text-uppercase  text-[25px] duration-300 cursor-pointer">
      Amenities
    </li>
    <li className="hover:text-[#5eead4] text-uppercase  text-[16px] duration-300 cursor-pointer">
     JUICE BAR
    </li>
    <li className="hover:text-[#5eead4] text-uppercase  text-[16px] duration-300 cursor-pointer">
     RESTAURANT
    </li>
    <li className="hover:text-[#5eead4]  text-uppercase text-[16px] duration-300 cursor-pointer">
      FACILITIES
    </li>

    <li className="hover:text-[#5eead4] text-uppercase  text-[25px] duration-300 cursor-pointer">
      About
    </li>

    <li className="hover:text-[#5eead4] text-uppercase text-[25px] duration-300 cursor-pointer">
      Contact
    </li>

    <li className="hover:text-[#5eead4] text-uppercase text-[25px] duration-300 cursor-pointer">
      Login
    </li>
  </ul>

  <Button
          Text="BOOK NOW"
          className="bg-[#99f6e4] ml-[34%] inline-block text-[#022c22] font-semibold px-5 py-2 rounded-lg hover:bg-[#5eead4] duration-300 shadow-lg"
        />

</div>
  </Container>
</nav>
  )
}

export default NavBAr