"use client";

import { MapPin, Phone } from 'lucide-react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/clisamnoris", label: "Facebook" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/clisamnoris_hotel", label: "Instagram" },
  { icon: <FaWhatsapp />, url: "https://wa.me/2347079408985", label: "WhatsApp" },
];

export const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-[#F5F3EE] py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C89F65]/5 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#1A2947]/5 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-[#C89F65] text-sm font-bold uppercase tracking-[0.3em]">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2947]">
              Contact <span className="italic font-light">Us</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you have a question about our suites, amenities, or need assistance with your booking, we're here to help.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#C89F65]/10 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-[#C89F65]" />
              </div>
              <h3 className="font-bold text-[#1A2947] text-xl mb-3">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">
                49 Egede Street Mile 2 Diobu<br />
                Port Harcourt, Rivers State<br />
                Nigeria
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#C89F65]/10 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-[#C89F65]" />
              </div>
              <h3 className="font-bold text-[#1A2947] text-xl mb-3">Call Us</h3>
              <p className="text-gray-600 leading-relaxed">
                <a href="tel:+2348160073683" className="hover:text-[#C89F65] transition-colors">
                  +234 816 007 3683
                </a>
                <br />
                <a href="https://wa.me/2347079408985" className="hover:text-[#C89F65] transition-colors">
                  WhatsApp: +234 707 940 8985
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-sm font-semibold text-[#1A2947] mb-6">Follow Us</p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-[#1A2947] hover:bg-[#C89F65] text-white rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg"
                  aria-label={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
