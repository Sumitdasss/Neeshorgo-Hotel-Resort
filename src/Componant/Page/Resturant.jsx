import { FaRegClock } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP-এর ScrollTrigger প্লাগইন রেজিস্টার করা হলো
gsap.registerPlugin(ScrollTrigger);

const Resturant = () => {
  // কার্ডগুলোর জন্য আলাদা দুটি রেফারেন্স তৈরি
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    // --- CARD 1 (Marine Drive) ANIMATION ---
    const ctx1 = gsap.context(() => {
      // মেইন কন্টেইনার অ্যানিমেশন (AOS fade-up এর বিকল্প)
      gsap.fromTo(card1Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card1Ref.current,
            start: "top 85%", // স্ক্রিনের ৮৫% এ আসলে ট্রিগার হবে
            toggleActions: "play none none reverse",
          }
        }
      );

      // ইনার এলিমেন্টগুলোর অ্যানিমেশন (Staggered or individual)
      gsap.fromTo(".c1-img", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power2.out", scrollTrigger: card1Ref.current });
      gsap.fromTo(".c1-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out", scrollTrigger: card1Ref.current });
      gsap.fromTo(".c1-time", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: "power2.out", scrollTrigger: card1Ref.current });
    }, card1Ref);


    // --- CARD 2 (Rooftop BBQ) ANIMATION ---
    const ctx2 = gsap.context(() => {
      // মেইন কন্টেইনার অ্যানিমেশন
      gsap.fromTo(card2Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card2Ref.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // ইমেজ জুম-ইন ইফেক্ট (AOS zoom-in এর বিকল্প)
      gsap.fromTo(".c2-img", { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.8, delay: 0.2, ease: "back.out(1.2)", scrollTrigger: card2Ref.current });
      gsap.fromTo(".c2-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power2.out", scrollTrigger: card2Ref.current });
      gsap.fromTo(".c2-time", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8, delay: 0.4, ease: "power2.out", scrollTrigger: card2Ref.current });
    }, card2Ref);

    // ক্লিনআপ ফাংশন
    return () => {
      ctx1.revert();
      ctx2.revert();
    };
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-16 space-y-10">

      {/* CARD 1 */}
      <div
        ref={card1Ref}
        className="grid lg:grid-cols-3 gap-8 bg-[#f5f5f5] p-6 lg:p-10 items-center overflow-hidden"
      >
        {/* Image */}
        <div className="c1-img overflow-hidden">
          <img
            src="https://neeshorgo.com.bd/wp-content/uploads/2020/11/IMG_0336-f-Edit-3.jpg"
            alt="Marine Drive Restaurant"
            className="w-full h-[250px] lg:h-[320px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="c1-text space-y-4">
          <h2 className="text-2xl font-bold">Marine Drive Restaurant</h2>
          <p className="text-[18px] leading-7 text-gray-600">
            Neeshorgo presents our elegantly decorated & designed “fine diner”. Our flagship restaurant is located on the first floor of Neeshorgo and can proudly host 150 guests at a time. We at Neeshorgo believe in maintaining precise quality and on-timeliness in every aspects of the service we provide. Our menu is uniquely designed to satisfy you’re every culinary needs and cravings with item ranging from Indian to Chinese, Thai to quintessentially Bengali and Continental.
            <br /><br />
            Business Hour(s)
          </p>
        </div>

        {/* Time + Icon */}
        <div className="c1-time flex items-center lg:justify-end gap-4">
          <FaRegClock className="text-4xl" />
          <div className="text-center lg:text-right">
            <p className="font-semibold">Business Hour (Morning)</p>
            <p className="text-lg font-bold text-gray-700">
              7:30 AM – 11:30 PM
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div
        ref={card2Ref}
        className="grid lg:grid-cols-3 gap-8 bg-[#f5f5f5] p-6 lg:p-10 items-center overflow-hidden"
      >
        {/* Image */}
        <div className="c2-img overflow-hidden">
          <img
            src="https://neeshorgo.com.bd/wp-content/uploads/2020/11/IMG_020008.jpg"
            alt="Rooftop BBQ"
            className="w-full h-[250px] lg:h-[320px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="c2-text space-y-4">
          <h2 className="text-2xl font-bold">Rooftop BBQ & Sea Food</h2>
          <p className="text-[18px] leading-7 text-gray-600">
            With mesmerizing view of the Bay of Bengal on one side and unique greenery of hill tops on the other. Neeshorgo is proud to present our “Rooftop BBQ & Sea Food Restaurant”. Our restaurant will give you a first row seat into the hypnotic beauty of the Bay of Bengal while enjoying 100% freshly made seasonal juices and various fish and meat BBQ prepared to satisfy your taste palates.
          </p>
        </div>

        {/* Time */}
        <div className="c2-time flex lg:justify-end items-center gap-4">
          <FaRegClock className="text-4xl" />
          <div className="text-center lg:text-right">
            <p className="font-semibold">Business Hour (Evening)</p>
            <p className="text-lg font-bold text-gray-700">
              7:00 PM – 11:00 PM
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Resturant;