"use client";

import { useState } from "react";
import { z } from "zod";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { signupSchema } from "@/types/schema";
import { ArrowBigRight } from "lucide-react";

type SignUpFormProps = {
  setActiveTab?: React.Dispatch<React.SetStateAction<"signin" | "signup">>;
};

export default function SignUpForm({ setActiveTab }: SignUpFormProps) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const result = signupSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.issues.forEach((err: z.ZodIssue) => {
        if (typeof err.path[0] === "string") fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      await axios.post("/api/auth/signup", form); // backend endpoint
      setForm({ name: "", email: "", password: "" });
      setStatus("success");
      setTimeout(() => setStatus(null), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white/80 backdrop-blur-xl border border-[#E8E1D5] rounded-2xl shadow-md">
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`mb-4 px-4 py-2 rounded-lg text-white ${
              status === "success" ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {status === "success" ? "Signup successful!" : "Signup failed."}
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="text-2xl font-semibold text-center mb-2 text-[#3C2F22]">
        Create Account
      </h2>
      <p className="text-center text-sm text-[#7A6E63] mb-6">
        Join us and start booking your premium experiences today!
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="relative">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full px-2 py-3 border border-[#E0D8CC] rounded-xl bg-transparent focus:ring-2 focus:ring-[#C6A56A] outline-none peer"
            placeholder=" name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="relative">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl bg-transparent focus:ring-2 focus:ring-[#C6A56A] outline-none peer"
            placeholder="email "
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="relative">
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl bg-transparent focus:ring-2 focus:ring-[#C6A56A] outline-none peer"
            placeholder="password "
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 rounded-xl bg-[#C6A56A] text-white font-medium shadow-md hover:bg-[#AD8A56] transition"
        >
          Sign Up
        </motion.button>
      </form>

      {/* Text under form */}
      <p className="mt-4 text-center text-sm text-[#7A6E63] flex justify-center items-center gap-1">
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => setActiveTab?.("signin")}
          className="text-[#C6A56A] hover:underline flex items-center gap-1"
        >
          Sign In <ArrowBigRight className="w-4 h-4" />
        </button>
      </p>
    </div>
  );
}
