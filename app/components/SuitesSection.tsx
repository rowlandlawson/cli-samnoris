"use client";

import React from "react";
import Image from "next/image";
import { Wifi, Coffee, Tv, Wind, Droplet, UtensilsCrossed } from "lucide-react";
import { useState } from "react";

interface Suite {
    id: number;
    name: string;
    price: number;
    image: string;
    amenities: string[];
    available: number;
}

interface SuitesSectionProps {
    onBookingOpen?: (room: { name: string; price: number; image: string }) => void;
}

export const SuitesSection = ({ onBookingOpen }: SuitesSectionProps) => {
    const suites: Suite[] = [
        {
            id: 1,
            name: "Executive Suite",
            price: 45000,
            image: "/images/room1.png",
            amenities: ["WiFi", "AC", "Mini Bar", "Smart TV", "Shower", "Breakfast"],
            available: 3,
        },
        {
            id: 2,
            name: "Deluxe Suite",
            price: 35000,
            image: "/images/room2.png",
            amenities: ["WiFi", "AC", "Mini Bar", "TV", "Shower"],
            available: 5,
        },
        {
            id: 3,
            name: "Premium Suite",
            price: 55000,
            image: "/images/room3.png",
            amenities: ["WiFi", "AC", "Mini Bar", "Smart TV", "Bathtub", "Breakfast", "Pool Access"],
            available: 2,
        },
        {
            id: 4,
            name: "Standard Suite",
            price: 25000,
            image: "/images/room4.png",
            amenities: ["WiFi", "AC", "TV", "Shower"],
            available: 7,
        },
    ];

    const getAmenityIcon = (amenity: string) => {
        const icons: { [key: string]: React.ReactElement } = {
            WiFi: <Wifi className="w-4 h-4" />,
            Coffee: <Coffee className="w-4 h-4" />,
            TV: <Tv className="w-4 h-4" />,
            "Smart TV": <Tv className="w-4 h-4" />,
            AC: <Wind className="w-4 h-4" />,
            "Mini Bar": <UtensilsCrossed className="w-4 h-4" />,
            Shower: <Droplet className="w-4 h-4" />,
            Bathtub: <Droplet className="w-4 h-4" />,
        };
        return icons[amenity] || <Coffee className="w-4 h-4" />;
    };

    return (
        <section id="suites" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <p className="text-[#C89F65] text-sm font-bold uppercase tracking-[0.3em]">
                        Accommodation
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A2947]">
                        Luxury <span className="italic font-light">Suites</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Choose from our elegantly designed suites, each crafted for your comfort and relaxation
                    </p>
                </div>

                {/* Suites Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {suites.map((suite, index) => (
                        <div
                            key={suite.id}
                            className="group bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:border-[#C89F65]/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={suite.image}
                                    alt={suite.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                {/*Suite Name */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1A2947] group-hover:text-[#C89F65] transition">
                                        {suite.name}
                                    </h3>
                                    <p className="text-2xl font-bold text-[#C89F65] mt-1">
                                        ₦{suite.price.toLocaleString()}
                                        <span className="text-sm text-gray-500 font-normal"> /night</span>
                                    </p>
                                </div>

                                {/* Amenities */}
                                <div className="flex flex-wrap gap-2">
                                    {suite.amenities.slice(0, 4).map((amenity) => (
                                        <div
                                            key={amenity}
                                            className="flex items-center gap-1 text-xs bg-[#F5F3EE] text-[#1A2947] px-3 py-1.5 rounded-full"
                                        >
                                            {getAmenityIcon(amenity)}
                                            <span>{amenity}</span>
                                        </div>
                                    ))}
                                    {suite.amenities.length > 4 && (
                                        <div className="flex items-center text-xs text-gray-500 px-3 py-1.5">
                                            +{suite.amenities.length - 4} more
                                        </div>
                                    )}
                                </div>

                                {/* CTA Button */}
                                <button
                                    onClick={() =>
                                        onBookingOpen?.({ name: suite.name, price: suite.price, image: suite.image })
                                    }
                                    className="w-full py-3 bg-[#1A2947] hover:bg-[#FB8B60] text-white font-semibold rounded-xl transition-all transform hover:scale-105"
                                >
                                    Check Availability
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-4">Need help choosing? Our team is ready to assist</p>
                    <a
                        href="tel:08160073683"
                        className="inline-block px-8 py-3 border-2 border-[#1A2947] text-[#1A2947] hover:bg-[#1A2947] hover:text-white font-semibold rounded-xl transition"
                    >
                        Call Us: 08160073683
                    </a>
                </div>
            </div>
        </section>
    );
};
