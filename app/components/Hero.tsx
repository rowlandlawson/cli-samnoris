"use client";
import Image from "next/image";
import { useState } from "react";

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
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Experience Luxury & Comfort <br /> Like Never Before
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

          {/* container */}
          <div className="relative w-[520px] h-[560px]">
            
            {/* Main Image */}
            <div className="absolute top-30 left-0 z-20 rounded-[2.5rem] overflow-hidden
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/hero1.png"
                alt="Luxury interior"
                width={320}
                height={420}
                priority
                className="object-cover"
              />
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-0 right-0 z-10 rounded-[2.5rem] overflow-hidden
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/hero.png"
                alt="Luxury detail"
                width={320}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-green-950 border border-white/10 p-6 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
            <h3 className="text-xl font-bold text-white">
              Complete Your Booking
            </h3>

            <p className="mt-2 text-white/70 text-sm">
              Secure your reservation with a quick payment.
            </p>

            <div className="mt-6 space-y-3">
              <button className="w-full py-3 rounded-xl bg-[#C89F65] hover:bg-[#8C6A3B] transition font-semibold text-white">
                Pay with Card
              </button>

              <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 transition font-semibold text-white">
                Pay on Arrival
              </button>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full text-sm text-white/60 hover:text-white transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
