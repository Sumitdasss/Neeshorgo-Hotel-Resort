/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/purity */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Link } from "react-router-dom";
import { ALL_ROOMS } from "/src/Data/Data1.jsx";
import { useRoomStore } from "/src/Data/store.js";

// --- GSAP ইমপোর্ট ---
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

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

import DatePicker from "react-datepicker";
import DateBox from "./Datebox";

const RoomDetails = () => {
  // --- Refs for Animation ---
  const pageRef = useRef(null);
  const imageRef = useRef(null);
  const sidebarRef = useRef(null);

  const generateWeeklyData = () => {
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const data = [];
    const now = new Date();
    const dayOfWeek = now.getDay();
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
      const prevDate = new Date(currentMonday);
      prevDate.setDate(currentMonday.getDate() - 7 + index);
      const currDate = new Date(currentMonday);
      currDate.setDate(currentMonday.getDate() + index);
      const nextDate = new Date(currentMonday);
      nextDate.setDate(currentMonday.getDate() + 7 + index);

      data.push({
        day,
        prev: "5000 TK",
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
  const [checkOut, setCheckOut] = useState(new Date(Date.now() + 86400000));

  const totalNights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) || 1;

  const selectedRoom = useRoomStore((state) => state.selectedRoom);
  const { setSelectedRoom, setBookingData } = useRoomStore();
  const product = selectedRoom || ALL_ROOMS[0]; // fallback logic

  const bookingData = useRoomStore((state) => state.bookingData);
  const maxGuests = product?.guests || 1;

  // --- GSAP Animation Hook ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // টাইটেল এবং ইমেজ এনিমেশন
      gsap.from(".anim-title", { y: -30, opacity: 0, duration: 0.8, ease: "power3.out" });
      gsap.from(imageRef.current, { scale: 1.1, opacity: 0, duration: 1.2, ease: "power2.out" });
      
      // ফিচারের আইকনগুলো একে একে আসবে (Stagger)
      gsap.from(".feature-item", { 
        y: 20, 
        opacity: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out" 
      });

      // সাইডবার বুকিং বক্স এনিমেশন
      gsap.from(sidebarRef.current, { 
        x: 50, 
        opacity: 0, 
        duration: 1, 
        delay: 0.3, 
        ease: "power3.out" 
      });

      // সার্ভিস লিস্ট এনিমেশন
      gsap.from(".service-item", { 
        opacity: 0, 
        x: -20, 
        duration: 0.5, 
        stagger: 0.05, 
        scrollTrigger: {
            trigger: ".service-grid",
            start: "top 80%"
        }
      });
    }, pageRef);
    return () => ctx.revert();
  }, [product]);

  if (!product) {
    return <div className="text-center py-20 text-2xl">Product not found!</div>;
  }

  return (
    <div ref={pageRef} className="max-w-[1440px] mx-auto px-4 py-8 font-sans text-[#333333]">

      {/* Title */}
      <h1 className="anim-title text-3xl font-bold text-[#0f2d4a] mb-6">
        {product.title} ({product.view})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-2">

          {/* IMAGE */}
          <div ref={imageRef} className="w-full h-[400px] rounded-lg overflow-hidden shadow-md mb-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* FEATURES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-gray-200 pb-6 text-center">

            <div className="feature-item flex flex-col items-center">
              <Users className="w-6 h-6 text-gray-400 mb-2" />
              <span>{product.guests} Guests</span>
            </div>

            <div className="feature-item flex flex-col items-center">
              <Square className="w-6 h-6 text-gray-400 mb-2" />
              <span>{product.size} Ft²</span>
            </div>

            <div className="feature-item flex flex-col items-center">
              <BedDouble className="w-6 h-6 text-gray-400 mb-2" />
              <span className="line-through text-red-500 text-xs">TK {product.oldPrice}</span>
              <span className="font-bold text-[#0f2d4a]">TK {product.price * totalNights}</span>
            </div>

            <div className="feature-item relative">
              <div onClick={() => setShowPriceList(!showPriceList)} className="cursor-pointer flex flex-col items-center">
                <Calendar className="w-6 h-6 text-gray-400 mb-2" />
                <span>WEEK PRICE</span>
              </div>

              {showPriceList && (
                <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 z-[100] w-[95vw] sm:w-[600px] lg:w-[700px] max-w-[700px] bg-white shadow-2xl rounded-lg border border-gray-300">
                  <div className="bg-[#0f2d4a] text-white grid grid-cols-3 text-center py-3 font-bold text-[9px] sm:text-xs uppercase">
                    <div className="border-r border-white/10 px-1">Previous Week</div>
                    <div className="border-r border-white/10 px-1">Current Week</div>
                    <div className="px-1">Next Week</div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-[650px] w-full text-[9px] sm:text-[10px] text-center border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-gray-500 uppercase">
                          <th className="p-2 border">Day / Date</th>
                          <th className="p-2 border">Price</th>
                          <th className="p-2 border">Day / Date</th>
                          <th className="p-2 border">Price</th>
                          <th className="p-2 border">Day / Date</th>
                          <th className="p-2 border">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {priceData.map((row, index) => (
                          <tr key={index} className="hover:bg-blue-50 border-b transition-colors">
                            <td className="p-2 border bg-gray-50/30">
                              <div className="font-bold">{row.day}</div>
                              <div className="text-[8px] sm:text-[9px] text-gray-400">{row.prevDate}</div>
                            </td>
                            <td className="p-2 border text-gray-500 italic">{row.prev}</td>
                            <td className="p-2 border bg-blue-50">
                              <div className="font-bold text-[#0f2d4a]">{row.day}</div>
                              <div className="text-[8px] sm:text-[9px] text-blue-600 font-medium">{row.currDate}</div>
                            </td>
                            <td className="p-2 border bg-blue-50 font-bold text-[#0f2d4a]">{row.curr}</td>
                            <td className="p-2 border bg-gray-50/30">
                              <div className="font-bold">{row.day}</div>
                              <div className="text-[8px] sm:text-[9px] text-gray-400">{row.nextDate}</div>
                            </td>
                            <td className="p-2 border text-gray-500 italic">{row.next}</td>
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
              The Standard Guest Suite includes 32" LED Flat Screen TV's, Free high speed
              wireless internet access, luxurious beds, complimentary breakfast and modern
              bathroom facilities.
            </p>
            <div>
              <h3 className="font-semibold text-[#0f2d4a] mb-2">Complimentary with Suite:</h3>
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
            <h2 className="text-xl font-bold text-[#0f2d4a] mb-4">Room Services</h2>
            <div className="service-grid grid grid-cols-2 sm:grid-cols-3 gap-5">
              {[
                { Icon: Waves, text: "Sea View" },
                { Icon: WashingMachine, text: "Laundry" },
                { Icon: Utensils, text: "Breakfast" },
                { Icon: Tv, text: "Television" },
                { Icon: Waves, text: "Swimming Pool" },
                { Icon: Umbrella, text: "Beach Loungers" },
              ].map((item, idx) => (
                <div key={idx} className="service-item flex items-center gap-3">
                  <item.Icon className="w-5 h-5 text-gray-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={sidebarRef}>
          <div className="bg-[#b9cfe3] p-6 rounded-md sticky top-6">
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* CHECK IN */}
              <div className="bg-[#8eacc6] text-center py-5 w-full h-full">
                <DatePicker 
                  selected={checkIn}
                  onChange={(date) => {
                    setCheckIn(date);
                    if (date >= checkOut) {
                      setCheckOut(new Date(date.getTime() + 86400000));
                    }
                  }}
                  minDate={new Date()}
                  dateFormat="dd MMM"
                  customInput={<DateBox label="CHECK-IN" />}
                />
              </div>

              {/* CHECK OUT */}
              <div className="bg-[#8eacc6] text-center py-5 w-full h-full">
                <DatePicker 
                  selected={checkOut}
                  onChange={(date) => setCheckOut(date)}
                  minDate={new Date(checkIn.getTime() + 86400000)}
                  dateFormat="dd MMM"
                  customInput={<DateBox label="CHECK-OUT" />}
                />
              </div>

              {/* GUEST */}
              <div className="bg-[#8eacc6] text-center py-5">
                <p className="text-white text-[11px] tracking-[2px] mb-2">GUESTS</p>
                <div className="flex justify-center items-center gap-4">
                  <span className="text-[#083b67] text-5xl font-bold">{guestCount}</span>
                  <div className="flex flex-col text-white">
                    <button onClick={() => setGuestCount((prev) => Math.min(maxGuests, prev + 1))}>▲</button>
                    <button onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))}>▼</button>
                  </div>
                </div>
              </div>

              {/* NIGHTS */}
              <div className="bg-[#7fa1c3] text-white p-4 h-28 rounded-md flex flex-col justify-between">
                <span className="text-xs uppercase">{totalNights} Nights</span>
                <span className="text-4xl font-bold">{totalNights}</span>
              </div>
            </div>

            <Link to="/booking" onClick={() => {
              setSelectedRoom(product);
              setBookingData({
                room: product,
                checkIn,
                checkOut,
                guests: guestCount,
                totalNights,
                totalPrice: product.price * totalNights,
              });
            }}>
              <button className="w-full bg-[#004274] hover:bg-[#00335c] text-white font-bold py-3 rounded-md uppercase tracking-widest text-xs duration-300">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* RELATED ROOMS */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0f2d4a] mb-3">Related Rooms</h2>
          <p className="text-gray-500 text-lg">Discover more luxury rooms</p>
        </div>

        <div className="px-2">
          {ALL_ROOMS && ALL_ROOMS.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {ALL_ROOMS.filter((item) => item.id !== product.id).map((room) => (
                <SwiperSlide key={room.id}>
                  <div className="bg-white border border-gray-200 overflow-hidden rounded-md shadow-sm flex flex-col h-full mb-2">
                    <div className="h-[250px] sm:h-[300px] overflow-hidden shrink-0">
                      <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover hover:scale-105 duration-700"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <Link
                        to={`/roomsdetails/${room.id}`}
                        onClick={() => setSelectedRoom(room)}
                        className="hover:text-[#0f2d4a] transition-colors duration-300 block mb-2"
                      >
                        <h2 className="text-[20px] sm:text-[24px] leading-tight font-bold text-[#2b2b2b] break-words whitespace-normal min-h-[64px]">
                          {room.title}
                          <span className="text-sm font-normal text-gray-500 block mt-1">({room.view})</span>
                        </h2>
                      </Link>
                      <div className="flex items-center gap-6 mt-3 text-gray-500 text-sm">
                        <div className="flex items-center gap-2"><Users size={16} /><span>{room.guests} Guests</span></div>
                        <div className="flex items-center gap-2"><BedDouble size={16} /><span>{room.size} Ft²</span></div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-[14px] mt-4 line-clamp-3 flex-grow">
                        The Standard Guest Suite includes 32" LED Flat Screen TV’s, Free high speed wireless internet access.
                      </p>
                      <div className="mt-6 pt-4 border-t border-gray-100 text-right">
                        {room.oldPrice && <p className="text-red-400 line-through text-xs">TK {room.oldPrice} / PER NIGHT</p>}
                        <p className="text-[#0f2d4a] font-bold text-xl sm:text-2xl">TK {room.price} / PER NIGHT</p>
                        <p className="text-gray-400 text-xs mt-1">TOTAL: TK {room.price * (totalNights || 1)}</p>
                      </div>
                      <Link to="/booking" onClick={() => {
                        setSelectedRoom(room);
                        setBookingData({
                          room: room,
                          checkIn,
                          checkOut,
                          guests: guestCount,
                          totalNights,
                          totalPrice: room.price * totalNights,
                        });
                      }}>
                        <button className="mt-5 w-full border border-[#c7a57a] py-3.5 uppercase tracking-[2px] text-[11px] text-[#c7a57a] hover:bg-[#c7a57a] hover:text-white duration-300 font-semibold rounded-sm">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center">Loading Rooms...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;