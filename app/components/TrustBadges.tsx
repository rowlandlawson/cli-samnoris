"use client";

import { CheckCircle2, Shield, Clock, Star } from "lucide-react";

export const TrustBadges = () => {
    const badges = [
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "Verified Hotel",
            description: "Licensed & Registered",
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure Booking",
            description: "Safe Payment Process",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "24/7 Support",
            description: "Always Here for You",
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "4.9/5 Rating",
            description: "Trusted by Guests",
        },
    ];

    return (
        <section className="py-12 bg-white border-y border-[#D1CEC7]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center space-y-2 group hover:scale-105 transition-transform"
                        >
                            <div className="text-[#C89F65] group-hover:text-[#FB8B60] transition-colors">
                                {badge.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-[#1A2947] text-sm md:text-base">
                                    {badge.title}
                                </h4>
                                <p className="text-xs text-gray-600">{badge.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
