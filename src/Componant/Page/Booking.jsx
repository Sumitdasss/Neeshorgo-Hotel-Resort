import { useState } from 'react';
import {useRoomStore} from '/src/Data/store.js';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Booking = () => {
const [arrivalTime, setArrivalTime] = useState("");
const [errors, setErrors] = useState({});
const navigate = useNavigate();
const [formData, setFormData] = useState({
  name: "",
  surname: "",
  email: "",
  telephone: "",
  address: "",
  city: "",
  country: "",
  zipCode: "",
});
const bookingData = useRoomStore(
  (state) => state.bookingData
);

if (!bookingData) {
  return <h1>No Booking Found</h1>;
}
// eslint-disable-next-line react-hooks/rules-of-hooks


// eslint-disable-next-line react-hooks/rules-of-hooks


const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  if (!formData.name.trim())
    newErrors.name = "Name is required";

  if (!formData.surname.trim())
    newErrors.surname = "Surname is required";

  if (!formData.email.trim())
    newErrors.email = "Email is required";

  if (!formData.telephone.trim())
    newErrors.telephone = "Telephone is required";

  if (!formData.address.trim())
    newErrors.address = "Address is required";

  if (!formData.city.trim())
    newErrors.city = "City is required";

  if (!formData.country.trim())
    newErrors.country = "Country is required";

  if (!formData.zipCode.trim())
    newErrors.zipCode = "ZIP Code is required";

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  const bookingInfo = {
   roomName: room.title,
  roomImage: room.image,

  name: formData.name,
  surname: formData.surname,
  email: formData.email,
  telephone: formData.telephone,
  country: formData.country,
  city: formData.city,
  address: formData.address,
  zipCode: formData.zipCode,

  guests,
  totalNights,
  totalPrice,
  checkIn,
  checkOut,
  arrivalTime,
  };

  try {
    const res = await axios.post(
      "http://localhost:5000/bookings",
      bookingInfo
    );

    if (res.data.insertedId) {
      alert("Booking Successful");
      navigate("/dashboard");
    }
  } catch (error) {
    console.log(error);
    alert("Booking Failed");
  }
};
const {
  room,
  checkIn,
  checkOut,
  guests,
  totalNights,
  totalPrice,
} = bookingData;
const arrivalTimes = [
  "12:00  - 1:00 AM",
  "01:00 - 02:00 AM",
  "02:00 - 03:00 AM",
  "03:00 - 04:00 AM",
  "04:00 - 05:00 AM",
  "05:00 - 06:00 AM",
  "06:00 - 07:00 AM",
  "07:00 - 08:00 AM",
  "08:00 - 09:00 AM",
  "09:00 - 10:00 AM",
  "10:00 - 11:00 AM",
  "11:00 - 12:00 AM",
  "12:00 - 01:00 PM",
  "01:00 - 02:00 PM",
  "02:00 - 03:00 PM",
  "03:00 - 04:00 PM",
  "04:00 - 05:00 PM",
  "05:00 - 06:00 PM",
  "06:00 - 07:00 PM",
  "07:00 - 08:00 PM",
  "08:00 - 09:00 PM",
  "09:00 - 10:00 PM",
  "10:00 - 11:00 PM",
  "11:00 - 12:00 PM",
  
];



  return (
   <section className="bg-[#efefef] min-h-screen  pb-10">

    <section className="relative h-[460px] overflow-hidden">

  {/* Background Image */}
  <img
    src="https://images.pexels.com/photos/3659681/pexels-photo-3659681.jpeg"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center">

    <h1 className="text-white text-7xl font-bold uppercase mb-20">
      Booking
    </h1>

    {/* Steps */}
    <div className="flex items-center gap-10">

      {/* Step 1 */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-sm font-semibold">
          1
        </div>

        <span className="text-white uppercase tracking-[3px] text-sm">
          Search
        </span>
      </div>

      {/* Line */}
      <div className="w-16 h-[1px] bg-white/40"></div>

      {/* Step 2 Active */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#8fb0cc] text-white flex items-center justify-center text-sm font-semibold">
          2
        </div>

        <span className="text-white uppercase tracking-[3px] text-sm">
          Booking
        </span>
      </div>

      <div className="w-16 h-[1px] bg-white/40"></div>

      {/* Step 3 */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-sm font-semibold">
          3
        </div>

        <span className="text-white uppercase tracking-[3px] text-sm">
          Checkout
        </span>
      </div>

      <div className="w-16 h-[1px] bg-white/40"></div>

      {/* Step 4 */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-white text-white flex items-center justify-center text-sm font-semibold">
          4
        </div>

        <span className="text-white uppercase tracking-[3px] text-sm">
          Thank You
        </span>
      </div>

    </div>

  </div>

  {/* Bottom Shape */}
  <div
    className="
    absolute
    bottom-0
    left-0
    w-full
    h-16
    bg-white
    [clip-path:polygon(0_100%,50%_0,100%_100%)]
  "
  />

</section>

  <div className="max-w-[1440px] mx-auto">

    <div className="grid lg:grid-cols-[300px_1fr] gap-8">

      {/* LEFT SIDE */}
      <div className="bg-white shadow-sm">

        {/* Image */}
        <div className="h-[180px]">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Reservation */}
        <div className="bg-[#a9c0d5] p-4">

          <h3 className="text-center text-white uppercase tracking-[2px] text-[10px] mb-4">
            Your Reservation
          </h3>

          <div className="grid grid-cols-2 gap-3">

            {/* Check In */}
            <div className="bg-[#8eaeca] text-center py-4">

              <p className="text-white text-[10px] uppercase">
                Check-In
              </p>

              <h2 className="text-5xl font-bold text-white leading-none mt-2">
                {new Date(checkIn).getDate()}
              </h2>

              <p className="text-white text-[10px] mt-2">
                {new Date(checkIn).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    year: "numeric",
                  }
                )}
              </p>

              <p className="text-white text-[10px] uppercase">
                {new Date(checkIn).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                  }
                )}
              </p>

            </div>

            {/* Check Out */}
            <div className="bg-[#8eaeca] text-center py-4">

              <p className="text-white text-[10px] uppercase">
                Check-Out
              </p>

              <h2 className="text-5xl font-bold text-white leading-none mt-2">
                {new Date(checkOut).getDate()}
              </h2>

              <p className="text-white text-[10px] mt-2">
                {new Date(checkOut).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    year: "numeric",
                  }
                )}
              </p>

              <p className="text-white text-[10px] uppercase">
                {new Date(checkOut).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                  }
                )}
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-3 mt-3">

            <div className="bg-[#8eaeca] text-center py-4">

              <h3 className="text-white text-3xl font-bold">
                {guests}
              </h3>

              <p className="text-white uppercase text-[10px] mt-2">
                Guests
              </p>

            </div>

            <div className="bg-[#8eaeca] text-center py-4">

              <h3 className="text-white text-3xl font-bold">
                {totalNights}
              </h3>

              <p className="text-white uppercase text-[10px] mt-2">
                Nights
              </p>

            </div>

          </div>

        </div>

        {/* Total */}
        <div className="bg-[#7ea1c3] py-8 text-center">

          <h2 className="text-white text-5xl font-bold">
            {totalPrice}
          </h2>

          <p className="text-white uppercase text-[11px] tracking-[2px]">
            TK / Total
          </p>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white p-8 shadow-sm">

        {/* Alert */}
        <div className="bg-[#dd3333] text-white text-xs px-4 py-3 mb-8">
          You are booking as guest, LOGIN or REGISTER if you want to save your reservation on your account.
        </div>

        <h2 className="text-[34px] font-bold text-[#2d3e50] mb-8">
          Add Your Informations :
        </h2>
        <form onSubmit={handleSubmit}>
      
        <div className="grid md:grid-cols-2 gap-5">
            
 <input
    type="text"
    placeholder="Name *"
    value={formData.name}
    onChange={(e) =>
      setFormData({
        ...formData,
        name: e.target.value,
      })
    }
    className="h-[50px] w-full bg-[#f5f5f5] px-4 outline-none"
  />

  {errors.name && (
    <p className="text-red-500 text-sm mt-1">
      {errors.name}
    </p>
  )}

          <input
            type="text"
            placeholder="Surname *"
            value={formData.surname}
            onChange={(e) =>
              setFormData({
                ...formData,
                surname: e.target.value,
              })
            }
            className="h-[50px] bg-[#f5f5f5] px-4 outline-none"
          />

          {errors.surname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.surname}
            </p>
          )}

          <input
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="h-[50px] bg-[#f5f5f5] px-4 outline-none"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}

          <input
            type="text"
            placeholder="Telephone *"
            value={formData.telephone}
            onChange={(e) =>
              setFormData({
                ...formData,
                telephone: e.target.value,
              })
            }
            className="h-[50px] bg-[#f5f5f5] px-4 outline-none"
          />

          {errors.telephone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.telephone}
            </p>
          )}

          <input
            type="text"
            placeholder="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({
                ...formData,
                address: e.target.value,
              })
            }
            className="h-[50px] bg-[#f5f5f5] px-4 outline-none"
          />

          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address}
            </p>
          )}

          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value,
              })
            }
            className="h-[50px] bg-[#f5f5f5] px-4 outline-none"
          />

          {errors.city && (
            <p className="text-red-500 text-sm mt-1">
              {errors.city}
            </p>
          )}

          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) =>
              setFormData({
                ...formData,
                country: e.target.value,
              })
            }
            className="h-[50px] bg-[#f5f5f5] px-4 outline-none"
          />

          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country}
            </p>
          )}

          <input
            type="text"
            placeholder="ZIP"
            value={formData.zipCode}
            onChange={(e) =>
              setFormData({
                ...formData,
                zipCode: e.target.value,
              })
            }
            className="h-[50px] bg-[#f5f5f5] px-4 outline-none"
          />

          {errors.zipCode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.zipCode}
            </p>
          )}

        </div>

        <div className="mt-5">

          <label className="block mb-2 text-sm">
            Requests
          </label>

          <textarea
            rows={6}
            className="w-full bg-[#f5f5f5] p-4 outline-none resize-none"
          />

        </div>

       <div className="mt-5">
  <label className="block mb-2 text-sm">
    Arrival Time
  </label>

  <select
    value={arrivalTime}
    onChange={(e) =>
      setArrivalTime(e.target.value)
    }
    className="w-full h-[50px] bg-[#f5f5f5] px-4 appearance-none outline-none"
  >
    <option value="">
      Select Arrival Time
    </option>

    {arrivalTimes.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ))}
  </select>
</div>

        <div className="mt-5 flex items-center gap-2">

          <input type="checkbox" />

          <span className="text-sm">
            Terms and conditions *
          </span>

        </div>

        <button
          className="
          mt-8
          bg-[#004274]
          hover:bg-[#002f54]
          text-white
          px-10
          py-4
          uppercase
          tracking-[2px]
          text-sm
          duration-300
        "
        >
          Checkout
        </button>
</form>
      </div>

    </div>

  </div>

</section>
  )
}


export default Booking