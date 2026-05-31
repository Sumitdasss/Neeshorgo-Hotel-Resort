/* eslint-disable no-undef */
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Temporary data store
let bookings = [];

// Create booking
app.post("/bookings", (req, res) => {
  const booking = {
    _id: Date.now().toString(),
    ...req.body,
  };

  bookings.push(booking);

  res.send({
    insertedId: booking._id,
    success: true,
  });
});

// Get all bookings
app.get("/bookings", (req, res) => {
  res.send(bookings);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});