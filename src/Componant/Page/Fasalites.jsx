import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWifi, FaCouch, FaBed, FaUtensils, FaSwimmingPool, FaParking } from "react-icons/fa";

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto px-4 py-16 space-y-14" data-aos="fade-up">

      {/* TOP CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div data-aos="fade-up" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
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
        <div data-aos="fade-up" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
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
        <div data-aos="fade-up" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
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
      <div className="flex flex-wrap justify-between gap-12 text-gray-700">

        <div data-aos="zoom-in" className="flex flex-col items-center gap-2">
          <FaWifi className="text-2xl" />
          <span className="text-sm">wifi</span>
        </div>

        <div data-aos="zoom-in" className="flex flex-col items-center gap-2">
          <FaCouch className="text-2xl" />
          <span className="text-sm">sofa</span>
        </div>

        <div data-aos="zoom-in" className="flex flex-col items-center gap-2">
          <FaBed className="text-2xl" />
          <span className="text-sm">bed</span>
        </div>

        <div data-aos="zoom-in" className="flex flex-col items-center gap-2">
          <FaUtensils className="text-2xl" />
          <span className="text-sm">restaurant</span>
        </div>

        <div data-aos="zoom-in" className="flex flex-col items-center gap-2">
          <FaSwimmingPool className="text-2xl" />
          <span className="text-sm">pool</span>
        </div>

        <div data-aos="zoom-in" className="flex flex-col items-center gap-2">
          <FaParking className="text-2xl" />
          <span className="text-sm">parking</span>
        </div>

      </div>

    </section>
  );
};

export default Facilities;