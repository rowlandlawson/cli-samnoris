"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export interface Room {
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[]; // added for modal
}


interface RoomGridProps {
  onBookClick: (room: Room) => void;
}

const rooms: Room[] = [
  {
    name: "Deluxe Ocean Suite",
    price: 320,
    rating: 5,
    reviews: 84,
    image: "/images/room1.png",
    amenities: ["Ocean View", "King Bed", "Free WiFi", "Breakfast Included"]
  },
  {
    name: "Executive City Room",
    price: 250,
    rating: 4,
    reviews: 112,
    image: "/images/room2.png",
    amenities: ["City View", "Queen Bed", "Gym Access", "Free WiFi"]
  },
  {
    name: "Royal Penthouse",
    price: 900,
    rating: 5,
    reviews: 45,
    image: "/images/room3.png",
    amenities: ["Private Terrace", "King Bed", "Jacuzzi", "Butler Service"]
  },
  {
    name: "Governor's Quarter",
    price: 750,
    rating: 5,
    reviews: 29,
    image: "/images/room4.png",
    amenities: ["Panoramic View", "King Bed", "Mini Bar", "Private Lounge"]
  }
];

export const RoomGrid: React.FC<RoomGridProps> = ({ onBookClick }) => {
  return (
    <section
      id="rooms"
      className="py-24 bg-bg-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h3 className="text-primary text-sm font-bold tracking-[0.4em] uppercase">
            Selection
          </h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#C89F65]">
            Recommended Rooms
          </h2>
          <p className="text-gray-400 font-light leading-relaxed">
            Discover a curated selection of rooms designed for comfort, elegance, and convenience—each crafted to give you a stay that feels uniquely yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, idx) => (
            <div
              key={idx}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl transition-all hover:shadow-primary/10"
            >
              <Image
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src={room.image}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`material-icons text-xs ${
                        i < room.rating ? "text-primary" : "text-gray-600"
                      }`}
                    >
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    </span>
                  ))}
                </div>
                <h4 className="text-gray-700 font-display text-2xl font-bold mb-2">
                  {room.name}
                </h4>
                <p className="text-primary font-bold text-lg mb-6">
                  ${room.price.toFixed(2)}
                  <span className="text-gray-400 text-xs font-light tracking-widest uppercase ml-1">
                    / Night
                  </span>
                </p>
                <button
                  onClick={() => onBookClick(room)}
                  className="bg-[#C89F65] hover:bg-primary hover:text-secondary text-white border border-white/20 text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all backdrop-blur-md"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

