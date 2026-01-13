"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2947] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#C89F65]">CLI Sam Noris Hotel</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Experience luxury and comfort in the heart of Port Harcourt. Your premier destination for exceptional hospitality.
            </p>
            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/clisamnoris"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#C89F65] rounded-lg flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/clisamnoris_hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#C89F65] rounded-lg flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/2347079408985"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#C89F65] rounded-lg flex items-center justify-center transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#C89F65]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('suites')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition">
                  Suites
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-white/70 hover:text-white transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#C89F65]">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Luxury Suites</li>
              <li>Swimming Pool</li>
              <li>Pool Bar</li>
              <li>Restaurant</li>
              <li>Executive Bar</li>
              <li>Bush Bar</li>
              <li>24/7 Concierge</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#C89F65]">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C89F65] flex-shrink-0 mt-0.5" />
                <p className="text-white/70">
                  49 Egede Street Mile 2 Diobu<br />
                  Port Harcourt, Rivers State
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C89F65] flex-shrink-0" />
                <a href="tel:08160073683" className="text-white/70 hover:text-white transition">
                  +234 816 007 3683
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C89F65] flex-shrink-0" />
                <a href="mailto:reservations@samnoris.com" className="text-white/70 hover:text-white transition">
                  reservations@samnoris.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
