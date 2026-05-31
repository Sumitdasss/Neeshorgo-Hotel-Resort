import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img11 from "/src/assets/unnamed.jpg";
import Slider from "react-slick";
import  Button  from "/src/Componant/Common/Button";
import { Link } from 'react-router-dom';
const SlickSlider=Slider.default?Slider.default:Slider;
const Sliderx = () => {
 var settings = {
   dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  accessibility: false,
  };


  return (


    <SlickSlider {...settings}>
   <div className="relative w-full h-[780px] overflow-hidden">
  
  {/* Background Image */}
  <img
  src={img11}
  alt="restaurant"
  className="w-full h-full object-cover "
/>

  <div className="absolute inset-0 bg-black/45"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    
    {/* Small Title */}
    <p className="uppercase font-medium tracking-[3px] text-lg border-b-3 border-white pb-2 mb-6">
     Welcome To
    </p>

    {/* Main Heading */}
    <h1 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
  Neeshorgo Hotel & Resort
    </h1>

    {/* Button */}
   <Link  to="/rooms"> <Button Text="Book Now" className="border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black duration-300">

    </Button>
    </Link>
  </div>

  {/* Left Arrow */}
  
</div>
   <div className="relative w-full h-[780px] overflow-hidden">
  <div className="bg-blue-400/20 absolute w-full h-full "></div>
  {/* Background Image */}
  <img
    src="https://neeshorgo.com.bd/wp-content/uploads/slider/cache/c696238ca5f3212bfeb9dc27c369123c/IMG_0336-f-Edit-3.jpg"
    alt="restaurant"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    
    {/* Small Title */}
    <p className="uppercase font-medium tracking-[3px] text-lg border-b-2 border-white pb-2 mb-6">
      Marine Drive Restaurant
    </p>

    {/* Main Heading */}
    <h1 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
      Enjoy breakfast, lunch and dinner
    </h1>

    {/* Button */}
   <Link to="/restaurants"> <Button Text="Read more" className="border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black duration-300">
    
    </Button>
    </Link>
  </div>

  {/* Left Arrow */}
  
</div>
   <div className="relative w-full h-[780px] overflow-hidden">
  <div className="bg-blue-400/20 absolute w-full h-full "></div>
  {/* Background Image */}
  <img
    src="https://neeshorgo.com.bd/wp-content/uploads/slider/cache/ed8bca24ee7590a7799efe0feceb8c79/IMG_0876-scaled.jpg"
    alt="restaurant"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    
    {/* Small Title */}
    <p className="uppercase font-medium tracking-[3px] text-lg border-b-3 border-white pb-2 mb-6">
     Feel at home
    </p>

    {/* Main Heading */}
    <h1 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
      Revel in true hospitality for a luxurious living experience
    </h1>

    {/* Button */}
   
   
   <Link  to="/rooms"> <Button Text="View Rooms" className="border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black duration-300">
    
    </Button>

    </Link>
  </div>

  {/* Left Arrow */}
  
</div>
</SlickSlider>
  )
}

export default Sliderx