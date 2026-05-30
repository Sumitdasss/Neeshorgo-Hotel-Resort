

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
    <div className="">

      {/* Card 1 */}
      <div className="flex flex-wrap gap-4 w-full mt-4 justify-center lg:justify-start">
      <div className="bg-white  flex flex-col items-center w-[280px] h-[200px] justify-center text-center shadow-lg">
        <div className="w-10 h-10 mb-3 flex items-center justify-center">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-18.png"
            className="w-full h-full object-contain opacity-80" />
        </div>
        <h4 className="text-5xl font-bold text-[#1A2B49]">TV</h4>
        <span className="text-[10px] uppercase text-gray-400 tracking-widest">
          Satellite
        </span>
      </div>

      {/* Card 2 */}
      <div className="bg-white flex flex-col items-center w-[280px] h-[200px] justify-center text-center shadow-lg">
        <div className="w-10 h-10 mb-3 flex items-center justify-center">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-12-1.png"
            className="w-full h-full object-contain opacity-80" />
        </div>
        <h4 className="text-5xl font-bold text-[#1A2B49]">Wifi</h4>
        <span className="text-[10px] uppercase text-gray-400 tracking-widest">
          High Speed
        </span>
      </div>
</div>
      {/* Card 3 */}

      <div className="flex flex-wrap gap-4 mt-4 w-full justify-center lg:justify-start">
      <div className="bg-white  flex flex-col items-center w-[280px] h-[200px] justify-center text-center shadow-lg">
        <div className="w-10 h-10 mb-3 flex items-center justify-center">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-17.png"
            className="w-full h-full object-contain opacity-80" />
        </div>
        <h4 className="text-5xl font-bold text-[#1A2B49]">Food</h4>
        <span className="text-[10px] uppercase text-gray-400 tracking-widest">
          Included
        </span>
      </div>

      {/* Card 4 */}
      <div className="bg-white  flex flex-col items-center w-[280px] h-[200px] justify-center text-center shadow-lg">
        <div className="w-10 h-10 mb-3 flex items-center justify-center">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-12.png"
            className="w-full h-full object-contain opacity-80" />
        </div>
        <h4 className="text-5xl font-bold text-[#1A2B49]">Bed</h4>
        <span className="text-[10px] uppercase text-gray-400 tracking-widest">
          King Size
        </span>
      </div>
</div>
    </div>

  </div>
</section>





