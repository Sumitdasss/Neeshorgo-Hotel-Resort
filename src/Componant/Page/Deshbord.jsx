import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/bookings")
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">
        Booking Dashboard
      </h1>

   <div className="grid gap-5">
  {bookings.length === 0 ? (
    <div className="bg-white rounded-xl shadow-md p-10 text-center">
      <h2 className="text-3xl font-bold text-gray-700 mb-3">
        No Booking Yet
      </h2>

      <p className="text-gray-500">
        You have not made any bookings yet.
      </p>
    </div>
  ) : (
    bookings.map((booking) => (
     <div
  key={booking._id}
  className="bg-white rounded-xl shadow-md overflow-hidden"
>
  <div className="grid md:grid-cols-[280px_1fr]">

    {/* Room Image */}
    <div className="h-[250px]">
      <img
        src={booking.roomImage}
        alt={booking.roomName}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Details */}
    <div className="p-6">

      <h2 className="text-3xl font-bold text-[#1A2B49] mb-5">
        {booking.roomName}
      </h2>

      <div className="grid md:grid-cols-2 gap-4 text-gray-700">

        <p>
          <strong>Name:</strong> {booking.name}
        </p>

        <p>
          <strong>Surname:</strong> {booking.surname}
        </p>

        <p>
          <strong>Email:</strong> {booking.email}
        </p>

        <p>
          <strong>Telephone:</strong> {booking.telephone}
        </p>

        <p>
          <strong>Country:</strong> {booking.country}
        </p>

        <p>
          <strong>City:</strong> {booking.city}
        </p>

        <p>
          <strong>ZIP Code:</strong> {booking.zipCode}
        </p>

        <p>
          <strong>Address:</strong> {booking.address}
        </p>

        <p>
          <strong>Guests:</strong> {booking.guests}
        </p>

        <p>
          <strong>Nights:</strong> {booking.totalNights}
        </p>

        <p>
          <strong>Check In:</strong> {booking.checkIn}
        </p>

        <p>
          <strong>Check Out:</strong> {booking.checkOut}
        </p>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <div>
          <p className="text-gray-500">
            Total Price
          </p>

          <h3 className="text-3xl font-bold text-[#004274]">
            ৳ {booking.totalPrice}
          </h3>
        </div>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          Confirmed
        </span>

      </div>

    </div>

  </div>
</div>
    ))
  )}
</div>
    </div>
  );
};

export default Dashboard;