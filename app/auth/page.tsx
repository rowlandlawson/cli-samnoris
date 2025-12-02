"use client";

import { useState } from "react";
import SignUpForm from "../components/auth/SignupForm";
import { motion } from "framer-motion";
import SignInForm from "../components/auth/SigninForm";
import Image from "next/image";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{ background: "#FAF8F3" }}
    >
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT: Tabs */}
        <div className="md:w-1/3 flex flex-col bg-[#C6A56A]/10 p-6 md:justify-center gap-4 relative">
        <div className="absolute top-4 left-3">
          <Image
              src="/images/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full w-12 h-12 object-cover"
            />
        </div>
        <h2 className="font-semibold text-2xl">Welcome to Sam Noris</h2>
          <button
            className={`py-3 rounded-xl font-semibold transition ${
              activeTab === "signin" ? "bg-[#C6A56A]/20 text-[#3C2F22]" : "text-[#5B4F45]"
            }`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`py-3 rounded-xl font-semibold transition ${
              activeTab === "signup" ? "bg-[#C6A56A]/20 text-[#3C2F22]" : "text-[#5B4F45]"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* RIGHT: Form */}
        <div className="md:w-2/3 p-6 flex items-center justify-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {activeTab === "signin" ? <SignInForm /> : <SignUpForm />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
