"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappNumber = "2347079408985"; // +234 format without +
    const defaultMessage = encodeURIComponent(
        "Hi, I'd like to enquire about booking at CLI Sam Noris Hotel"
    );

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {isOpen && (
                    <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80 animate-slideInRight">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-[#1A2947] text-lg">
                                    Chat with us
                                </h3>
                                <p className="text-sm text-gray-600">
                                    We typically respond within minutes
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-gray-600 transition"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <button
                            onClick={handleWhatsAppClick}
                            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Start WhatsApp Chat
                        </button>
                    </div>
                )}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all hover:scale-110 animate-pulse-glow"
                    aria-label="Chat on WhatsApp"
                >
                    {isOpen ? (
                        <X className="w-7 h-7" />
                    ) : (
                        <MessageCircle className="w-7 h-7" />
                    )}
                </button>
            </div>
        </>
    );
};
