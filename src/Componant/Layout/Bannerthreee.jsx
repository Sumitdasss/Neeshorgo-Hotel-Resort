

const Bannerthreee = () => {
  return (
    <div className="bg-[#1a1a1a] overflow-hidden">

  <div className="flex flex-col lg:flex-row items-center">

    {/* Left Image */}
    <div className="h-[320px] sm:h-[450px] lg:h-[750px] p-5 lg:p-0 md:p-0 w-full lg:w-[50%] overflow-hidden">
      <img
        src="https://images.pexels.com/photos/13338242/pexels-photo-13338242.jpeg"
        alt="Lobby"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="bg-[#1a1a1a] text-white w-full lg:w-[50%] px-5 sm:px-10 md:px-16 lg:px-24 py-14 lg:py-0">

      {/* Small Title */}
      <p className="uppercase tracking-[4px] text-[13px] text-white mb-6 pt-0">
        Unexpected
      </p>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-4xl leading-tight font-light mb-10 lg:mb-14">
        WE TAKE CARE OF YOU
        <br />
        <span className="text-[#c69c6d]">
          LIKE YOU ARE OUR OWN.
        </span>
      </h2>

      {/* Paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-10 lg:mb-14">

        <p className="text-[16px] sm:text-[18px] lg:text-[19px] leading-8 sm:leading-9 lg:leading-10 text-[#e5e5e5]">
          With the reassurance, hospitality and warmth of
          Neeshorgo Hotel & Resort, guests are welcomed to the
          perfect combination of luxury apartment style living
          and leading hotels services.
        </p>

        <p className="text-[16px] sm:text-[18px] lg:text-[19px] leading-8 sm:leading-9 lg:leading-10 text-[#e5e5e5]">
          There is a fitness center and an indoor pool at this
          luxury hotel. Car rental service is available in the
          lobby, along with a concierge desk and 24-hour
          reception. Breakfast is available for a fee.
        </p>

      </div>

      {/* Button */}
      <button className="bg-[#c69c6d] hover:bg-[#b88a57] text-white px-8 sm:px-10 py-4 sm:py-5 uppercase tracking-[3px] text-xs sm:text-sm font-semibold transition-all duration-300">
        Check All Packages
      </button>

    </div>

  </div>
</div>
  )
}

export default Bannerthreee