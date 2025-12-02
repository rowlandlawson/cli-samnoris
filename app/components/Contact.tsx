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
    <section
      className="min-h-screen w-full flex items-center justify-center px-4 py-16"
      style={{ background: "#FAF8F3" }}
    >
      {/* Toast */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 px-6 py-3 rounded-xl shadow-lg text-white text-sm ${
              status === "success" ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {status === "success"
              ? "Your message has been sent!"
              : "Something went wrong."}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-5xl">

        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white/70 backdrop-blur-xl border border-[#E8E1D5]/50 
                     rounded-2xl p-8 shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
        >
          <h2 className="text-3xl font-semibold text-[#3C2F22] mb-4">
            Reach Out to Us
          </h2>
          <p className="text-[#6F6257] mb-6">
            For reservations or inquiries, you can contact us directly:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-[#5B4F45]">Email</h3>
              <a
                href="mailto:info@luxhotel.com"
                className="text-[#C6A56A] hover:underline"
              >
                info@luxhotel.com
              </a>
            </div>
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
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white/70 backdrop-blur-xl border border-[#E8E1D5]/50 
                     rounded-2xl px-8 py-10 shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
        >
          <h2 className="text-3xl font-semibold text-center text-[#3C2F22] mb-6">
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
                className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl bg-transparent
                           focus:ring-2 focus:ring-[#C6A56A] outline-none peer"
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
                className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl bg-transparent
                           focus:ring-2 focus:ring-[#C6A56A] outline-none peer"
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
                className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl bg-transparent 
                           focus:ring-2 focus:ring-[#C6A56A] outline-none peer"
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
              className="w-full py-3 rounded-xl bg-[#C6A56A] text-white text-base 
                         font-medium shadow-md hover:bg-[#AD8A56] transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
