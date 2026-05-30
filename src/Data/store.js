// store.js

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRoomStore = create(
  persist(
    (set) => ({
      selectedRoom: null,

      bookingData: {
        checkIn: new Date(),
        checkOut: new Date(
          Date.now() + 86400000
        ),
        guests: 1,
        totalNights: 1,
        totalPrice: 0,
        room: null,
      },

      setSelectedRoom: (room) =>
        set({
          selectedRoom: room,
        }),

      setBookingData: (data) =>
        set((state) => ({
          bookingData: {
            ...state.bookingData,
            ...data,
          },
        })),

      clearBookingData: () =>
        set({
          bookingData: null,
        }),

      clearSelectedRoom: () =>
        set({
          selectedRoom: null,
        }),
    }),
    {
      name: "room-storage",
    }
  )
);