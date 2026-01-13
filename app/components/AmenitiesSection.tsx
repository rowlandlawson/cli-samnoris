"use client";

import { Wine, UtensilsCrossed, Waves, Palmtree, Home, Building } from "lucide-react";

export const AmenitiesSection = () => {
    const amenities = [
        {
            icon: <Waves className="w-8 h-8" />,
            title: "Swimming Pool",
            description: "Relax in our pristine outdoor pool with lounge area",
            color: "bg-blue-50 text-blue-600",
        },
        {
            icon: <Wine className="w-8 h-8" />,
            title: "Pool Bar",
            description: "Enjoy refreshing cocktails poolside",
            color: "bg-purple-50 text-purple-600",
        },
        {
            icon: <UtensilsCrossed className="w-8 h-8" />,
            title: "Restaurant",
            description: "Savor exquisite local and international cuisine",
            color: "bg-orange-50 text-orange-600",
        },
        {
            icon: <Building className="w-8 h-8" />,
            title: "Executive Bar",
            description: "Premium lounge for business and leisure",
            color: "bg-gray-50 text-gray-600",
        },
        {
            icon: <Palmtree className="w-8 h-8" />,
            title: "Bush Bar",
            description: "Unique outdoor bar experience in natural ambiance",
            color: "bg-green-50 text-green-600",
        },
        {
            icon: <Home className="w-8 h-8" />,
            title: "Luxury Suites",
            description: "Elegantly furnished rooms with modern amenities",
            color: "bg-amber-50 text-amber-600",
        },
    ];

    return (
        <section id="amenities" className="py-24 bg-[#F5F3EE]">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <p className="text-[#C89F65] text-sm font-bold uppercase tracking-[0.3em]">
                        Our Services
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A2947]">
                        World-Class <span className="italic font-light">Amenities</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need for an unforgettable stay in Port Harcourt
                    </p>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((amenity, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#C89F65]/20"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`w-16 h-16 ${amenity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                            >
                                {amenity.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1A2947] mb-3 group-hover:text-[#C89F65] transition">
                                {amenity.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Feature Highlight */}
                <div className="mt-20 bg-gradient-to-r from-[#1A2947] to-[#2D3E5F] rounded-3xl p-12 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">24/7 Concierge Service</h3>
                    <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                        Our dedicated team is always available to ensure your stay is perfect. From room service to local recommendations, we've got you covered.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/2347079408985"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-xl transition"
                        >
                            WhatsApp Us
                        </a>
                        <a
                            href="tel:08160073683"
                            className="px-8 py-3 bg-white hover:bg-gray-100 text-[#1A2947] font-semibold rounded-xl transition"
                        >
                            Call: 08160073683
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
