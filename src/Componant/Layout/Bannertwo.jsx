import  { useEffect, useRef } from 'react';
import Container from "/src/Componant/Common/Container";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bannertwo = () => {
  const sectionRef = useRef(null);
  const bigCardImgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%", // সেকশনটি স্ক্রিনের ৬৫% এ আসলে অ্যানিমেশন শুরু হবে
          toggleActions: "play none none reverse",
        }
      });

      // ১. হেডিং অ্যানিমেশন (স্মুথ ফেইড আপ)
      tl.from(".heading-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

      // ২. বাম পাশের বড় কার্ড রিভিল (Elastic Inset Reveal)
      tl.fromTo(".left-card-anim", 
        { 
          y: 60,
          opacity: 0 
        },
        { 
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out"
        },
        "-=0.6"
      );

      // বড় কার্ডের ভেতরের ইমেজটি জুম-আউট হয়ে সেট হবে
      tl.fromTo(bigCardImgRef.current,
        { scale: 1.2 },
        { 
          scale: 1, 
          duration: 2, 
          ease: "power2.out" 
        },
        "-=1.4"
      );

      // ৩. ডান পাশের ৪টি গ্রিড ইমেজ একটার পর একটা মাস্ক খুলে আসবে (Staggered Reveal)
      tl.fromTo(".right-grid-img", 
        { 
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", // শুরুতেই বন্ধ থাকবে
          scale: 1.15
        },
        { 
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // পর্দার মতো খুলে যাবে
          scale: 1,
          duration: 1.5,
          stagger: 0.15, // একটির পর আরেকটি ইমেজ আসবে
          ease: "power4.inOut"
        },
        "-=1.2"
      );

      // ৪. নিচের "View More" বাটন অ্যানিমেশন
      tl.fromTo(".view-more-btn",
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "back.out(1.7)" 
        },
        "-=0.6"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f5f5f5] py-20 lg:py-28 overflow-hidden">
      <Container>

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="heading-anim uppercase tracking-[4px] text-[#b89a74] text-sm mb-3">
            Luxury Hotel
          </p>

          <div className="heading-anim w-10 h-[1px] bg-[#b89a74] mx-auto mb-6"></div>

          <h2 className="heading-anim text-4xl md:text-5xl lg:text-5xl font-light text-[#111]">
            Best Rooms
          </h2>
        </div>

        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          {/* Left Big Card */}
          <div className="left-card-anim bg-white shadow-sm w-full lg:w-[54%] rounded-sm overflow-hidden flex flex-col justify-between">
            <div>
              {/* Main Image Container */}
              <div className="h-[260px] sm:h-[350px] lg:h-[420px] overflow-hidden relative">
                <img
                  ref={bigCardImgRef}
                  src="https://neeshorgo.com.bd/wp-content/uploads/2020/02/Deluxe-Superior-Suite-Couple-Sea-view-1110x611.jpg"
                  alt="Deluxe Superior Suite"
                  className="w-full h-full object-cover will-change-transform"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-light text-[#111] mb-5 leading-snug">
                  Deluxe Superior Suite (Couple Sea View)
                </h3>

                {/* Info */}
                <div className="flex items-center gap-6 sm:gap-8 mb-6 text-[#777] flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-base">👤</span>
                    <span className="uppercase text-xs tracking-[2px]">2 Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-base">◫</span>
                    <span className="uppercase text-xs tracking-[2px]">435 Ft²</span>
                  </div>
                </div>

                <p className="text-[#555] leading-8 text-base mb-8 font-light">
                  The Standard Guest Suite includes 32” LED Flat Screen TV’s,
                  Free high speed wireless internet access.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-10 pb-6 sm:pb-10">
              <Link to="/rooms" className="inline-block w-full sm:w-auto">
                <button className="group relative overflow-hidden bg-[#1d1f24] text-white px-8 py-4 uppercase tracking-[3px] text-xs font-medium transition-all duration-300 w-full sm:w-auto">
                  <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
                    Book Now From 5000 TK
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-white font-medium">
                    Book Now From 5000 TK
                  </span>
                  <div className="absolute inset-0 bg-[#c69c6d] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Grid (4 Images with Premium Entry) */}
          <div className="w-full lg:w-[44%] flex flex-col gap-4">

            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="overflow-hidden rounded-sm w-full sm:w-1/2 h-[240px] sm:h-[260px] relative bg-gray-100">
                <img
                  src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/Deluxe-Premier-Suite-Twin-Bed-%E2%80%93-2nd-Floor-720x720.jpg"
                  alt="Deluxe Premier Twin"
                  className="right-grid-img w-full h-full object-cover will-change-transform"
                />
              </div>

              <div className="overflow-hidden rounded-sm w-full sm:w-1/2 h-[240px] sm:h-[260px] relative bg-gray-100">
                <img
                  src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/Deluxe-Premier-Suite-Sea-View-720x720.jpg"
                  alt="Deluxe Premier Sea View"
                  className="right-grid-img w-full h-full object-cover will-change-transform"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="overflow-hidden rounded-sm w-full sm:w-1/2 h-[240px] sm:h-[260px] relative bg-gray-100">
                <img
                  src="https://neeshorgo.com.bd/wp-content/uploads/2020/02/Platinum-suite-720x720.jpeg"
                  alt="Platinum Suite"
                  className="right-grid-img w-full h-full object-cover will-change-transform"
                />
              </div>

              <div className="overflow-hidden rounded-sm w-full sm:w-1/2 h-[240px] sm:h-[260px] relative bg-gray-100">
                <img
                  src="https://neeshorgo.com.bd/wp-content/uploads/2021/01/IMG_0451-Edit-720x638.jpg"
                  alt="Executive Suite"
                  className="right-grid-img w-full h-full object-cover will-change-transform"
                />
              </div>
            </div>

          </div>

        </div>

        {/* View More Button */}
       <div className="view-more-btn flex justify-center mt-12 lg:mt-16">
  <Link to="/rooms">
    <button className="group relative overflow-hidden bg-[#c69c6d] text-white px-10 py-4 lg:py-5 uppercase tracking-[4px] text-xs font-medium transition-all duration-300 shadow-md rounded-sm">
      
      {/* ১. মেইন টেক্সট (হোভার করলে উপরে চলে যাবে এবং ফেইড আউট হবে) */}
      <span className="relative z-10 block transition-all duration-500 transform group-hover:-translate-y-full group-hover:opacity-0">
        View More
      </span>
      
      {/* ২. হোভার টেক্সট (শুরুতে নিচে লুকিয়ে থাকবে, হোভার করলে নিখুঁতভাবে সেন্টারে আসবে) */}
      <span className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-white font-medium">
        View More
      </span>
      
      {/* ৩. ব্যাকগ্রাউন্ড স্লাইডিং পর্দা */}
      <div className="absolute inset-0 bg-[#111] transition-transform duration-500 ease-out transform translate-y-full group-hover:translate-y-0"></div>
      
    </button>
  </Link>
</div>
      </Container>
    </section>
  );
}

export default Bannertwo;