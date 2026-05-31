import { Link } from "react-router-dom"


const About = () => {
  return (
    <div className="w-full bg-white font-sans py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* ১. হেডার টাইটেল */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          About Us
        </h2>

        {/* ২. টেক্সট এবং বড় ইমেজ সেকশন */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
          {/* টেক্সট কন্টেন্ট */}
          <div className="md:w-1/2 space-y-6 text-gray-500 text-sm leading-relaxed text-justify">
            <p>
              Neeshorgo Hotel & Resort brings a refreshed commitment to
              hospitality leadership to meet the changing travel industry and the
              bespoke needs of our guests. We provide exceptional service in all of
              our hotels across the globe and strive to deliver a hospitality
              experience that is beyond guest expectations.
            </p>
            <p>
              Neeshorgo Hotel & resort is committed to the philosophy that
              forward-thinking design, service and guest experiences should be
              available across market segments. Neeshorgo Hotel & Resort is
              dedicated to offering travelers an authentic connection to their
              chosen destination through a truly original approach.
            </p>
          </div>

          {/* বড় ইমেজ */}
          <div className="md:w-1/2 w-full">
            <img 
              src="https://picsum.photos/600/400?random=10" 
              alt="Pool side" 
              className="w-full h-auto rounded-sm shadow-sm"
            />
          </div>
        </div>

        {/* ৩. নিচের ৩টি কার্ড সেকশন */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* কার্ড ১ - Top Restaurant */}
          <div className="relative group overflow-hidden">
            <img src="https://picsum.photos/400/300?random=11" alt="Restaurant" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-center text-white">
              <h3 className="text-lg font-bold tracking-widest uppercase">Top Restaurant</h3>
              <p className="text-[10px] tracking-[0.2em] uppercase mt-1">Breakfast & Dinner</p>
            </div>
          </div>

          {/* কার্ড ২ - Infinity Pool */}
          <div className="relative group overflow-hidden">
            <img src="https://picsum.photos/400/300?random=12" alt="Pool" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-center text-white">
              <h3 className="text-lg font-bold tracking-widest uppercase">Infinity Pool</h3>
              <p className="text-[10px] tracking-[0.2em] uppercase mt-1">Open Daily</p>
            </div>
          </div>

          {/* কার্ড ৩ - Best Suites */}
          <div className="relative group overflow-hidden">
            <img src="https://picsum.photos/400/300?random=13" alt="Suites" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-center text-white">
              <h3 className="text-lg font-bold tracking-widest uppercase">Best Suites</h3>
              <p className="text-[10px] tracking-[0.2em] uppercase mt-1">Cool View</p>
            </div>
          </div>

        </div>

      </div>

<div 
      className="w-full h-[500px] bg-cover bg-center bg-no-repeat mt-20 relative flex items-center"
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
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* ২ কলামের গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
          
          {/* ১. Welcome Drink / Lobby Service */}
          <div className="flex gap-6 items-start">
           < img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-13.png" alt="Welcome Drink" className="w-16 h-16 object-cover  shrink-0" />
            <p className="text-sm text-gray-400 leading-relaxed font-light text-justify">
              Enjoy the hospitality of Neeshorgo Hotel & resort in the lobby while our staff is taking care of your check -in.
            </p>
          </div>

          {/* ২. Television / Entertainment */}
          <div className="flex gap-6 items-start">
                       < img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-18.png" alt="Welcome Drink" className="w-16 h-16 object-cover  shrink-0" />
            <p className="text-sm text-gray-400 leading-relaxed font-light text-justify">
              Chilling out on the bed in your hotel room watching television is sometimes the best part of a vacation.
            </p>
          </div>

          {/* ৩. High Speed Internet */}
          <div className="flex gap-6 items-start">
                   < img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-12-1.png" alt="Welcome Drink" className="w-16 h-16 object-cover shrink-0" />
            <p className="text-sm text-gray-400 leading-relaxed font-light text-justify">
              High Speed Internet. While service and amenities play an important role, the availability of complimentary high speed hotel WiFi internet can make or break guest satisfaction.
            </p>
          </div>

          {/* ৪. Infinity Pool / View */}
          <div className="flex gap-6 items-start">
                 < img src="https://neeshorgo.com.bd/wp-content/uploads/2017/07/icon-14-1.png" alt="Welcome Drink" className="w-16 h-16 object-cover shrink-0" />
            <p className="text-sm text-gray-400 leading-relaxed font-light text-justify">
              It's hard to find a bad view in Neeshorgo. But you can kick things up a notch with the roof top Infinity pool at the Neeshorgo Hotel & Resort. It overlooks the Mountain View on the East Side and Sea side view on the West.
            </p>
          </div>

        </div>

        {/* নিচের গোল্ডেন/ব্রাউন বাটন */}
        <div className="text-center">
         <Link to="/amenities"><button 
            type="button"
            className="bg-[#b39349] text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 hover:bg-[#9e803e] transition-colors duration-200"
          >
            Check All Services
          </button>
          </Link> 
        </div>

      </div>
    </div>



    </div>
  )
}

export default About