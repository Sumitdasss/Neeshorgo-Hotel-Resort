import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { ALL_ROOMS } from "/src/Data/Data1";
import {useRoomStore} from "/src/Data/store.js";
import "react-datepicker/dist/react-datepicker.css";
import {
  BedDouble,
  Users,
 ChevronDown, 
} from "lucide-react";
import DateBox from "../Layout/Datebox";
import { Link } from "react-router-dom";



export default function ResortSearchSystem() {

  const {
  setSelectedRoom,
  setBookingData,
  bookingData,
} = useRoomStore();
  const [checkIn, setCheckIn] =
  useState(
    bookingData?.checkIn
      ? new Date(
          bookingData.checkIn
        )
      : new Date()
  );

  const [checkOut, setCheckOut] =
  useState(
    bookingData?.checkOut
      ? new Date(
          bookingData.checkOut
        )
      : new Date(
          // eslint-disable-next-line react-hooks/purity
          Date.now() + 86400000
        )
  );

 const [guests, setGuests] =
  useState(
    bookingData?.guests || 1
  );

  const [maxPrice, setMaxPrice] = useState(30000);

  const [selectedServices, setSelectedServices] = useState([]);

  const [filteredRooms, setFilteredRooms] = useState(ALL_ROOMS);
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showPriceDropdown2, setShowPriceDropdown2] = useState(false);
  const [showSizeDropdown3, setShowSizeDropdown3] = useState(false);
  const [sortType, setSortType] = useState("");
const [currentPage, setCurrentPage] = useState(1);

const roomsPerPage = 4;
const lastRoomIndex = currentPage * roomsPerPage;

const firstRoomIndex =
  lastRoomIndex - roomsPerPage;

const currentRooms = filteredRooms.slice(
  firstRoomIndex,
  lastRoomIndex
);

const totalPages = Math.ceil(
  filteredRooms.length / roomsPerPage
);
const togglePriceDropdown = () => {
  setShowPriceDropdown(!showPriceDropdown); 
}
const togglePriceDropdown2 = () => {
  setShowPriceDropdown2(!showPriceDropdown2); 
}
const toggleSizeDropdown3 = () => {
  setShowSizeDropdown3(!showSizeDropdown3); 
}

  const services = [
    "Sea View",
    "Hill View",
    "King Beds",
    "Breakfast",
    "Swimming Pool",
    "Television",
    "Laundry",
    "Beach Loungers"
  ];

  const totalNights =
    Math.ceil(
      (checkOut.getTime() - checkIn.getTime()) /
        (1000 * 60 * 60 * 24)
    ) || 1;

  useEffect(() => {

  let filtered = ALL_ROOMS.filter((room) => {

    const guestMatch =
      room.guests >= guests;

   const priceMatch =
  room.price <= maxPrice;

    const serviceMatch =
      selectedServices.length === 0 ||
      selectedServices.every((service) =>
        room.services.includes(service)
      );

    return (
      guestMatch &&
      priceMatch &&
      serviceMatch
    );
  });

  // PRICE SORT
  if (sortType === "lowToHigh") {
    filtered.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortType === "highToLow") {
    filtered.sort(
      (a, b) => b.price - a.price
    );
  }

  // ROOM SIZE SORT
  if (sortType === "largeRoom") {
    filtered.sort(
      (a, b) => b.size - a.size
    );
  }

  if (sortType === "smallRoom") {
    filtered.sort(
      (a, b) => a.size - b.size
    );
  }

  // eslint-disable-next-line react-hooks/set-state-in-effect
  setFilteredRooms(filtered);
 
  setCurrentPage(1);
  

}, [
  guests,
  maxPrice,
  totalNights,
  selectedServices,
  sortType,
]);
useEffect(() => {
  setBookingData({
    checkIn,
    checkOut,
    guests,
    totalNights,
  });
}, [
  checkIn,
  checkOut,
  guests,
  totalNights,
  setBookingData,
]);



  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="bg-[#f4f4f4] min-h-screen py-20 px-4">
      <div className="max-w-[1440px] mx-auto">

        {/* Top Filter */}
        <div className="bg-[#b6c8d9] px-8 py-5 flex justify-center gap-17 uppercase tracking-[2px] text-[12px] text-[#1f3550] mb-14">
          <button onClick={togglePriceDropdown } className=" flex items-center relative focus:border-b border-[#1f3550] pb-1">
            Stay Price <ChevronDown size={16} className={`ml-1 duration-500`}/>

<div className={`absolute top-14 overflow-hidden duration-700 left-0 w-[150px] ${showPriceDropdown ? 'max-h-96' : 'max-h-0'} bg-white   z-50`}>

    <ul className="py-2">

    <li
  onClick={() => {
    setSortType("lowToHigh");
    setShowPriceDropdown(false);
  }}
  className="px-5 py-3 hover:bg-[#f4f4f4] cursor-pointer uppercase text-sm tracking-[1px] duration-300"
