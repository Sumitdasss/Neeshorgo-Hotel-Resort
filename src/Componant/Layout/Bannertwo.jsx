import Container from "/src/Componant/Common/Container"
import { Link } from 'react-router-dom';
const Bannertwo = () => {
  return (
<section className="bg-[#f5f5f5] py-20">
  <Container>

    {/* Heading */}
    <div className="text-center mb-12 lg:mb-16">
      <p className="uppercase tracking-[4px] text-[#b89a74] text-sm mb-3">
        Luxury Hotel
      </p>

      <div className="w-10 h-[1px] bg-[#b89a74] mx-auto mb-6"></div>

      <h2 className="text-4xl md:text-5xl lg:text-5xl font-light text-[#111]">
        Best Rooms
      </h2>
    </div>

    {/* Main Grid */}
    <div className="flex flex-col lg:flex-row justify-between gap-6">

      {/* Left Big Card */}
      <div className="bg-white shadow-sm w-full lg:w-[58%]">

        {/* Main Image */}
        <div className="h-[260px] sm:h-[320px] lg:h-[420px] p-5 lg:p-0 md:p-0 overflow-hidden">
          <img
            src="https://neeshorgo.com.bd/wp-content/uploads/2020/02/Deluxe-Superior-Suite-Couple-Sea-view-1110x611.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">

          <h3 className="text-2xl sm:text-3xl font-semibold text-[#222] mb-6 leading-snug">
            Deluxe Superior Suite (Couple Sea View)
          </h3>

          {/* Info */}
          <div className="flex items-center gap-6 sm:gap-8 mb-4 text-[#666] flex-wrap">

            <div className="flex items-center gap-2">
              <span className="text-xl">👤</span>
              <span className="uppercase text-sm tracking-[2px]">
                2 Guests
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl">◫</span>
              <span className="uppercase text-sm tracking-[2px]">
                435 Ft²
              </span>
            </div>

          </div>

          <p className="text-[#555] leading-8 text-base sm:text-lg mb-8">
            The Standard Guest Suite includes 32” LED Flat Screen TV’s,
            Free high speed wireless internet access
          </p>

         <Link  to="/rooms"> <button className="bg-[#1d1f24] hover:bg-black text-white px-6 sm:px-8 py-4 sm:py-5 uppercase tracking-[3px] text-xs sm:text-sm font-semibold transition-all duration-300">
            Book Now From 5000 TK
          </button>
</Link>
        </div>
      </div>

      {/* Right Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-0 lg:w-[50%] flex flex-col gap-3">

        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row gap-3">

          <div className="overflow-hidden rounded-md w-full sm:w-1/2">
            <img
              src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/Deluxe-Premier-Suite-Twin-Bed-%E2%80%93-2nd-Floor-720x720.jpg"
              alt=""
              className="w-full h-[250px] sm:h-[270px] object-cover rounded-md"
            />
          </div>

          <div className="overflow-hidden rounded-md w-full sm:w-1/2">
            <img
              src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/Deluxe-Premier-Suite-Sea-View-720x720.jpg"
              alt=""
              className="w-full h-[250px] sm:h-[270px] object-cover rounded-md"
            />
          </div>

        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row gap-3">

          <div className="overflow-hidden rounded-md w-full sm:w-1/2">
            <img
              src="https://neeshorgo.com.bd/wp-content/uploads/2020/02/Platinum-suite-720x720.jpeg"
              alt=""
              className="w-full h-[250px] sm:h-[270px] object-cover rounded-md"
            />
          </div>

          <div className="overflow-hidden rounded-md w-full sm:w-1/2">
            <img
              src="https://neeshorgo.com.bd/wp-content/uploads/2021/01/IMG_0451-Edit-720x638.jpg"
              alt=""
              className="w-full h-[250px] sm:h-[270px] object-cover rounded-md"
            />
          </div>

        </div>

      </div>

    </div>

    {/* Button */}
    <div className="flex justify-center mt-10 lg:mt-12">
<Link  to="/rooms">
      <button className="bg-[#c69c6d] hover:bg-[#b88a57] text-white px-8 sm:px-12 py-4 sm:py-5 uppercase tracking-[4px] text-xs sm:text-sm transition-all duration-300">
        View More
      </button>
      </Link>
    </div>

  </Container>
</section>
  )
}

export default Bannertwo