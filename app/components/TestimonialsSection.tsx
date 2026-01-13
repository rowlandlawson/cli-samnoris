"use client";

import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Chioma Okafor",
            location: "Lagos, Nigeria",
            rating: 5,
            text: "Absolutely stunning! The CLI Sam Noris Hotel exceeded all my expectations. The staff was incredibly welcoming, and the executive suite was beyond luxurious. Will definitely be back!",
            date: "December 2025",
        },
        {
            name: "David Thompson",
            location: "UK",
            rating: 5,
            text: "Perfect stay in Port Harcourt. The pool bar is fantastic, and the restaurant serves amazing food. Great value for money and exceptional service. Highly recommend!",
            date: "November 2025",
        },
        {
            name: "Emeka Nwosu",
            location: "Abuja, Nigeria",
            rating: 5,
            text: "Best hotel experience in Port Harcourt hands down. The Bush Bar is a unique experience, and the rooms are spotless. The 24/7 concierge made everything so easy.",
            date: "December 2025",
        },
        {
            name: "Sarah Williams",
            location: "USA",
            rating: 4,
            text: "Lovely hotel with great amenities. The swimming pool area is beautiful, and the staff went above and beyond to make our stay comfortable. Would visit again!",
            date: "October 2025",
        },
    ];

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? "fill-[#FFB800] text-[#FFB800]" : "fill-gray-300 text-gray-300"
                    }`}
            />
        ));
    };

    return (
        <section className="py-24 bg-gradient-to-br from-[#1A2947] to-[#2D3E5F] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#C89F65]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#FB8B60]/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <p className="text-[#C89F65] text-sm font-bold uppercase tracking-[0.3em]">
                        Testimonials
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        What Our <span className="italic font-light">Guests Say</span>
                    </h2>
                    <p className="text-white/80 text-lg">
                        Don't just take our word for it - hear from those who've experienced our hospitality
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16 relative">
                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 text-[#C89F65]/20">
                            <Quote className="w-16 h-16" />
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative z-10 space-y-6">
                            {/* Stars */}
                            <div className="flex gap-1 justify-center">
                                {renderStars(testimonials[currentIndex].rating)}
                            </div>

                            {/* Text */}
                            <p className="text-white text-xl md:text-2xl text-center leading-relaxed italic">
                                "{testimonials[currentIndex].text}"
                            </p>

                            {/* Author */}
                            <div className="text-center space-y-1">
                                <p className="text-white font-bold text-lg">
                                    {testimonials[currentIndex].name}
                                </p>
                                <p className="text-white/60 text-sm">
                                    {testimonials[currentIndex].location} • {testimonials[currentIndex].date}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index
                                        ? "bg-[#C89F65] w-8"
                                        : "bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#C89F65] mb-2">4.9</p>
                        <p className="text-white/80 text-sm">Average Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#C89F65] mb-2">500+</p>
                        <p className="text-white/80 text-sm">Happy Guests</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#C89F65] mb-2">98%</p>
                        <p className="text-white/80 text-sm">Satisfaction Rate</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-[#C89F65] mb-2">24/7</p>
                        <p className="text-white/80 text-sm">Support Available</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
