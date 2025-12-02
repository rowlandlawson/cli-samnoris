"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { signinSchema } from "@/types/schema";
import { ArrowRight } from "lucide-react";

type SignInFormProps = {
  setActiveTab?: React.Dispatch<React.SetStateAction<"signin" | "signup">>;
};

export default function SignInForm({ setActiveTab }: SignInFormProps) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = signinSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.issues.forEach(err => {
        if (err.path[0]) fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      await axios.post("/api/auth/signin", form);
      setForm({ email: "", password: "" });
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
            {status === "success" ? "Signed in successfully!" : "Signin failed."}
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="text-2xl font-semibold text-center mb-2 text-[#3C2F22]">
        Sign In
      </h2>
      <p className="text-center text-sm text-[#7A6E63] mb-6">
        Welcome back! Enter your credentials to access your account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="relative">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl bg-transparent focus:ring-2 focus:ring-[#C6A56A] outline-none peer"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-[#7A6E63] text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#C6A56A]">
            Email
          </label>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="relative">
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#E0D8CC] rounded-xl bg-transparent focus:ring-2 focus:ring-[#C6A56A] outline-none peer"
            placeholder=" "
          />
          <label className="absolute left-4 top-3 text-[#7A6E63] text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#C6A56A]">
            Password
          </label>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 rounded-xl bg-[#C6A56A] text-white font-medium shadow-md hover:bg-[#AD8A56] transition"
        >
          Sign In
        </motion.button>
      </form>

      {/* Text under form */}
      <p className="mt-4 text-center text-sm text-[#7A6E63] flex justify-center items-center gap-1">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          onClick={() => setActiveTab?.("signup")}
          className="text-[#C6A56A] hover:underline flex items-center gap-1"
        >
          Sign Up <ArrowRight className="w-4 h-4" />
        </button>
      </p>
    </div>
  );
}
