"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-[#1C1C1C] backdrop-blur-sm">
  <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-8 py-4 mt-2 relative">

    {/* LEFT: LOGO */}
    <div className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={60}
        height={60}
        className="rounded-full w-12 h-12 object-cover"
      />
    </div>

    {/* CENTER: DESKTOP MENU */}
    <div className="hidden md:flex items-center space-x-10 bg-transparent justify-center flex-1">
      <Link className="hover:text-[#1C1C1C] text-[#C89F65] transition" href="/">
        Home
      </Link>
      <Link className="hover:text-[#1C1C1C] text-[#C89F65] transition" href="/rooms">
        Rooms
      </Link>
      <Link className="hover:text-[#1C1C1C] text-[#C89F65] transition" href="/amenities">
        Amenities
      </Link>
      <Link className="hover:text-[#1C1C1C] text-[#C89F65] transition" href="/services">
        Services
      </Link>
      <Link className="hover:text-[#1C1C1C] text-[#C89F65] transition" href="/contact">
        Contact
      </Link>
    </div>

    {/* RIGHT: CTA */}
    <div className="hidden md:block items-center">
      <Link href="/auth" className="bg-[#C89F65] text-white py-2 px-4 rounded-full">
        Sign Up
      </Link>

    </div>

    {/* MOBILE HAMBURGER BUTTON */}
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className="w-7 h-7 text-orange-500" />
        ) : (
          <Menu className="w-7 h-7 text-orange-500" />
        )}
      </button>
    </div>

    {/* MOBILE MENU */}
    {isOpen && (
      <div className="absolute top-full left-0 w-full bg-white rounded-xl shadow-lg p-6 mt-3 md:hidden animate-slideDown z-50">
        <div className="flex flex-col gap-4 font-medium text-gray-700">

          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/rooms" onClick={() => setIsOpen(false)}>Rooms</Link>
          <Link href="/amenities" onClick={() => setIsOpen(false)}>Amenities</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Mobile CTA */}
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="bg-orange-400 text-white text-center text-sm px-4 py-2 rounded-full hover:bg-orange-500 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    )}
  </div>
</nav>
  )
};
