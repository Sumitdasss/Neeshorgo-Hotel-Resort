import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWifi, FaCouch, FaBed, FaUtensils, FaSwimmingPool, FaParking } from "react-icons/fa";

// GSAP-এর ScrollTrigger প্লাগইন রেজিস্টার করা হলো
gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // ১. উপরের ৩টি কার্ডের জন্য স্ট্যাগারড অ্যানিমেশন (AOS fade-up এর বিকল্প)
      gsap.fromTo(".facility-card", 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2, // একটি কার্ড অ্যানিমেট হওয়ার ০.২ সেকেন্ড পর পরেরটি শুরু হবে
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".grid-container",
            start: "top 85%", // সেকশনটি স্ক্রিনের ৮৫% এ আসলে অ্যানিমেশন শুরু হবে
            toggleActions: "play none none reverse",
          }
        }
      );

      // ২. নিচের আইকনগুলোর জন্য জুম-ইন অ্যানিমেশন (AOS zoom-in এর বিকল্প)
      gsap.fromTo(".icon-feature", 
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1, // আইকনগুলো একটার পর একটা পপ-আপ হবে
          ease: "back.out(1.5)", // চমৎকার একটি স্প্রিং বা বাউন্স ইফেক্ট দেবে
          scrollTrigger: {
            trigger: ".icons-container",
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );

    }, containerRef);

    // ক্লিনআপ ফাংশন
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-4 py-16 space-y-14 overflow-hidden">

      {/* TOP CARDS */}
      <div className="grid-container grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="facility-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
          <img
            src="https://neeshorgo.com.bd/wp-content/uploads/2020/12/C12F3744.jpg"
            className="h-56 w-full object-cover"
            alt="pool"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Infinity Pool</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Neeshorgo’s rooftop swimming pool is one of its kind in Cox’s Bazar. It is an infinity pool that gives you feeling of swimming on the sea! Our five-feet deep pool is ideal for adults whether someone is expert swimmer or don’t know how to swim. Next to adult pool, we have children pool, ideal for kids of any age.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="facility-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
          <img
            src="https://neeshorgo.com.bd/wp-content/uploads/2020/12/C12F3674-Edit-v1-1.jpg"
            className="h-56 w-full object-cover"
            alt="lobby"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Lobby</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We have very spacious lobby at the ground floor. Ideal for casual hang out with friends and outside guest while sipping on a cup of tea or coffee. This allows guests to take a break and sit down for a few minutes. In addition to anticipating guest needs upon arrival, the lobby also set the tone for your style throughout the hotel.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="facility-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
          <img
            src="https://neeshorgo.com.bd/wp-content/uploads/2020/12/C12F3654-Edit.jpg"
            className="h-56 w-full object-cover"
            alt="hall"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-center mb-2">Conference Hall</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expand your vision beyond the usual. Aspire & inspire for ideas and excite your creativity with our perceptive conference center, for the important meetings. The conference center includes function room with an additional pre-function area, complemented by the latest audio and visual technology. We have a sitting capacity of 100 persons.
            </p>
          </div>
        </div>

      </div>

      {/* ICON FEATURES */}
      <div className="icons-container flex flex-wrap justify-between gap-12 text-gray-700 px-2">

        <div className="icon-feature flex flex-col items-center gap-2">
          <FaWifi className="text-2xl" />
          <span className="text-sm">wifi</span>
        </div>

        <div className="icon-feature flex flex-col items-center gap-2">
          <FaCouch className="text-2xl" />
          <span className="text-sm">sofa</span>
        </div>

        <div className="icon-feature flex flex-col items-center gap-2">
          <FaBed className="text-2xl" />
          <span className="text-sm">bed</span>
        </div>

        <div className="icon-feature flex flex-col items-center gap-2">
          <FaUtensils className="text-2xl" />
          <span className="text-sm">restaurant</span>
        </div>

        <div className="icon-feature flex flex-col items-center gap-2">
          <FaSwimmingPool className="text-2xl" />
          <span className="text-sm">pool</span>
        </div>

        <div className="icon-feature flex flex-col items-center gap-2">
          <FaParking className="text-2xl" />
          <span className="text-sm">parking</span>
        </div>

      </div>

    </section>
  );
};

export default Facilities;