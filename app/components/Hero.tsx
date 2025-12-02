"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Luxury Hotel Hero"
        fill
        priority
        className="object-cover object-center brightness-75"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Experience Luxury & Comfort Like Never Before
        </h1>

        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-xl mx-auto">
          Stay in our elegantly designed rooms and enjoy top-tier amenities crafted for relaxation, elegance, and unforgettable moments.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-[#C89F65] hover:bg-[#8C6A3B] transition rounded-full text-white font-semibold shadow-lg">
            Book Now
          </button>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-md border border-[#8C6A3B] hover:bg-white/30 transition rounded-full text-white font-semibold">
            Explore Rooms
          </button>
        </div>
      </div>

    </section>
  );
};
