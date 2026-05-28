
import Container from "/src/Componant/Common/Container"
const Bannerfour = () => {
  return (
   <section className="bg-[#efefef] py-20">
  <Container>

    <div className="grid grid-cols-1 lg:grid-cols-2">

      {/* Top Left Content */}
      <div className="bg-[#f5f5f5] px-8 md:px-16 py-16 flex flex-col justify-center">

        <p className="uppercase tracking-[4px] text-[13px] text-[#8f8f8f] mb-4 text-center lg:text-left">
          Fine Food
        </p>

        <div className="w-10 h-[1px] bg-[#8f8f8f] mb-6 mx-auto lg:mx-0"></div>

        <h2 className="text-4xl md:text-5xl font-light text-[#111] mb-10 text-center lg:text-left">
          Marine Drive Restaurant
        </h2>

        <p className="text-[#8b8b8b] text-[18px] leading-10 tracking-[1px] mb-12">
          Neeshorgo presents our elegantly decorated & designed “fine diner”.
          Our flagship restaurant is located on the first floor of Neeshorgo
          and can proudly host 150 guests at a time. We at Neeshorgo believe
          in maintaining precise quality and on-timeliness in every aspects of
          the service we provide. Our menu is uniquely designed to satisfy
          you're every culinary needs and cravings with item ranging from
          Indian to Chinese, Thai to quintessentially Bengali and Continental.
        </p>

        <button className="border border-[#c69c6d] text-[#c69c6d] hover:bg-[#c69c6d] hover:text-white duration-300 uppercase tracking-[3px] text-sm px-10 py-5 w-fit mx-auto lg:mx-0">
          Read More
        </button>

      </div>

      {/* Top Right Image */}
      <div className="overflow-hidden">
        <img
          src="https://neeshorgo.com.bd/wp-content/uploads/slider/cache/c696238ca5f3212bfeb9dc27c369123c/IMG_0336-f-Edit-3.jpg"
          alt="restaurant"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Left Image */}
      <div className="overflow-hidden order-4 lg:order-3">
        <img
          src="https://images.pexels.com/photos/29244071/pexels-photo-29244071.jpeg"
          alt="bbq"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Right Content */}
      <div className="bg-[#f5f5f5] px-8 md:px-16 py-16 flex flex-col justify-center order-3 lg:order-4">

        <p className="uppercase tracking-[4px] text-[13px] text-[#8f8f8f] mb-4 text-center lg:text-left">
          Full Entertainment
        </p>

        <div className="w-10 h-[1px] bg-[#8f8f8f] mb-6 mx-auto lg:mx-0"></div>

        <h2 className="text-4xl md:text-5xl font-light text-[#111] mb-10 text-center lg:text-left">
          Rooftop BBQ & Sea Foods
        </h2>

        <p className="text-[#8b8b8b] text-[18px] leading-10 tracking-[1px] mb-12">
          With mesmerizing view of the Bay of Bengal on one side and unique
          greenery of hill tops on the other. Neeshorgo is proud to present
          our “Rooftop BBQ & Sea Food Restaurant”. Our restaurant will give
          you a first row seat into the hypnotic beauty of the Bay of Bengal
          while enjoying 100% freshly made seasonal juices and various fish
          and meat BBQ prepared to satisfy your taste palates.
        </p>

        <button className="border border-[#c69c6d] text-[#c69c6d] hover:bg-[#c69c6d] hover:text-white duration-300 uppercase tracking-[3px] text-sm px-10 py-5 w-fit mx-auto lg:mx-0">
          Read More
        </button>

      </div>

    </div>

  </Container>
</section>
  )
}

export default Bannerfour