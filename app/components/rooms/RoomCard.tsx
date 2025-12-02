"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RoomCard = ({ room, onViewDetails }: any) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg w-full">
      <Image
        src={room.image}
        alt={room.name}
        width={500}
        height={300}
        className="object-cover w-full h-64 group-hover:scale-105 transition-all"
      />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
        <h3 className="text-xl font-semibold">{room.name}</h3>
        <p className="text-lg">${room.price}/night</p>

        <Button
          size="sm"
          variant="secondary"
          className="mt-3 bg-[#C89F65] text-white hover:bg-[#8C6A3B] transition"
          onClick={() => onViewDetails(room)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};
