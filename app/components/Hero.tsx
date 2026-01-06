"use client";
import Image from "next/image";
import { useState } from "react";
import { BookingModal } from "./BookingModal";

export const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[95vh] bg-green-950 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />
      {/* Mobile background image */}
<div className="absolute inset-0 md:hidden">
  <Image
    src="/images/hero1.png" // choose ONE image
    alt="Luxury interior background"
    fill
    priority
    className="object-cover opacity-30"
  />
</div>

      <div className="relative z-50 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16 mt-16 md:mt-0 py-16 md:py-2">
        
        {/* TEXT */}
        <div className="text-white py-8 md:py-2">
          <p className="text-lg font-bold ml-2"><span className="bg-white">.</span>CLI SamNoris</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            <i>Experience Luxury & Comfort <br /> Like Never Before</i>
          </h1>

          <p className="mt-5 text-lg md:text-xl opacity-90 max-w-lg">
            Stay in our elegantly designed rooms and enjoy top-tier amenities crafted for relaxation, elegance, and unforgettable moments.
          </p>

          <div className="mt-10 flex gap-4">
            <button
              onClick={() => setOpen(true)}
              className="px-7 py-3 rounded-full bg-[#C89F65] hover:bg-[#8C6A3B] transition font-semibold shadow-[0_10px_30px_rgba(200,159,101,0.35)]"
            >
              Book Now
            </button>

            <button className="px-7 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition font-semibold">
              Explore Rooms
            </button>
          </div>
        </div>

        {/* IMAGE COMPOSITION */}
        <div className="relative hidden md:flex justify-center items-center">
          {/* glow */}
          <div className="absolute inset-0 bg-emerald-400/10 blur-3xl rounded-[3rem]" />
          {/* Floating Images Decoration */}
        <div className="relative hidden md:flex justify-center items-center h-[700px]">
          {/* Main Top Image */}
          <div className="absolute top-[120px] right-5 w-80 h-64 rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border-4 border-white/10 transform rotate-8 hover:rotate-0 transition-all duration-700 ease-in-out group">
            <Image
                src="/images/hero1.png"
                alt="Luxury interior"
                width={320}
                height={420}
                priority
                className="object-cover"
              />
          </div>
          
          {/* Secondary Bottom Image */}
          <div className="absolute bottom-20 left-0 w-[300px] h-72 rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] border-8 border-white/5 transform -rotate-5 hover:rotate-0 transition-all duration-700 ease-in-out z-20 group">
             <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            <Image
                src="/images/hero.png"
                alt="Luxury detail"
                width={320}
                height={400}
                className="object-cover"
              />
            <div className="absolute bottom-6 left-8">
                <p className="text-white font-display text-2xl font-bold">Villas with Private Pool</p>
            </div>
          </div>

          {/* Abstract Glow Elements */}
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          <div className="absolute top-20 left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
        </div>
      </div>
      </div>

      {/* PAYMENT MODAL */}
      {open && (
        <div>
          <BookingModal room={{ name: "", price: 0, rating: 0, reviews: 0, image: "" }} onClose={() => setOpen(false)} />
          <button
            onClick={() => setOpen(false)}
            className="mt-6 w-full text-sm text-white/60 hover:text-white transition"
          >
            Cancel
          </button>
        </div>
      )}
    </section>
  );
};
