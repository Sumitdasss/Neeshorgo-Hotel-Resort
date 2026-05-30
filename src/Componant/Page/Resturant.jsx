import { FaRegClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Resturant = () => {
    useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-16 space-y-10">

  {/* CARD 1 */}
  <div
    data-aos="fade-up"
    className="grid lg:grid-cols-3 gap-8 bg-[#f5f5f5] p-6 lg:p-10 items-center"
  >
    {/* Image */}
    <div data-aos="fade-right" className="overflow-hidden">
      <img
        src="https://neeshorgo.com.bd/wp-content/uploads/2020/11/IMG_0336-f-Edit-3.jpg"
        className="w-full h-[250px] lg:h-[320px] object-cover"
      />
    </div>

    {/* Content */}
    <div data-aos="fade-up" className="space-y-4">
      <h2 className="text-2xl font-bold">Marine Drive Restaurant</h2>

      <p className="text-[18px] leading-7 text-gray-600">
        Neeshorgo presents our elegantly decorated & designed “fine diner”. Our flagship restaurant is located on the first floor of Neeshorgo and can proudly host 150 guests at a time. We at Neeshorgo believe in maintaining precise quality and on-timeliness in every aspects of the service we provide. Our menu is uniquely designed to satisfy you’re every culinary needs and cravings with item ranging from Indian to Chinese, Thai to quintessentially Bengali and Continental.

Business Hour(s)

      </p>
    </div>

    {/* Time + Icon (FIXED) */}
    <div
      data-aos="fade-left"
      className="flex items-center lg:justify-end gap-4"
    >
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
    data-aos="fade-up"
    className="grid lg:grid-cols-3 gap-8 bg-[#f5f5f5] p-6 lg:p-10 items-center"
  >
    {/* Image */}
    <div data-aos="zoom-in" className="overflow-hidden">
      <img
        src="https://neeshorgo.com.bd/wp-content/uploads/2020/11/IMG_020008.jpg"
        className="w-full h-[250px] lg:h-[320px] object-cover"
      />
    </div>

    {/* Content */}
    <div data-aos="fade-up" className="space-y-4">
      <h2 className="text-2xl font-bold">Rooftop BBQ & Sea Food</h2>

      <p className="text-[18px] leading-7 text-gray-600">
      With mesmerizing view of the Bay of Bengal on one side and unique greenery of hill tops on the other. Neeshorgo is proud to present our “Rooftop BBQ & Sea Food Restaurant”. Our restaurant will give you a first row seat into the hypnotic beauty of the Bay of Bengal while enjoying 100% freshly made seasonal juices and various fish and meat BBQ prepared to satisfy your taste palates.
      </p>
    </div>

    {/* Time */}
    <div
      data-aos="fade-left"
      className="flex lg:justify-end items-center gap-4"
    >
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
  )
}



export default Resturant