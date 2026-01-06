"use client";

import { ArrowBigRight } from 'lucide-react';
import React from 'react';
import { FaExpand } from 'react-icons/fa';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiGlobe } from "react-icons/fi";

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://www.facebook.com/yourpage" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/yourpage" },
  { icon: <FiGlobe />, url: "https://www.yourwebsite.com" },
  { icon: <HiOutlineMail />, url: "mailto:youremail@example.com" },
];

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24 px-6 text-secondary">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/2 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Column: Minimal Copy */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-primary text-xs font-bold uppercase tracking-[0.5em]">Contact Us</h3>
                <h1 className="font-display text-5xl md:text-7xl text-gray-200 font-bold leading-tight">
                  We’d love to <br/>
                  <span className="italic font-light text-primary">hear from you</span>
                </h1>
                <p className="text-gray-500 font-light text-lg leading-relaxed max-w-md">
                  Whether you have a question about our villas, spa rituals, or need assistance with your booking, our dedicated team is here to ensure your LuxeHaven experience is flawless.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="font-display text-gray-200 text-xl font-bold">The Estate</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    49 Edge Street by Lumumber.<br/>
                    CLI-SAMNORIS HOTEL<br/>
                    PortHarcourt
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-display text-xl text-gray-200 font-bold">Reservations</h4>
                  <p className="text-gray-400 text-sm font-light">
                    +33 (0) 1 23 45 67 89<br/>
                    reservations@samnoris.com
                  </p>
                </div>
              </div>

              <div className="pt-10 flex space-x-6 text-black opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl hover:text-primary transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
            </div>

            </div>

            {/* Right Column: The Form Card */}
            <div className="relative">
              {/* Soft decorative shadow behind the card */}
              <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
              
              <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-stone-100">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-6">
                    <div className="relative group">
                      <label className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-primary">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Alexander Pierce"
                        className="w-full bg-white border border-stone-200 rounded-2xl py-4 px-6 text-sm focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-stone-300"
                      />
                    </div>

                    <div className="relative group">
                      <label className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-primary">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="alexander@luxury.com"
                        className="w-full bg-white border border-stone-200 rounded-2xl py-4 px-6 text-sm focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-stone-300"
                      />
                    </div>

                    <div className="relative group">
                      <label className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-primary">Subject</label>
                      <select className="w-full bg-white border border-stone-200 rounded-4xl py-4 px-6 text-sm text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none cursor-pointer">
                        <option>Reservation Inquiry</option>
                        <option>Spa & Wellness</option>
                        <option>Corporate Events</option>
                        <option>Feedback</option>
                      </select>
                      <span className="material-icons absolute right-6 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"><FaExpand /></span>
                    </div>

                    <div className="relative group">
                      <label className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-bold uppercase tracking-widest text-primary">Your Message</label>
                      <textarea 
                        rows={4}
                        placeholder="How can we assist you?"
                        className="w-full bg-white border border-stone-200 rounded-2xl py-4 px-6 text-sm focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-stone-300 min-h-[120px]"
                      ></textarea>
                    </div>
                  </div>

                  <button className="group w-full bg-secondary hover:bg-black text-black hover:text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-secondary/20 transition-all flex items-center justify-center gap-4">
                    <span className="uppercase tracking-[0.2em] text-xs">Send Message</span>
                    <span className="material-icons text-primary group-hover:text-white transition-transform"><ArrowBigRight /></span>
                  </button>
                </form>

                <p className="mt-8 text-center text-[10px] text-stone-400 uppercase tracking-widest">
                  Our team typically responds within 2 business hours.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
