"use client";

import { useState } from "react";
import { RoomCard } from "./RoomCard";
import { rooms } from "../../../data/data";
import { RoomDetailsDialog } from "./RoomsDetailsDialog";

export const RoomsCarousel = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">Rooms & Amenities</h2>

      {/* ALWAYS HORIZONTAL + SCROLLABLE */}
      <div
        className="
          flex 
          flex-row 
          gap-6 
          overflow-x-auto 
          overflow-y-hidden 
          snap-x 
          snap-mandatory 
          scroll-smooth 
          whitespace-nowrap 
          no-scrollbar
          w-full
        "
      >
        {rooms.map((room) => (
          <div
            key={room.id}
            className="
              snap-center 
              inline-block 
              shrink-0
              w-[85%] 
              sm:w-[60%] 
              md:w-[40%] 
              lg:w-[30%] 
              xl:w-[25%]
            "
          >
            <RoomCard room={room} onViewDetails={setSelectedRoom} />
          </div>
        ))}
      </div>

      {/* Dialog */}
      <RoomDetailsDialog
        room={selectedRoom}
        open={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
      />
    </section>
  );
};