<div className="w-full bg-white font-sans py-10">
      
      {/* ১. উপরের গ্রিড সেকশন (১২টি আইটেম) */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          
          {/* আইটেম ১ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2020/12/Untitled-1-1.png" alt="Restaurant" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Top Restaurant</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Breakfast and Dinner</p>
          </div>

          {/* আইটেম ২ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2020/12/Untitled-1.png" alt="Pool" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Infinity Pool</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Open Daily</p>
          </div>

          {/* আইটেম ৩ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2020/12/C12F3654-Edit.jpg" alt="Hall" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Conference Hall</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Seating Capacity of 100 People</p>
          </div>

          {/* আইটেম ৪ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2020/12/Untitled-1-2.png" alt="Suites" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Best Suites</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Cozy Room</p>
          </div>

          {/* আইটেম ৫ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2025/11/IMG_0569-1024x683.webp" alt="Marine" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Marine Drive</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Restaurant</p>
          </div>

          {/* আইটেম ৬ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2025/11/MG_2119-1024x683.webp" alt="Bay" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Bay Restaurant</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Bar</p>
          </div>

          {/* আইটেম ৭ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2025/11/MG_2003-1024x683.webp" alt="Rooftop" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Roof Top</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Bbq</p>
          </div>

          {/* আইটেম ৮ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2025/11/MG_2163-1024x683.webp" alt="Lobby" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Lobby</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Lounge</p>
          </div>

          {/* আইটেম ৯ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2025/11/MG_1971-1024x683.webp" alt="Gym" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Gym Center</h3>
          </div>

          {/* আইটেম ১০ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2025/11/MG_1980-1024x683.webp" alt="Green" className="w-full object-cover mb-2" />
            <h3 className="text-4xl font-semibold text-gray-800">Green Zone</h3>
          </div>

          {/* আইটেম ১১ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2025/11/MG_1966-1024x683.webp" alt="Kids" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Kids Zone</h3>
          </div>

          {/* আইটেম ১২ */}
          <div className="text-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2025/11/MG_2147-1024x683.webp" alt="Smoking" className="w-full object-cover mb-2" />
            <h3 className="text-3xl font-semibold text-gray-800">Smoking Zone</h3>
          </div>

        </div>
      </div>

      {/* ২. নিচের ৪টি ফিচার সেকশন (বর্ডার লাইন সহ) */}
     

    </div>

 <div className="border-t-2 border-b-2 border-gray-200 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200 text-center">
          
          {/* ব্লক ১ */}
          <div className="py-15 px-4 flex flex-col items-center justify-center">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/08/icon-wallet-grey.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <span className="text-[11px] text-gray-400 tracking-widest font-medium uppercase">Cash Payment</span>
          </div>

          {/* ব্লক ২ */}
          <div className="py-15 px-4 flex flex-col items-center justify-center">
           <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/08/icon-request-grey.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <span className="text-[11px] text-gray-400 tracking-widest font-medium uppercase">Booking Request</span>
          </div>

          {/* ব্লক ৩ */}
          <div className="py-15 px-4 flex flex-col items-center justify-center">
           <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-1.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <span className="text-[11px] text-gray-400 tracking-widest font-medium uppercase">Debit Card</span>
          </div>

          {/* ব্লক ৪ */}
          <div className="py-15 px-4 flex flex-col items-center justify-center">
           <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-1.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <span className="text-[11px] text-gray-400 tracking-widest font-medium uppercase">Credit Card</span>
          </div>

        </div>
      </div>
  


<div className="w-full bg-white font-sans py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium block mb-1">
            Rooms
          </span>
          <div className="w-8 h-[1px] bg-gray-400 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-800 tracking-wide">
            Facilities
          </h2>
        </div>

        {/* গ্রিড সেকশন (৩ কলাম লেআউট) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          
          {/* ১. Smoking Free */}
          <div className="flex gap-4 items-start">
          <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-14.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                Smoking Free
              </h3>
              <p className="text-[18px] text-gray-400 leading-relaxed font-light text-justify">
                The Property is Smoking Free. For safety and to assure that our facility is not exposed to items or actions that create an odor which is unhealthy and objectionable to our guests and staff.
              </p>
            </div>
          </div>

          {/* ২. Swimming Pool */}
          <div className="flex gap-4 items-start">
           <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-14-1.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                Swimming Pool
              </h3>
              <p className="text-[18px] text-gray-400 leading-relaxed font-light text-justify">
                It's hard to find a bad view in Neeshorgo. But you can kick things up a notch with the roof top Infinity pool at the Neeshorgo Hotel & Resort. It overlooks the Mountain View on the East Side and Sea side view on the West.
              </p>
            </div>
          </div>

          {/* ৩. Laundry Service */}
          <div className="flex gap-4 items-start">
         <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-15.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                Laundry Service
              </h3>
              <p className="text-[18px] text-gray-400 leading-relaxed font-light text-justify">
                Let us know if you require any laundry services. If you hand in clothes one day you should get them back a day or two later. The laundry service will wash, dry, and iron your clothes. Our laundry service can clean and return a shirt in two hours.
              </p>
            </div>
          </div>

          {/* ৪. Welcome Drink */}
          <div className="flex gap-4 items-start">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-13.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                Welcome Drink
              </h3>
              <p className="text-[18px] text-gray-400 leading-relaxed font-light text-justify">
                Enjoy the hospitality of Neeshorgo Hotel & resort in the lobby while our staff is taking care of your check -in. They are ideal summer welcome drinks since they are served icy cold and offer relief from the heat.
              </p>
            </div>
          </div>

          {/* ৫. King Beds */}
          <div className="flex gap-4 items-start">
           <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-12.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                King Beds
              </h3>
              <p className="text-[18px] text-gray-400 leading-relaxed font-light text-justify">
                King size bed are available at the property. This type measures 60 inches side to side by 80 inches up and down, which comes to 5 feet horizontally and 8 2/3 feet vertically. A king is usually the biggest bed you'll find at a hotel.
              </p>
            </div>
          </div>

          {/* ৬. Airport Shuttle */}
          <div className="flex gap-4 items-start">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2021/01/bus.png" alt="Cash" className="w-10 h-10 mb-2 object-contain opacity-70" />
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-wide">
                Airport Shuttle
              </h3>
              <p className="text-[18px] text-gray-400 leading-relaxed font-light text-justify">
                We provide a fast, easy, cost effective way to compare and book airport ground transportation worldwide. When booking with us you can find the lowest rates on thousands of airport shuttle rides for shared ride vans, private van transfers and sedans.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>



<div 
      className="w-full h-[500px] bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ 
       
        backgroundImage: "url('https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg')" 
      }}
    >
      {/* ব্যাকগ্রাউন্ড ডার্ক ওভারলে (Overlay) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* মেইন কন্টেন্ট বক্স */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full text-white py-12">
        
        {/* উপরের বড় টেক্সট */}
        <h1 className="text-3xl md:text-4.5xl font-bold leading-tight mb-12 max-w-xl tracking-wide">
          Doing the right thing,<br />
          at the right time.
        </h1>

        {/* নিচের ৪টি কাউন্টার/স্ট্যাটস গ্রিড */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
          
          {/* ১. Suites */}
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light tracking-wide mb-1">
              15
            </span>
            <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-[0.15em] font-medium">
              Suites
            </span>
          </div>

          {/* ২. Rooms */}
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light tracking-wide mb-1">
              100
            </span>
            <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-[0.15em] font-medium">
              Rooms
            </span>
          </div>

          {/* ৩. Staff */}
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light tracking-wide mb-1">
              47
            </span>
            <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-[0.15em] font-medium">
              Staff
            </span>
          </div>

          {/* ৪. Services */}
          <div className="flex flex-col">
            <span className="text-4xl md:text-5xl font-light tracking-wide mb-1">
              10
            </span>
            <span className="text-[10px] md:text-xs text-gray-300 uppercase tracking-[0.15em] font-medium">
              Services
            </span>
          </div>

        </div>

      </div>
    </div>





<div className="w-full bg-white font-sans py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium block mb-1">
            Check Our
          </span>
          <div className="w-8 h-[1px] bg-gray-400 mx-auto mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-wide">
            Best Rooms
          </h2>
        </div>

        {/* রুম লিস্ট গ্রিড (২ কলাম লেআউট) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          
          {/* ১. Couple Suite (Sea View) */}
          <div className="flex gap-4 items-start">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/neeshorgo-standard-suite.jpg" alt="Room" className="w-28 h-20 object-cover bg-gray-100 shrink-0" />
            <div className="w-full">
              <div className="flex justify-between items-baseline border-b border-dotted border-gray-300 pb-1 mb-2">
                <h3 className="text-base font-bold text-gray-900 tracking-wide">Couple Suite (Sea View)</h3>
                <span className="text-sm font-bold text-gray-900 shrink-0 ml-2">Tk 6000</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                The Standard Guest Suite includes 32" LED Flat Screen TV's, Free high speed wireless internet access
              </p>
            </div>
          </div>

          {/* ২. Deluxe Premier Suite */}
          <div className="flex gap-4 items-start">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/deluxe-premier-suite-twin-hthumb.jpg" alt="Room" className="w-28 h-20 object-cover bg-gray-100 shrink-0" />
            <div className="w-full">
              <div className="flex justify-between items-baseline border-b border-dotted border-gray-300 pb-1 mb-2">
                <h3 className="text-base font-bold text-gray-900 tracking-wide">Deluxe Premier Suite</h3>
                <span className="text-sm font-bold text-gray-900 shrink-0 ml-2">Tk 8000</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Gracefully decorated one-bedroom suites offer one king-sized bed and a separate living space.
              </p>
            </div>
          </div>

          {/* ৩. Couple Suite (Hill View) */}
          <div className="flex gap-4 items-start">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/neeshorgo-standard-suite.jpg" alt="Room" className="w-28 h-20 object-cover bg-gray-100 shrink-0" />
            <div className="w-full">
              <div className="flex justify-between items-baseline border-b border-dotted border-gray-300 pb-1 mb-2">
                <h3 className="text-base font-bold text-gray-900 tracking-wide">Couple Suite (Hill View)</h3>
                <span className="text-sm font-bold text-gray-900 shrink-0 ml-2">Tk 6000</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                The Standard Guest Suite includes 32" LED Flat Screen TV's, Free high speed wireless internet access
              </p>
            </div>
          </div>

          {/* ৪. Premier Suite (Sea View) */}
          <div className="flex gap-4 items-start">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/premier-suite-hthumb.jpg" alt="Room" className="w-28 h-20 object-cover bg-gray-100 shrink-0" />
            <div className="w-full">
              <div className="flex justify-between items-baseline border-b border-dotted border-gray-300 pb-1 mb-2">
                <h3 className="text-base font-bold text-gray-900 tracking-wide">Premier Suite (Sea View)</h3>
                <span className="text-sm font-bold text-gray-900 shrink-0 ml-2">Tk 20000</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                Spacious, stylish and thoughtfully designed, Suites are the crown jewels of Neeshorgo, with two large, high-ceilinged bedrooms.
              </p>
            </div>
          </div>

          {/* ৫. Honeymoon Couple Suite */}
          <div className="flex gap-4 items-start">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/neeshorgo-standard-suite.jpg" alt="Room" className="w-28 h-20 object-cover bg-gray-100 shrink-0" />
            <div className="w-full">
              <div className="flex justify-between items-baseline border-b border-dotted border-gray-300 pb-1 mb-2">
                <h3 className="text-base font-bold text-gray-900 tracking-wide">Honeymoon Couple Suite</h3>
                <span className="text-sm font-bold text-gray-900 shrink-0 ml-2">Tk 6000</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                The Standard Guest Suite includes 32" LED Flat Screen TV's, Free high speed wireless internet access
              </p>
            </div>
          </div>

          {/* ৬. Executive Suite (Sea View) */}
          <div className="flex gap-4 items-start">
            <img src="https://neeshorgo.com.bd/wp-content/uploads/2017/06/executive-suite-hthumb.jpg" alt="Room" className="w-28 h-20 object-cover bg-gray-100 shrink-0" />
            <div className="w-full">
              <div className="flex justify-between items-baseline border-b border-dotted border-gray-300 pb-1 mb-2">
                <h3 className="text-base font-bold text-gray-900 tracking-wide">Executive Suite (Sea View)</h3>
                <span className="text-sm font-bold text-gray-900 shrink-0 ml-2">Tk 14000</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                With fresh, seaside-chic interiors and their own beachfront views
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>




</div>
  )
}

export default Amenities