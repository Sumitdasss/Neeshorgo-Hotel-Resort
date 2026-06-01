import  { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from "/src/Componant/Common/Container";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bannerfour = () => {
  const sectionRef = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // ১. সম্পূর্ণ গ্রিড কন্টেন্টগুলো একটার পর একটা অত্যন্ত প্রফেশনাল ছন্দে আসবে
      gsap.from(".luxury-reveal", {
        y: 50,
        opacity: 0,
        duration: 1.4,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%", // স্ক্রিনের ৬৫% এ আসলেই শুরু হবে
          toggleActions: "play none none reverse",
        }
      });

      // ২. স্ক্রল করার সাথে সাথে ব্যাকগ্রাউন্ডের ইমেজগুলো হালকা স্কেল ডাউন হবে (Cinematic Motion)
      gsap.fromTo([imgRef1.current, imgRef2.current], 
        { scale: 1.12 },
        { 
          scale: 1, 
          duration: 1.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f9f9f9] py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-sm rounded-sm overflow-hidden">

          {/* 1. Top Left Content */}
          <div className="luxury-reveal bg-[#fbfbfb] px-8 md:px-16 py-16 lg:py-24 flex flex-col justify-center border-b border-gray-50 lg:border-b-0">
            <p className="uppercase tracking-[5px] text-[12px] text-[#b89a74] mb-4 text-center lg:text-left font-semibold">
              Fine Food
            </p>

            <div className="w-12 h-[1px] bg-[#b89a74] mb-8 mx-auto lg:mx-0 opacity-60"></div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#111] mb-8 text-center lg:text-left tracking-wide leading-tight">
              Marine Drive Restaurant
            </h2>

            <p className="text-[#555] text-base sm:text-[17px] leading-8 lg:leading-9 tracking-[0.3px] mb-10 text-center lg:text-left font-light max-w-xl mx-auto lg:mx-0">
              Neeshorgo presents our elegantly decorated & designed “fine diner”.
              Our flagship restaurant is located on the first floor of Neeshorgo
              and can proudly host 150 guests at a time. We believe in maintaining 
              precise quality in every aspect.
            </p>

            {/* High-End Minimalist Button */}
            <div className="mx-auto lg:mx-0">
              <Link to="/restaurants">
                <button className="relative overflow-hidden border border-[#c69c6d] text-[#c69c6d] bg-transparent hover:bg-[#c69c6d] hover:text-white duration-500 uppercase tracking-[4px] text-xs font-semibold px-10 py-4.5 rounded-sm transition-all shadow-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>

          {/* 2. Top Right Image */}
          <div className="luxury-reveal overflow-hidden h-[320px] sm:h-[450px] lg:h-auto relative bg-[#f5f5f5]">
            <img
              ref={imgRef1}
              src="https://neeshorgo.com.bd/wp-content/uploads/slider/cache/c696238ca5f3212bfeb9dc27c369123c/IMG_0336-f-Edit-3.jpg"
              alt="restaurant"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />
          </div>

          {/* 3. Bottom Left Image */}
          <div className="luxury-reveal overflow-hidden h-[320px] sm:h-[450px] lg:h-auto relative bg-[#f5f5f5] order-4 lg:order-3">
            <img
              ref={imgRef2}
              src="https://neeshorgo.com.bd/wp-content/uploads/2020/11/IMG_020008.jpg"
              alt="bbq"
              className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />
          </div>

          {/* 4. Bottom Right Content */}
          <div className="luxury-reveal bg-[#fbfbfb] px-8 md:px-16 py-16 lg:py-24 flex flex-col justify-center order-3 lg:order-4 border-t border-gray-50 lg:border-t-0">
            <p className="uppercase tracking-[5px] text-[12px] text-[#b89a74] mb-4 text-center lg:text-left font-semibold">
              Full Entertainment
            </p>

            <div className="w-12 h-[1px] bg-[#b89a74] mb-8 mx-auto lg:mx-0 opacity-60"></div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#111] mb-8 text-center lg:text-left tracking-wide leading-tight">
              Rooftop BBQ & Sea Foods
            </h2>

            <p className="text-[#555] text-base sm:text-[17px] leading-8 lg:leading-9 tracking-[0.3px] mb-10 text-center lg:text-left font-light max-w-xl mx-auto lg:mx-0">
              With a mesmerizing view of the Bay of Bengal on one side and unique
              greenery of hill tops on the other, Neeshorgo is proud to present
              our “Rooftop BBQ & Sea Food Restaurant” with 100% freshly made seasonal juices.
            </p>

            {/* High-End Minimalist Button */}
            <div className="mx-auto lg:mx-0">
              <Link to="/restaurants">
                <button className="relative overflow-hidden border border-[#c69c6d] text-[#c69c6d] bg-transparent hover:bg-[#c69c6d] hover:text-white duration-500 uppercase tracking-[4px] text-xs font-semibold px-10 py-4.5 rounded-sm transition-all shadow-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Bannerfour;