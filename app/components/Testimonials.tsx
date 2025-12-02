"use client";

import { testimonials } from "@/data/data";
import Image from "next/image";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="relative w-full bg-[#F5EFE6] py-24 px-6 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
        Guest Experiences
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="
              relative bg-[#FFFFFF] backdrop-blur-xl 
              border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.12)]
              rounded-3xl p-8 pt-12 
              hover:shadow-[0_8px_40px_rgba(0,0,0,0.18)] 
              hover:-translate-y-2 
              transition-all duration-500 ease-in-out
            "
          >
            {/* gold glow top aura */}
            <div className="absolute inset-x-0 -top-6 mx-auto h-12 w-12 rounded-full bg-linear-to-tr from-orange-200 to-orange-400 blur-xl opacity-30" />

            {/* floating quote icon */}
            <div className="absolute -top-5 right-6 bg-white shadow-md p-3 rounded-full">
              <span className="text-2xl text-orange-500">“</span>
            </div>

            {/* Avatar */}
            <div className="flex justify-center mb-6">
              <Image
                src={t.avatar}
                alt={t.name}
                width={80}
                height={80}
                className="rounded-full shadow-lg border-2 border-white object-cover"
              />
            </div>

            {/* Quote */}
            <p className="text-gray-700 text-base italic leading-relaxed mb-6 text-center">
              &quot;{t.quote}&quot;
            </p>

            {/* Name & Role */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <p className="text-sm text-orange-600 font-medium mt-1">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
