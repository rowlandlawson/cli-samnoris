"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleBookNow = () => {
    const heroBooking = document.querySelector('[data-booking-trigger]') as HTMLButtonElement;
    if (heroBooking) {
      heroBooking.click();
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-[#1A2947] shadow-lg"
          : "bg-transparent backdrop-blur-sm"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-8 py-4 relative">
        {/* LEFT: LOGO */}
        <div className="flex items-center">
          <Image
            src="/img/logo.jpeg"
            alt="CLI Sam Noris Hotel Logo"
            width={60}
            height={60}
            className="rounded-full w-14 h-14 object-cover ring-2 ring-[#C89F65]/30"
          />
        </div>

        {/* CENTER: DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-10 justify-center flex-1">
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:text-[#C89F65] text-white transition font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("suites")}
            className="hover:text-[#C89F65] text-white transition font-medium"
          >
            Suites
          </button>
          <button
            onClick={() => scrollToSection("amenities")}
            className="hover:text-[#C89F65] text-white transition font-medium"
          >
            Amenities
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="hover:text-[#C89F65] text-white transition font-medium"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#C89F65] text-white transition font-medium"
          >
            Contact
          </button>
        </div>

        {/* RIGHT: BOOK NOW CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollToSection("suites")}
            className="bg-[#FB8B60] hover:bg-[#FF6B3D] text-white py-2.5 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Book Now
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1A2947] rounded-b-xl shadow-2xl p-6 mt-2 md:hidden animate-slideDown z-10">
            <div className="flex flex-col gap-4 font-medium text-white">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left hover:text-[#C89F65] transition"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("suites")}
                className="text-left hover:text-[#C89F65] transition"
              >
                Suites
              </button>
              <button
                onClick={() => scrollToSection("amenities")}
                className="text-left hover:text-[#C89F65] transition"
              >
                Amenities
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left hover:text-[#C89F65] transition"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-[#C89F65] transition"
              >
                Contact
              </button>

              {/* Mobile Book Now */}
              <button
                onClick={() => scrollToSection("suites")}
                className="bg-[#FB8B60] text-white text-center px-4 py-2.5 rounded-full hover:bg-[#FF6B3D] transition font-semibold shadow-lg mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
