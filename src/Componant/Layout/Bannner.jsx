import Container from "/src/Componant/Common/Container";

const Bannner = () => {
  return (
  <section className="bg-white py-16 pl-10 lg:pl-0 md:pl-0 lg:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
  <Container>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

      {/* Left Content */}
      <div className="w-full lg:w-1/2">
        <p className="text-sm tracking-[4px] text-[#b58b63] uppercase mb-3">
          Neeshorgo Hotel & Resort
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#111] leading-tight mb-4">
          Relax in our Resort
        </h2>

        <p className="text-[#444] text-base sm:text-lg leading-8 sm:leading-10 max-w-xl mb-10">
          Neeshorgo Hotel & Resort brings a refreshed commitment to hospitality
          leadership to meet the changing travel industry and the bespoke needs
          of our guests. We provide exceptional service in all of our hotels
          across the globe and strive to deliver a hospitality experience that
          is beyond guest expectations.
        </p>

        <button className="bg-[#c69c6d] hover:bg-[#b78c5c] transition-all duration-300 text-white px-8 sm:px-10 py-3 sm:py-4 tracking-[3px] uppercase text-sm">
          About Us
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-[650px] h-[300px] sm:h-[450px] lg:h-[650px]">
          <img
            src="https://neeshorgo.com.bd/wp-content/uploads/2023/02/neeshorgo_hotel_home_main-min.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </Container>
</section>
  )
}

export default Bannner