

const Amenities = () => {
  return (
   <div className="w-full font-sans antialiased text-gray-800">

  <section className="max-w-[1440px] mx-auto px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-bold text-[#262626] mb-12 text-center">
      Our Services
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

      {/* Service 1 */}
      

      <div className="flex flex-col items-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-14-1.png"
            className="w-full h-full object-contain opacity-70" />
        </div>
        <h3 className="text-3xl font-bold text-[#1A2B49] mb-3">Swimming Pool</h3>
        <p className="text-gray-500 text-[18px] leading-relaxed font-light">
         It's hard to find a bad view in Neeshorgo. But you can kick things up a notch with the roof top Infinity pool at the Neeshorgo Hotel & Resort. It overlooks the Mountain View on the East Side and Sea side view on the West.
        </p>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-17.png"
            className="w-full h-full object-contain opacity-70" />
        </div>
        <h3 className="text-3xl font-bold text-[#1A2B49] mb-3">24/7 Restaurant</h3>
        <p className="text-gray-500 text-[18px] leading-relaxed font-light">
         
Nothing beats the smells wafting from a well-run kitchen – a pinch of rosemary here, some oregano there. An unique establishment that serves relatively fresh & tasty food at reasonable prices.


        </p>
      </div>

      {/* Service 3 */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-12-1.png"
            className="w-full h-full object-contain opacity-70" />
        </div>
        <h3 className="text-3xl font-bold text-[#1A2B49] mb-3">Wifi Areas</h3>
        <p className="text-gray-500 text-[18px] leading-relaxed font-light">
       High Speed Internet. While service and amenities play an important role, the availability of complimentary high speed hotel WiFi internet can make or break guest satisfaction.
        </p>
      </div>

      {/* Service 4 */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-18.png"
            className="w-full h-full object-contain opacity-70" />
        </div>
        <h3 className="text-3xl font-bold text-[#1A2B49] mb-3">TV</h3>
        <p className="text-gray-500 text-[18px] leading-relaxed font-light">
         Chilling out on the bed in your hotel room watching television is sometimes the best part of a vacation. And we believe that good journalism, good television, can make our world a better place.
        </p>
      </div>

    </div>





  </section>


<section
  className="relative w-full bg-cover bg-center bg-no-repeat py-20 md:py-28"
  style={{ backgroundImage: "url('https://images.pexels.com/photos/7732177/pexels-photo-7732177.jpeg')" }}
>

   
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-900/20"></div>

  <div className="relative  max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div className="text-white text-center lg:text-left">
      <h2 className="text-4xl md:text-5xl font-light mb-6">
        Facilities
      </h2>

      <p className="text-gray-200 text-sm md:text-base uppercase mb-8">
        Enjoy the must-have Amenities from a modern style hotel
      </p>

      <button className="bg-black hover:bg-black text-white text-xs font-bold tracking-widest px-8 py-4 uppercase">
        Read More
      </button>
    </div>

    {/* Right Grid */}
    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">

      {/* Card 1 */}
      <div className="bg-white aspect-square flex flex-col items-center w-[200px] h-[200px]justify-center text-center shadow-lg">
        <div className="w-10 h-10 mb-3 flex items-center justify-center">
          <img src="path-to-your/tv-icon-dark.png"
            className="w-full h-full object-contain opacity-80" />
        </div>
        <h4 className="text-xl font-bold text-[#1A2B49]">TV</h4>
        <span className="text-[10px] uppercase text-gray-400 tracking-widest">
          Satellite
        </span>
      </div>

      {/* Card 2 */}
      <div className="bg-white aspect-square flex flex-col items-center w-[200px] h-[200px] justify-center text-center shadow-lg">
        <div className="w-10 h-10 mb-3 flex items-center justify-center">
          <img src="path-to-your/wifi-icon-dark.png"
            className="w-full h-full object-contain opacity-80" />
        </div>
        <h4 className="text-xl font-bold text-[#1A2B49]">Wifi</h4>
        <span className="text-[10px] uppercase text-gray-400 tracking-widest">
          High Speed
        </span>
      </div>

      {/* Card 3 */}
      <div className="bg-white aspect-square flex flex-col items-center w-[200px] h-[200px] justify-center text-center shadow-lg">
        <div className="w-10 h-10 mb-3 flex items-center justify-center">
          <img src="path-to-your/food-icon-dark.png"
            className="w-full h-full object-contain opacity-80" />
        </div>
        <h4 className="text-xl font-bold text-[#1A2B49]">Food</h4>
        <span className="text-[10px] uppercase text-gray-400 tracking-widest">
          Included
        </span>
      </div>

      {/* Card 4 */}
      <div className="bg-white aspect-square flex flex-col items-center w-[200px] h-[200px] justify-center text-center shadow-lg">
        <div className="w-10 h-10 mb-3 flex items-center justify-center">
          <img src="path-to-your/bed-icon-dark.png"
            className="w-full h-full object-contain opacity-80" />
        </div>
        <h4 className="text-xl font-bold text-[#1A2B49]">Bed</h4>
        <span className="text-[10px] uppercase text-gray-400 tracking-widest">
          King Size
        </span>
      </div>

    </div>

  </div>
</section>


  

</div>
  )
}

export default Amenities