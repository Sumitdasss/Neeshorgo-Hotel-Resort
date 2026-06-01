import  { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bannerthreee = () => {
  const sectionRef = useRef(null);
  const mainImgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%", 
          toggleActions: "play none none reverse",
        }
      });

     
      tl.fromTo(".img-container-anim", 
        { 
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" 
        },
        { 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
          duration: 1.6,
          ease: "power4.inOut"
        }
      );

   
      tl.fromTo(mainImgRef.current,
        { scale: 1.2 },
        { 
          scale: 1, 
          duration: 2, 
          ease: "power3.out" 
        },
        "-=1.6"
      );

   
      tl.from(".content-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15, 
        ease: "power3.out"
      }, "-=0.8");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#1a1a1a] overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center">

    
        <div className="img-container-anim h-[320px] sm:h-[450px] lg:h-[750px] p-5 lg:p-0 md:p-0 w-full lg:w-[50%] overflow-hidden relative bg-[#222]">
          <img
            ref={mainImgRef}
            src="https://images.pexels.com/photos/13338242/pexels-photo-13338242.jpeg"
            alt="Lobby"
            className="w-full h-full object-cover will-change-transform"
          />
        </div>

  
        <div className="bg-[#1a1a1a] text-white w-full lg:w-[50%] px-5 sm:px-10 md:px-16 lg:px-24 py-14 lg:py-0">

          <p className="content-anim uppercase tracking-[4px] text-[13px] text-white mb-6 pt-0 font-medium opacity-80">
            Unexpected
          </p>

          <h2 className="content-anim text-3xl sm:text-4xl md:text-4xl leading-tight font-light mb-10 lg:mb-14">
            WE TAKE CARE OF YOU
            <br />
            <span className="text-[#c69c6d]">
              LIKE YOU ARE OUR OWN.
            </span>
          </h2>

  
          <div className="content-anim grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-10 lg:mb-14">
            <p className="text-[16px] sm:text-[18px] lg:text-[19px] leading-8 sm:leading-9 lg:leading-10 text-[#e5e5e5] font-light">
              With the reassurance, hospitality and warmth of
              Neeshorgo Hotel & Resort, guests are welcomed to the
              perfect combination of luxury apartment style living
              and leading hotels services.
            </p>

            <p className="text-[16px] sm:text-[18px] lg:text-[19px] leading-8 sm:leading-9 lg:leading-10 text-[#e5e5e5] font-light">
              There is a fitness center and an indoor pool at this
              luxury hotel. Car rental service is available in the
              lobby, along with a concierge desk and 24-hour
              reception. Breakfast is available for a fee.
            </p>
          </div>

       
          <div className="content-anim inline-block">
            <Link to="/rooms">
              <button className="group relative overflow-hidden bg-[#c69c6d] text-white px-8 sm:px-10 py-4 sm:py-5 uppercase tracking-[3px] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md rounded-sm">
                
           
                <span className="relative z-10 block transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0">
                  Check All Packages
                </span>
         
                <span className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white font-semibold">
                  Check All Packages
                </span>
                
   
                <div className="absolute inset-0 bg-[#111] transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0"></div>
                
              </button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Bannerthreee;