>
  Lowest Price
</li>
<li
  onClick={() => {
    setSortType("highToLow");
    setShowPriceDropdown(false);
  }}
  className="px-5 py-3 hover:bg-[#f4f4f4] cursor-pointer uppercase text-sm tracking-[1px] duration-300"
>
  Highest Price
</li>

     
    </ul>
  </div>

          </button>

         <button onClick={togglePriceDropdown2 } className=" flex items-center relative focus:border-b border-[#1f3550] pb-1">
            Room Size <ChevronDown size={16} className={`ml-1 duration-500`}/>

<div className={`absolute top-14 overflow-hidden duration-700 left-0 w-[200px] ${showPriceDropdown2 ? 'max-h-96' : 'max-h-0'} bg-white   z-50`}>

    <ul className="py-2">
<li
  onClick={() => {
    setSortType("largeRoom");
    setShowPriceDropdown2(false);
  }}
  className="px-5 py-3 hover:bg-[#f4f4f4] cursor-pointer uppercase text-sm tracking-[1px] duration-300"
>
  Larger Rooms
</li>

<li
  onClick={() => {
    setSortType("smallRoom");
    setShowPriceDropdown2(false);
  }}
  className="px-5 py-3 hover:bg-[#f4f4f4] cursor-pointer uppercase text-sm tracking-[1px] duration-300"
>
  Smallest Rooms
</li>

     
    </ul>
  </div>

          </button>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-10">

          {/* LEFT SIDEBAR */}
          <div>

            {/* Date Box */}
            <div className="bg-[#b6c8d9] p-6 grid grid-cols-2 gap-5 mt-10">

              {/* Check In */}
        <div className="bg-[#8eacc6] text-center py-5 w-full  h-full border-none outline-none focus:outline-none focus:ring-0">

  


  <DatePicker 
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

              {/* Check Out */}
        <div className="bg-[#8eacc6] text-center py-5  w-full h-full border-none outline-none focus:outline-none focus:ring-0">

  

  <DatePicker 
  selected={checkOut}
  onChange={(date) => setCheckOut(date)}
  minDate={
    new Date(checkIn.getTime() + 86400000)
  }
  dateFormat="dd MMM"
  customInput={<DateBox label="CHECK-OUT" />}
/>

</div>
              {/* Guests */}
              <div className="bg-[#8eacc6] text-center py-5">
                <p className="text-white text-[11px] tracking-[2px] mb-2">
                  GUESTS
                </p>

                <div className="flex justify-center items-center gap-4">
                  <span className="text-[#083b67] text-5xl font-bold">
                    {guests}
                  </span>

                  <div className="flex flex-col text-white">
                    <button
                      onClick={() =>
                        setGuests((prev) => prev + 1)
                      }
                    >
                      ▲
                    </button>

                    <button
                      onClick={() =>
                        setGuests((prev) =>
                          Math.max(1, prev - 1)
                        )
                      }
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>

              {/* Nights */}
              <div className="bg-[#8eacc6] text-center py-5">
                <p className="text-white text-[11px] tracking-[2px] mb-2">
                  NIGHTS
                </p>

                <div className="text-[#083b67] text-5xl font-bold">
                  {totalNights}
                </div>
              </div>
            </div>

            {/* Price */}
          {/* Price */}
{/* Price */}
<div className="mt-10 border-b border-gray-300 pb-8">

  {/* Top */}
  <div className="flex justify-between items-center mb-5">

    <h3 className="font-bold text-2xl text-[#1f3550]">
      Max Night Price :
    </h3>

    <span className="text-2xl font-bold text-[#1f4d78]">
      TK {maxPrice.toLocaleString()}
    </span>
  </div>

  {/* Range Wrapper */}
  <div className="relative w-full">

    {/* Background Line */}
    <div className="w-full h-[5px] bg-gray-300 rounded-full" />

    {/* Active Fill */}
    <div
      className="absolute top-0 left-0 h-[5px] bg-[#1f4d78] rounded-full"
      style={{
        width: `${
          ((maxPrice - 5000) / (30000 - 5000)) * 100
        }%`,
      }}
    />

    {/* Slider */}
    <input
      type="range"
      min="5000"
      max="30000"
      step="500"
      value={maxPrice}
      onChange={(e) =>
        setMaxPrice(Number(e.target.value))
      }
      className="absolute top-[-6px] left-0 w-full appearance-none bg-transparent cursor-pointer"
    />
  </div>

  {/* Labels */}
  <div className="flex justify-between items-center mt-5 text-sm">

    <span className="text-gray-500 font-medium">
      TK 5,000
    </span>

    <span className="bg-[#1f4d78] text-white px-4 py-1 rounded-full text-xs font-semibold">
      TK {maxPrice.toLocaleString()}
    </span>

    <span className="text-gray-500 font-medium">
      TK 30,000
    </span>
  </div>
