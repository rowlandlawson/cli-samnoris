"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeroProps {
  onBookingOpen?: () => void;
}

export const Hero = ({ onBookingOpen }: HeroProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    "/img/heroImage.jpeg",
    "/img/room4.jpeg",
    "/img/palour.jpeg",
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSuites = () => {
    const suitesSection = document.getElementById("suites");
    if (suitesSection) {
      suitesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

   const scrollToGallery = () => {
    const suitesSection = document.getElementById("gallery");
    if (suitesSection) {
      suitesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#1A2947] overflow-hidden flex items-center"
    >
      {/* Background Image Slider with Parallax Effect */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentImage === index ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={img}
              alt="Luxury hotel interior"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2947]/70 via-[#1A2947]/50 to-[#1A2947]/80" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#C89F65]/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#FB8B60]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* TEXT CONTENT */}
          <div className="text-white space-y-8 animate-slideInLeft">
            {/* Brand Badge */}


            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="italic">Experience Luxury & Comfort</span>
              <br />
              <span className="text-[#C89F65]">Like Never Before</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Discover Port Harcourt's premium hospitality experience. Elegantly designed suites,
              world-class amenities, and unforgettable moments await you.
            </p>

            {/* Rating Badge */}
            {/* <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 w-fit">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-[#FFB800]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <div className="border-l border-white/30 pl-4">
                <p className="font-bold text-lg">4.9/5</p>
                <p className="text-xs text-white/70">Rated by Our Guests</p>
              </div>
            </div> */}

            {/* CTA Buttons */}
           {/* CTA Buttons - Centered on mobile, left on desktop */}
<div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
  <button
    data-booking-trigger
    onClick={scrollToSuites}
    className="px-8 py-4 rounded-full bg-[#FB8F65] hover:bg-[#FF6B3D] transition-all font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform w-full sm:w-auto"
  >
    Book Your Stay
  </button>

  <button
    onClick={scrollToGallery}
    className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 transition-all font-semibold text-lg w-full sm:w-auto"
  >
    View Our Luxury
  </button>
</div>

            {/* Quick Info */}
            {/* <div className="flex flex-wrap gap-6 pt-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#C89F65]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C89F65]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Premium Service</p>
                  <p className="text-white/60">24/7 Concierge</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#C89F65]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#C89F65]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Port Harcourt</p>
                  <p className="text-white/60">Prime Location</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT SIDE - Image Composition (Desktop Only) */}
          <div className="hidden lg:block relative h-[600px] animate-slideInRight">
            {/* Main Featured Image */}
            <div className="absolute top-0 right-0 w-96 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-3 hover:rotate-0 transition-all duration-700 group">
              <Image
                src="/img/poolside.jpeg"
                alt="Luxury suite"
                width={400}
                height={500}
                className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-0 left-0 w-80 h-72 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5 transform -rotate-6 hover:rotate-0 transition-all duration-700 z-10 group">
              <Image
                src="/img/palour.jpeg"
                alt="Hotel amenities"
                width={350}
                height={400}
                className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C89F65]/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentImage === index
              ? "bg-[#C89F65] w-8"
              : "bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
};
