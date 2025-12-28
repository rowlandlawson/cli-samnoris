"use client";

import { useState } from "react";
import { RoomCard } from "./RoomCard";
import { rooms } from "../../../data/data";
import { RoomDetailsDialog } from "./RoomsDetailsDialog";
import SectionHeading from "../Helper/SectionHeading";


export const RoomsCarousel = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <SectionHeading heading="Recommended Rooms"
      subheading="Discover a curated selection of rooms designed for comfort, elegance, and convenience each crafted to give you a stay that feels uniquely yours"
      />
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
