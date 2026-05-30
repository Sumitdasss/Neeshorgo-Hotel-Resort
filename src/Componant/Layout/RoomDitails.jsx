/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link,} from "react-router-dom";
import { ALL_ROOMS } from "/src/Data/Data1.jsx";

import {useRoomStore} from "/src/Data/store.js";

const SlickSlider=Slider.default?Slider.default:Slider;
import {
  Users,
  Square,
  BedDouble,
  Calendar,
  Waves,
  Tv,
  WashingMachine,
  Utensils,
  Umbrella,
} from "lucide-react";

import {  useState } from "react";
import DatePicker from "react-datepicker";
import DateBox from "./Datebox";

const RoomDetails = () => {

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // পিসিতে ৩টি
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // ট্যাবলেটে ২টি
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1, // মোবাইলে ১টি (এতে কার্ড চ্যাপ্টা হবে না)
        centerMode: true, // দুই পাশে সামান্য জায়গা রাখার জন্য
        centerPadding: '20px',
      }
    }
  ]
};





const generateWeeklyData = () => {







  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const data = [];

  // বর্তমান তারিখ থেকে এই সপ্তাহের সোমবার খুঁজে বের করা
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (Sun) to 6 (Sat)
  const diffToMonday = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const currentMonday = new Date(now.setDate(diffToMonday));

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  days.forEach((day, index) => {
    // Previous Week Date
    const prevDate = new Date(currentMonday);
    prevDate.setDate(currentMonday.getDate() - 7 + index);

    // Current Week Date
    const currDate = new Date(currentMonday);
    currDate.setDate(currentMonday.getDate() + index);

    // Next Week Date
    const nextDate = new Date(currentMonday);
    nextDate.setDate(currentMonday.getDate() + 7 + index);

    data.push({
      day,
      prev: "5000 TK", // এখানে আপনি আপনার রুমের প্রাইস ভেরিয়েবল দিতে পারেন
      curr: "5000 TK",
      next: "5000 TK",
      prevDate: formatDate(prevDate),
      currDate: formatDate(currDate),
      nextDate: formatDate(nextDate),
    });
  });

  return data;
};

const [showPriceList, setShowPriceList] = useState(false);
  const priceData = generateWeeklyData();
const [guestCount, setGuestCount] = useState(1);



     const [checkIn, setCheckIn] = useState(new Date());

  const [checkOut, setCheckOut] = useState(
    // eslint-disable-next-line react-hooks/purity
    new Date(Date.now() + 86400000)
  );
  



 


  const totalNights =
    Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) /
        (1000 * 60 * 60 * 24)
    ) || 1;

    
  const selectedRoom = useRoomStore(
  (state) => state.selectedRoom
);
const {setSelectedRoom,setBookingData} = useRoomStore();
const product =selectedRoom || allProducts.find( (item) => Number(item.id) === Number(id));


const bookingData = useRoomStore(
  (state) => state.bookingData
);

