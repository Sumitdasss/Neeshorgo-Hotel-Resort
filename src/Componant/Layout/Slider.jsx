import  { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img11 from "/src/assets/unnamed.jpg";
import Slider from "react-slick";
import Button from "/src/Componant/Common/Button";
import { Link } from 'react-router-dom';
import gsap from "gsap";

const SlickSlider = Slider.default ? Slider.default : Slider;

const Sliderx = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true, 
    beforeChange: (current, next) => setCurrentSlide(next),
  };

useEffect(() => {

  let ctx = gsap.context(() => {
    
   
    const activeSlide = containerRef.current.querySelector(".slick-active");

    if (activeSlide) {
      const tl = gsap.timeline();

      tl.fromTo(
        activeSlide.querySelector(".small-title"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );


      tl.fromTo(
        activeSlide.querySelector(".main-heading"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.5"
      );

      tl.fromTo(
        activeSlide.querySelector(".btn-anim"),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      );

   
      gsap.fromTo(
        activeSlide.querySelector(".bg-img"),
        { scale: 1 },
        { scale: 1.1, duration: 6, ease: "linear" }
      );
    }
  }, containerRef);

  return () => ctx.revert();
}, [currentSlide]);

  return (
    <div ref={containerRef} className="slider-container overflow-hidden">
      <SlickSlider {...settings}>
        
        {/* Slide 1 */}
        <div className="relative w-full h-[780px] overflow-hidden">
          <img src={img11} alt="restaurant" className="bg-img w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="small-title uppercase font-medium tracking-[3px] text-lg border-b-2 border-white pb-2 mb-6">
              Welcome To
            </p>
            <h1 className="main-heading text-3xl md:text-7xl font-bold mb-8 leading-tight max-w-4xl">
            Neeshorgo Hotel & Resort
            </h1>
            <Link to="/rooms" className="btn-anim"> 
              <Button Text="Book Now" className="border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black duration-300" />
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[780px] overflow-hidden">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/slider/cache/c696238ca5f3212bfeb9dc27c369123c/IMG_0336-f-Edit-3.jpg" className="bg-img w-full h-full object-cover" alt="marine" />
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="small-title uppercase font-medium tracking-[3px] text-lg border-b-2 border-white pb-2 mb-6">
              Marine Drive Restaurant
            </p>
            <h1 className="main-heading text-3xl md:text-7xl font-bold mb-8 leading-tight max-w-4xl">
              Enjoy breakfast, lunch and dinner
            </h1>
            <Link to="/restaurants" className="btn-anim"> 
              <Button Text="Read more" className="border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black duration-300" />
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[780px] overflow-hidden">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/slider/cache/ed8bca24ee7590a7799efe0feceb8c79/IMG_0876-scaled.jpg" className="bg-img w-full h-full object-cover" alt="luxury" />
          <div className="absolute inset-0 bg-black/45"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="small-title uppercase font-medium tracking-[3px] text-lg border-b-2 border-white pb-2 mb-6">
              Feel at home
            </p>
            <h1 className="main-heading text-3xl md:text-7xl font-bold mb-8 leading-tight max-w-4xl">
              Revel in true hospitality for a luxurious living
            </h1>
            <Link to="/rooms" className="btn-anim"> 
              <Button Text="View Rooms" className="border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black duration-300" />
            </Link>
          </div>
        </div>

      </SlickSlider>
    </div>
  );
};

export default Sliderx;