</div>

            {/* Services */}
          <div className="relative">

  {/* Button */}
  <button
    onClick={toggleSizeDropdown3}
    className="text-2xl flex justify-between w-full items-center relative font-bold text-[#1f3550] mb-6"
  >
    Services

    <ChevronDown
      size={16}
      className={` duration-500 ${
        showSizeDropdown3 ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* Dropdown */}
  <div
    className={`grid absolute ${
      showSizeDropdown3
        ? "max-h-[200px] opacity-100"
        : "max-h-0 opacity-0"
    } w-[250px] z-50 duration-700 overflow-hidden top-15 grid-cols-2 gap-y-4`}
  >
    {services.map((service, index) => (
      <label
        key={index}
        className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
      >
        <input
          type="checkbox"
          checked={selectedServices.includes(service)}
          onChange={() =>
            handleServiceChange(service)
          }
        />

        {service}
      </label>
    ))}
  </div>
</div>
          </div>

          {/* RIGHT SIDE ROOMS */}
        {/* RIGHT SIDE ROOMS */}
<div className="grid md:grid-cols-2 gap-8">

  {currentRooms.map((room, index) => (
    <div
      key={room.id}
      className="bg-white border border-gray-200 overflow-hidden 
      opacity-0 translate-y-10 animate-[fadeUp_.6s_ease_forwards]"
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
    >

      {/* Image */}
      <div className="h-[320px] overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover hover:scale-105 duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6">

       <Link to={`/roomsdetails/${room.id}`} onClick={() => setSelectedRoom(room)}>
         <h2 className="text-[30px] leading-tight font-bold text-[#2b2b2b]">
           {room.title}
           <br />
           ({room.view})
         </h2>
       </Link>

        {/* Meta */}
        <div className="flex items-center gap-6 mt-5 text-gray-500 text-sm">

          <div className="flex items-center gap-2">
            <Users size={16} />
            {room.guests} Guests
          </div>

          <div className="flex items-center gap-2">
            <BedDouble size={16} />
            {room.size} Ft²
          </div>
        </div>

        {/* Desc */}
        <p className="text-gray-600 leading-8 text-[15px] mt-6">
          The Standard Guest Suite includes 32'
          LED Flat Screen TV’s, Free high
          speed wireless internet access.
        </p>

        {/* Price */}
        <div className="mt-6 text-right">
          <p className="text-red-400 line-through text-sm">
            TK {room.oldPrice} / PER NIGHT
          </p>

         <p className="text-black font-bold text-2xl">
  TK {room.price} / PER NIGHT
</p>

<p className="text-gray-500 text-sm mt-1">
  TOTAL: TK {room.price * totalNights}
</p>
        </div>

        {/* Button */}
        <Link  to="/booking"
  onClick={() => {
    setSelectedRoom(room);

    setBookingData({
      room,
      checkIn,
      checkOut,
      guests,
      totalNights,
      totalPrice:
        room.price * totalNights,
    });
  }}><button className="mt-6 w-full border border-[#c7a57a] py-4 uppercase tracking-[3px] text-[12px] text-[#c7a57a] hover:bg-[#c7a57a] hover:text-white duration-300">
          Book Now
        </button>
        </Link>

        {/* Bottom Icons */}
       <div className="flex justify-between items-center mt-8 border-t pt-5">

<div className="flex gap-4 text-gray-500">
  {room.icon?.map((item, index) => (

    <div
      key={index}
      className="relative group cursor-pointer"
    >

      <img
        src={item.icon}
        alt={item.title}
        className="w-6 h-6 object-contain hover:scale-110 duration-300"
      />

      <span
        className="
          absolute
          -top-10
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          bg-black
          text-white
          text-xs
          px-3
          py-1
          rounded
          opacity-0
          invisible
          group-hover:opacity-100
          group-hover:visible
          duration-300
          z-50
        "
      >
        {item.title}
      </span>

    </div>

  ))}
</div>
 <Link to={`/roomsdetails/${room.id}`} onClick={() => setSelectedRoom(room)}>
    <button  className="uppercase tracking-[2px] cursor-pointer text-[11px] text-[#c7a57a]">
      Full Info →
    </button>
  </Link>

</div>
      </div>
    </div>
  ))}



{/* Pagination */}
<div className="col-span-full  flex justify-center items-center gap-8 mt-16">

  {Array.from(
    { length: totalPages },
    (_, index) => (
      <button
        key={index}
        onClick={() =>
          setCurrentPage(index + 1)
        }
        className={`font-semibold text-[20px] bg-amber-600 px-4 py-1 duration-300 ${
          currentPage === index + 1
            ? "text-white"
            : "text-[#2b2b2b] hover:text-[#1f3550]"
        }`}
      >
        {index + 1}
      </button>
    )
  )}

</div>
</div>
        </div>
      </div>
    </section>
  );
}