const maxGuests = bookingData?.guests || 1;


  if (!product) {
    return (
      <div className="text-center py-20 text-2xl">
        Product not found!
      </div>
    );
  }

  
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8 font-sans text-[#333333]">

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#0f2d4a] mb-6">
        {product.title} ({product.view})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md mb-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6 text-center">

            <div className="flex flex-col items-center">
              <Users className="w-6 h-6 text-gray-400 mb-2" />
              <span>{product.guests} Guests</span>
            </div>

            <div className="flex flex-col items-center">
              <Square className="w-6 h-6 text-gray-400 mb-2" />
              <span>{product.size} Ft²</span>
            </div>

            <div className="flex flex-col items-center">
              <BedDouble className="w-6 h-6 text-gray-400 mb-2" />

              <span className="line-through text-red-500 text-xs">
                TK {product.oldPrice}
              </span>

              <span className="font-bold text-[#0f2d4a]">
                TK {product.price * totalNights}
              </span>
            </div>
<div className="relative">
  
  {/* Week Price Button */}
  <div
    onClick={() => setShowPriceList(!showPriceList)}
    className="cursor-pointer flex flex-col items-center"
  >
    <Calendar className="w-6 h-6 text-gray-400 mb-2" />
    <span>WEEK PRICE</span>
  </div>

  {showPriceList && (
    
    <div
      className="
        absolute
        bottom-full
        mb-4
        left-1/2
        -translate-x-1/2
        z-[100]

        w-[95vw]
        sm:w-[600px]
        lg:w-[700px]

        max-w-[700px]

        bg-white
        shadow-2xl
        rounded-lg
        border
        border-gray-300
      "
    >

      {/* Header */}
      <div className="bg-[#0f2d4a] text-white grid grid-cols-3 text-center py-3 font-bold text-[9px] sm:text-xs uppercase">
        
        <div className="border-r border-white/10 px-1">
          Previous Week
        </div>

        <div className="border-r border-white/10 px-1">
          Current Week
        </div>

        <div className="px-1">
          Next Week
        </div>

      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">

        <table className="min-w-[650px] w-full text-[9px] sm:text-[10px] text-center border-collapse">

          <thead>
            <tr className="bg-gray-100 text-gray-500 uppercase">

              <th className="p-2 border">
                Day / Date
              </th>

              <th className="p-2 border">
                Price
              </th>

              <th className="p-2 border">
                Day / Date
              </th>

              <th className="p-2 border">
                Price
              </th>

              <th className="p-2 border">
                Day / Date
              </th>

              <th className="p-2 border">
                Price
              </th>

            </tr>
          </thead>

          <tbody>

            {priceData.map((row, index) => (

              <tr
                key={index}
                className="hover:bg-blue-50 border-b transition-colors"
              >

                {/* Previous Week */}
                <td className="p-2 border bg-gray-50/30">
                  <div className="font-bold">
                    {row.day}
                  </div>

                  <div className="text-[8px] sm:text-[9px] text-gray-400">
                    {row.prevDate}
                  </div>
                </td>

                <td className="p-2 border text-gray-500 italic">
                  {row.prev}
                </td>

                {/* Current Week */}
                <td className="p-2 border bg-blue-50">
                  <div className="font-bold text-[#0f2d4a]">
                    {row.day}
                  </div>

                  <div className="text-[8px] sm:text-[9px] text-blue-600 font-medium">
                    {row.currDate}
                  </div>
                </td>

                <td className="p-2 border bg-blue-50 font-bold text-[#0f2d4a]">
                  {row.curr}
                </td>

                {/* Next Week */}
                <td className="p-2 border bg-gray-50/30">
                  <div className="font-bold">
                    {row.day}
                  </div>

                  <div className="text-[8px] sm:text-[9px] text-gray-400">
                    {row.nextDate}
                  </div>
                </td>

                <td className="p-2 border text-gray-500 italic">
                  {row.next}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )}
</div>
          </div>

          {/* DESCRIPTION */}
          <div className="py-6 space-y-4 text-gray-600 leading-relaxed">

            <p>
              The Standard Guest Suite includes 32"
              LED Flat Screen TV's, Free high speed
              wireless internet access, luxurious beds,
              complimentary breakfast and modern
              bathroom facilities.
            </p>

            <div>
              <h3 className="font-semibold text-[#0f2d4a] mb-2">
                Complimentary with Suite:
              </h3>

              <ul className="list-disc pl-5 space-y-1">
                <li>Welcome Drinks</li>
                <li>Buffet Breakfast</li>
                <li>Infinity Swimming Pool</li>
                <li>Gym Access</li>
                <li>WiFi Access</li>
              </ul>
            </div>

          </div>

          <hr className="my-6" />

          {/* SERVICES */}
          <div>

            <h2 className="text-xl font-bold text-[#0f2d4a] mb-4">
              Room Services
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

              <div className="flex items-center gap-3">
                <Waves className="w-5 h-5 text-gray-400" />
                <span>Sea View</span>
              </div>

              <div className="flex items-center gap-3">
                <WashingMachine className="w-5 h-5 text-gray-400" />
                <span>Laundry</span>
              </div>

              <div className="flex items-center gap-3">
                <Utensils className="w-5 h-5 text-gray-400" />
                <span>Breakfast</span>
              </div>

              <div className="flex items-center gap-3">
                <Tv className="w-5 h-5 text-gray-400" />
                <span>Television</span>
              </div>

              <div className="flex items-center gap-3">
                <Waves className="w-5 h-5 text-gray-400" />
                <span>Swimming Pool</span>
              </div>

              <div className="flex items-center gap-3">
                <Umbrella className="w-5 h-5 text-gray-400" />
                <span>Beach Loungers</span>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <div className="bg-[#b9cfe3] p-6 rounded-md sticky top-6">

            <div className="grid grid-cols-2 gap-4 mb-5">

              {/* CHECK IN */}
              <div className="bg-[#8eacc6] text-center py-5 w-full h-full border-none outline-none focus:outline-none focus:ring-0">
             
               
             
             
               <DatePicker className="r"
               selected={checkIn}
               onChange={(date) => {
                 setCheckIn(date);
             
                 if (date >= checkOut) {
                   setCheckOut(
                     new Date(date.getTime() + 86400000)
                   );
                 }
               }}
               minDate={new Date()}
               dateFormat="dd MMM"
               customInput={<DateBox label="CHECK-IN" />}
             />
               
             </div>

              {/* CHECK OUT */}
              <div className="bg-[#8eacc6] text-center py-5 w-full h-full  border-none outline-none focus:outline-none focus:ring-0">
             
               
             
               <DatePicker className=""
               selected={checkOut}
               onChange={(date) => setCheckOut(date)}
               minDate={
                 new Date(checkIn.getTime() + 86400000)
               }
               dateFormat="dd MMM"
               customInput={<DateBox label="CHECK-OUT" />}
             />
             
             </div>

              {/* GUEST */}
             <div className="bg-[#8eacc6] text-center py-5">
                <p className="text-white text-[11px] tracking-[2px] mb-2">
                  GUESTS
                </p>

                <div className="flex justify-center items-center gap-4">
                  <span className="text-[#083b67] text-5xl font-bold">
                    {guestCount}
                  </span>

                  <div className="flex flex-col text-white">
                    <button
                      onClick={() =>
                        setGuestCount((prev) => Math.min(maxGuests, prev + 1))
                      }
                    >
                      ▲
                    </button>

                    <button
                      onClick={() =>
                        setGuestCount((prev) =>
                          Math.max(1, prev - 1)
                        )
                      }
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              {/* NIGHTS */}
              <div className="bg-[#7fa1c3] text-white p-4 h-28 rounded-md flex flex-col justify-between">
                <span className="text-xs uppercase">
                  {totalNights} Nights
                </span>

                <span className="text-4xl font-bold">
                  {totalNights}
                </span>
              </div>

            </div>

           <Link to="/booking"   onClick={() => {
   setSelectedRoom(product);

    setBookingData({
      room: product,
      checkIn,
      checkOut,
      guests: guestCount,
      totalNights,
      totalPrice: product.price * totalNights,
    });
  }}> <button className="w-full bg-[#004274] hover:bg-[#00335c] text-white font-bold py-3 rounded-md uppercase tracking-widest text-xs duration-300">
              Book Now
            </button>
</Link>
          </div>

        </div>

      </div>




{/* RELATED ROOMS */}

<div className="mt-20">
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-[#0f2d4a] mb-3">
      Related Rooms
    </h2>
    <p className="text-gray-500 text-lg">
      Discover more luxury rooms
    </p>
  </div>

  <div className="px-4 slider-container"> {/* কন্টেইনার গ্যাপ ঠিক রাখার জন্য */}
  <SlickSlider {...settings}>
    {ALL_ROOMS.filter(
      (item) => item.id !== product.id
    ).map((room, index) => (
      
      /* স্লাইডারের সরাসরি চাইল্ড ডিভে শুধু প্যাডিং থাকবে, কোনো উইডথ বা ফ্লেক্স ক্লাস দেওয়া যাবে না */
      <div key={room.id} className="px-3 py-4 outline-none"> 

        {/* আসল কার্ড: এখানে w-full ব্যবহার করতে হবে যাতে স্লাইডারের উইডথ অনুযায়ী কার্ড নিজেই অ্যাডজাস্ট হয় */}
        <div
          className="bg-white border border-gray-200 overflow-hidden rounded-md shadow-sm flex flex-col h-full w-full"
          style={{
            animationDelay: `${index * 0.15}s`,
          }}
        >
          {/* Image */}
          <div className="h-[250px] sm:h-[300px] overflow-hidden shrink-0">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover hover:scale-105 duration-700"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <Link 
              to={`/roomsdetails/${room.id}`} 
              onClick={() => setSelectedRoom(room)} 
              className="hover:text-[#0f2d4a] transition-colors duration-300 block mb-2"
            >
              {/* টাইটেল ফিক্স: whitespace-normal এবং break-words লেখা নিচে নামাবে, আর min-h সব কার্ডের হাইট সমান রাখবে */}
              <h2 className="text-[20px] sm:text-[24px] leading-tight font-bold text-[#2b2b2b] break-words whitespace-normal min-h-[64px]">
                {room.title}
                <span className="text-sm font-normal text-gray-500 block mt-1">({room.view})</span>
              </h2>
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-6 mt-3 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{room.guests} Guests</span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble size={16} />
                <span>{room.size} Ft²</span>
              </div>
            </div>

            {/* Desc - line clamp ব্যবহার করা হয়েছে যাতে ডেসক্রিপশন ৩ লাইনের বেশি না বড় হয় */}
            <p className="text-gray-600 leading-relaxed text-[14px] mt-4 line-clamp-3 flex-grow">
              The Standard Guest Suite includes 32" LED Flat Screen TV’s, Free high speed wireless internet access.
            </p>

            {/* Price */}
            <div className="mt-6 pt-4 border-t border-gray-100 text-right">
              {room.oldPrice && (
                <p className="text-red-400 line-through text-xs">
                  TK {room.oldPrice} / PER NIGHT
                </p>
              )}
              <p className="text-[#0f2d4a] font-bold text-xl sm:text-2xl">
                TK {room.price} / PER NIGHT
              </p>
              <p className="text-gray-400 text-xs mt-1">
                TOTAL: TK {room.price * (totalNights || 1)}
              </p>
            </div>

            {/* Button */}
            <Link 
              to="/booking" 
              onClick={() => {
                setSelectedRoom(room);
                setBookingData({
                  room: room,
                  checkIn: checkIn,
                  checkOut: checkOut,
                  guests: guestCount,
                  totalNights: totalNights,
                  totalPrice: room.price * totalNights,
                });
              }} 
            > 
              <button className="mt-5 w-full border border-[#c7a57a] py-3.5 uppercase tracking-[2px] text-[11px] text-[#c7a57a] hover:bg-[#c7a57a] hover:text-white duration-300 font-semibold rounded-sm">
                Book Now
              </button>
            </Link>

            {/* Bottom Icons */}
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <div className="flex gap-3 text-gray-500">
                {room.icon?.map((item, iconIdx) => (
                  <div key={iconIdx} className="relative group cursor-pointer">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-5 h-5 object-contain hover:scale-110 duration-300"
                    />
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 z-50">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
              
              <Link 
                to={`/roomsdetails/${room.id}`} 
                onClick={() => setSelectedRoom(room)} 
                className="uppercase tracking-[1px] text-[11px] text-[#c7a57a] hover:underline font-medium"
              >
                Full Info →
              </Link>
            </div>
          </div>
        </div>

      </div>
    ))}
  </SlickSlider>
</div>
</div>




    </div>
  );
};

export default RoomDetails;