import { ReactTyped } from "react-typed";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP-এর ScrollTrigger প্লাগইন রেজিস্টার করা হলো
gsap.registerPlugin(ScrollTrigger);

const JuiceBar = () => {
  // অ্যানিমেশনের জন্য রেফারেন্স তৈরি
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    // --- ROW 1 ANIMATION ---
    const row1Image = row1Ref.current.querySelector(".row1-img");
    const row1Content = row1Ref.current.querySelector(".row1-content");

    // ইমেজ বাম দিক থেকে আসবে (AOS fade-right এর বিকল্প)
    gsap.fromTo(row1Image,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row1Ref.current,
          start: "top 80%", // স্ক্রিনের ৮০% এ সেকশনটি আসলে অ্যানিমেশন শুরু হবে
          toggleActions: "play none none reverse",
        }
      }
    );

    // টেক্সট ডান দিক থেকে আসবে (AOS fade-left এর বিকল্প)
    gsap.fromTo(row1Content,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row1Ref.current,
          start: "top 80%",
        }
      }
    );


    // --- ROW 2 ANIMATION ---
    const row2Content = row2Ref.current.querySelector(".row2-content");
    const row2Image = row2Ref.current.querySelector(".row2-img");

    // টেক্সট বাম দিক থেকে আসবে (AOS fade-right এর বিকল্প)
    gsap.fromTo(row2Content,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row2Ref.current,
          start: "top 80%",
        }
      }
    );

    // ইমেজ ডান দিক থেকে আসবে (AOS fade-left এর বিকল্প)
    gsap.fromTo(row2Image,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: row2Ref.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/18368019/pexels-photo-18368019.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold uppercase mb-6 sm:mb-10 lg:mb-20">
            Juice Bar
          </h1>
        </div>

        <div
          className="
          absolute bottom-0 left-0 w-full h-10 sm:h-14 lg:h-16
          bg-white
          [clip-path:polygon(0_100%,50%_0,100%_100%)]
        "
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-24 space-y-16 sm:space-y-24 lg:space-y-32">
        
        {/* ROW 1 */}
        <div ref={row1Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="row1-img overflow-hidden">
            <img
              src="https://neeshorgo.com.bd/wp-content/uploads/2023/07/IMG-20230725-WA0030.jpg"
              alt=""
              className="w-full h-[250px] sm:h-[350px] lg:h-[520px] object-cover"
            />
          </div>

          <div className="row1-content">
            <ReactTyped
              className="text-[#262626] font-medium tracking-[2px] mb-4 sm:mb-6 text-3xl sm:text-base block"
              strings={[" Our Juice Bar ", "Infinity Pool", "Ocean View"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Fresh Tropical Juice
            </h3>

            <div className="w-12 sm:w-16 h-[2px] bg-black mb-4 sm:mb-6"></div>

            <p className="text-gray-600 leading-6 sm:leading-7 lg:leading-8 text-sm sm:text-base">
              Juice is a drink made from the extraction or pressing of the
              natural liquid contained in fruit and vegetables. It can also
              refer to liquids that are flavored with concentrate or other
              biological food sources, such as meat or seafood, such as clam
              juice. Juice is commonly consumed as a beverage or used as an
              ingredient or flavoring in foods or other beverages. Juice emerged
              as a popular beverage choice after the development of
              pasteurization methods enabled its preservation without using
              fermentation. Juice is prepared by mechanically squeezing or
              macerating fruit or vegetable flesh without the application of
              heat or solvents. For example, orange juice is the liquid extract
              of the fruit of the orange tree, and tomato juice is the liquid
              that results from pressing the fruit of the tomato plant. Juice
              may be prepared in the home from fresh fruit and vegetables using
              a variety of hand or electric juicers.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div ref={row2Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="row2-content">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Have your smoothie while swimming!
            </h3>

            <div className="w-12 sm:w-16 h-[2px] bg-black mb-4 sm:mb-6"></div>

            <p className="text-gray-600 leading-6 sm:leading-7 lg:leading-8 text-sm sm:text-base">
              A smoothie is a drink made from pureed raw fruit and/or
              vegetables, using a blender. A smoothie often has a liquid base
              such as water, fruit juice, plant milk, and sometimes dairy
              products, such as milk, yogurt, ice cream or cottage cheese.
              Smoothies may be made using other ingredients, such as crushed
              ice, sweeteners (honey or sugar), vinegar, whey powder, chocolate
              or nutritional supplements, among others by personal choice. As
              products typically using raw fruits or vegetables, smoothies
              include dietary fiber (e.g. pulp, skin, and seeds) and so are
              thicker than fruit juice, often with a consistency similar to a
              milkshake. Smoothies, particularly “green smoothies” that include
              vegetables, may be marketed to health-conscious people for being
              healthier than milkshakes.
            </p>
          </div>

          <div className="row2-img overflow-hidden">
            <img
              src="https://neeshorgo.com.bd/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-25-at-15.34.05.jpeg"
              alt=""
              className="w-full h-[220px] sm:h-[300px] lg:h-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuiceBar;