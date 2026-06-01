import  { useEffect, useRef } from 'react';
import Container from "/src/Componant/Common/Container";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Bannner = () => {
  const sectionRef = useRef(null);
  const leftImgRef = useRef(null);   // বড় ইমেজের জন্য
  const rightImgRef = useRef(null);  // ছোট ইমেজের জন্য

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%", 
          toggleActions: "play none none reverse",
        }
      });

      // ১. টেক্সট এনিমেশন (আগের ফিক্সড এনিমেশন)
      tl.from(".anim-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      // ২. বড় ইমেজ রিভিল (Smooth Elastic Scale-In)
      tl.fromTo(".main-img-box", 
        { 
          y: 120, 
          opacity: 0,
          clipPath: "inset(100% 0% 0% 0%)" 
        },
        { 
          y: 0, 
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 2,
          ease: "power4.inOut"
        },
        "-=1.4"
      );

      // ৩. ছোট ওভারল্যাপিং ইমেজ রিভিল (Opposite Direction Entry)
      tl.fromTo(".sub-img-box", 
        { 
          y: -100, 
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)" 
        },
        { 
          y: 0, 
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.8,
          ease: "power4.inOut"
        },
        "-=1.6"
      );

      // ৪. স্ক্রল-বেসড লাইভ প্যারালাক্স মুভমেন্ট
      gsap.to(leftImgRef.current, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(rightImgRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28 px-4 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <p className="anim-text text-sm tracking-[4px] text-[#b58b63] uppercase mb-3 font-medium">
              Neeshorgo Hotel & Resort
            </p>
            <h2 className="anim-text text-4xl sm:text-5xl lg:text-6xl font-light text-[#111] leading-tight mb-4">
              Relax in our Resort
            </h2>
            <p className="anim-text text-[#444] text-base sm:text-lg leading-8 max-w-xl mb-10">
              Neeshorgo Hotel & Resort brings a refreshed commitment to hospitality
              leadership to meet the changing travel industry and the bespoke needs
              of our guests.
            </p>
            
            {/* প্রিমিয়াম লাক্সারি বাটন ইফেক্ট */}
            <div className="anim-text inline-block">
            <Link to="/about">
              <button className="group relative overflow-hidden bg-[#c69c6d] text-white px-10 py-4 tracking-[3px] uppercase text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl rounded-sm">
                {/* টেক্সট লেয়ার */}
                <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
                  About Us
                </span>
                <span className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-white font-semibold">
                  About Us
                </span>
                
             
                <div className="absolute inset-0 bg-[#111] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>
              </button>
            </Link>
            </div>
          </div>

       
          <div className="w-full lg:w-1/2 flex items-center justify-start h-[450px] sm:h-[600px] lg:h-[700px] relative">
       
            <div className="main-img-box w-[75%] h-[85%] overflow-hidden shadow-2xl relative z-10 rounded-sm bg-gray-50">
              <img
                ref={leftImgRef}
                src="https://neeshorgo.com.bd/wp-content/uploads/2023/02/neeshorgo_hotel_home_main-min.png"
                alt="resort primary"
                className="w-full h-[130%] object-cover absolute top-0 left-0 scale-110 will-change-transform" 
              />
            </div>

         
            <div className="sub-img-box w-[45%] h-[55%] overflow-hidden shadow-[-20px_20px_50px_rgba(0,0,0,0.22)] absolute right-0 bottom-4 z-20 border-4 border-white rounded-sm bg-gray-50">
              <img
                ref={rightImgRef}
                src="https://neeshorgo.com.bd/wp-content/uploads/2023/02/neeshorgo_hotel_home_main-min.png"
                alt="resort secondary"
                className="w-full h-[130%] object-cover absolute bottom-0 left-0 scale-120 grayscale-[20%] hover:grayscale-0 duration-700 will-change-transform"
              />
            </div>

            <div className="absolute top-0 left-12 w-[60%] h-[90%] border border-[#c69c6d]/30 -z-10 translate-x-4 -translate-y-4 hidden sm:block"></div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Bannner;