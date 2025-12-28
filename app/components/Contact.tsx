"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus(null), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-green-950 px-4 py-20 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />

      {/* Toast */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 z-50 px-6 py-3 rounded-xl 
              shadow-[0_10px_40px_rgba(0,0,0,0.3)] 
              backdrop-blur-md text-sm ${
                status === "success"
                  ? "bg-green-600/90"
                  : "bg-red-500/90"
              }`}
          >
            {status === "success"
              ? "Your message has been sent!"
              : "Something went wrong."}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto mb-14 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-3 text-base md:text-lg text-white/80 max-w-xl">
          We’d love to hear from you. Reach out for bookings, inquiries, or special
          requests.
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white rounded-2xl shadow-md 
                     px-6 py-6 md:px-8 md:py-6"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="mt-1 text-[#C6A56A]">✉️</span>
              <div>
                <h3 className="font-medium text-[#5B4F45]">Email</h3>
                <a
                  href="mailto:info@luxhotel.com"
                  className="text-[#C6A56A] hover:underline"
                >
                  info@luxhotel.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 text-[#C6A56A]">📞</span>
              <div>
                <h3 className="font-medium text-[#5B4F45]">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-[#C6A56A] hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white rounded-2xl shadow-md 
                     px-6 py-8 md:px-8 md:py-10"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#3C2F22] mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl 
                           bg-transparent outline-none peer
                           focus:ring-2 focus:ring-[#C6A56A]"
              />
              <label className="absolute left-4 top-3 text-[#7A6E63] text-sm
                transition-all peer-focus:-top-3 peer-focus:text-xs 
                peer-focus:text-[#C6A56A] peer-valid:-top-3 peer-valid:text-xs">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl 
                           bg-transparent outline-none peer
                           focus:ring-2 focus:ring-[#C6A56A]"
              />
              <label className="absolute left-4 top-3 text-[#7A6E63] text-sm
                transition-all peer-focus:-top-3 peer-focus:text-xs 
                peer-focus:text-[#C6A56A] peer-valid:-top-3 peer-valid:text-xs">
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl 
                           bg-transparent outline-none peer
                           focus:ring-2 focus:ring-[#C6A56A]"
              />
              <label className="absolute left-4 top-3 text-[#7A6E63] text-sm
                transition-all peer-focus:-top-3 peer-focus:text-xs 
                peer-focus:text-[#C6A56A] peer-valid:-top-3 peer-valid:text-xs">
                Your Message
              </label>
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-[#C6A56A] 
                         text-white font-medium shadow-md
                         hover:bg-[#AD8A56] transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
