"use client";

import { useState } from "react";
import { X, Calendar, Users, Copy, Check, Phone } from "lucide-react";
import Image from "next/image";

interface BookingFlowModalProps {
    room?: {
        name: string;
        price: number;
        image: string;
    };
    onClose: () => void;
}

export const BookingFlowModal = ({ room, onClose }: BookingFlowModalProps) => {
    const [step, setStep] = useState(1);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState(1);
    const [copied, setCopied] = useState(false);

    const accountNumber = "5098471759";
    const bankName = "Monie Point";
    const accountName = "Cli Samnoris Hotel";
    const whatsappNumber = "2347079408985";
    const phoneNumber = "08160073683";

    const copyAccountNumber = () => {
        navigator.clipboard.writeText(accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const calculateNights = () => {
        if (!checkIn || !checkOut) return 0;
        const start = new Date(checkIn);
        const end = new Date(checkOut);
        const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
        return diff > 0 ? diff : 0;
    };

    const totalPrice = calculateNights() * (room?.price || 0);

    const handlePaymentConfirmation = () => {
        const message = encodeURIComponent(
            `Hello CLI Sam Noris Hotel, I've just paid for ${room?.name || "room"} booking from ${checkIn} to ${checkOut} for ${guests} guest(s). Total: ₦${totalPrice.toLocaleString()}. Transaction ID: ______. Please confirm my reservation.`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    };

    const handleEnquiry = () => {
        const message = encodeURIComponent(
            `Hi, I'd like to enquire about availability for ${room?.name || "a room"} from ${checkIn} to ${checkOut} for ${guests} guest(s).`
        );
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    };

    const handleCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 z-50 bg-[#1A2947] text-white p-6 rounded-t-3xl flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">Book Your Stay</h2>
                        <p className="text-sm text-white/70">Step {step} of 3</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-100 h-2">
                    <div
                        className="bg-[#C89F65] h-full transition-all duration-300"
                        style={{ width: `${(step / 3) * 100}%` }}
                    />
                </div>

                {/* Content */}
                <div className="p-8">
                    {/* Step 1: Room Details */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-[#1A2947]">Room Selected</h3>
                            {room?.image && (
                                <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}
                            <div className="bg-[#F5F3EE] p-6 rounded-2xl">
                                <h4 className="font-bold text-lg text-[#1A2947]">{room?.name || "Luxury Suite"}</h4>
                                <p className="text-2xl font-bold text-[#C89F65] mt-2">
                                    ₦{room?.price?.toLocaleString() || "0"} <span className="text-sm text-gray-600">per night</span>
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-[#1A2947] mb-2">
                                        Check-in Date
                                    </label>
                                    <input
                                        type="date"
                                        value={checkIn}
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        min={new Date().toISOString().split("T")[0]}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C89F65] focus:ring-2 focus:ring-[#C89F65]/20 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#1A2947] mb-2">
                                        Check-out Date
                                    </label>
                                    <input
                                        type="date"
                                        value={checkOut}
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        min={checkIn || new Date().toISOString().split("T")[0]}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C89F65] focus:ring-2 focus:ring-[#C89F65]/20 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#1A2947] mb-2">
                                        Number of Guests
                                    </label>
                                    <select
                                        value={guests}
                                        onChange={(e) => setGuests(parseInt(e.target.value))}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C89F65] focus:ring-2 focus:ring-[#C89F65]/20 outline-none transition"
                                    >
                                        {[1, 2, 3, 4, 5, 6].map((num) => (
                                            <option key={num} value={num}>
                                                {num} Guest{num > 1 ? "s" : ""}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {checkIn && checkOut && (
                                <div className="bg-[#C89F65]/10 p-4 rounded-xl">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#1A2947] font-semibold">
                                            {calculateNights()} Night{calculateNights() > 1 ? "s" : ""}
                                        </span>
                                        <span className="text-2xl font-bold text-[#C89F65]">
                                            ₦{totalPrice.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={() => setStep(2)}
                                disabled={!checkIn || !checkOut || calculateNights() <= 0}
                                className="w-full py-4 bg-[#FB8B60] hover:bg-[#FF6B3D] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition"
                            >
                                Continue to Payment
                            </button>
                        </div>
                    )}

                    {/* Step 2: Payment Details */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-[#1A2947]">Payment Information</h3>

                            <div className="bg-gradient-to-br from-[#1A2947] to-[#2D3E5F] text-white p-6 rounded-2xl shadow-xl">
                                <p className="text-sm text-white/70 mb-4">Transfer to:</p>

                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs text-white/60">Account Number</p>
                                        <div className="flex items-center justify-between mt-1">
                                            <p className="text-3xl font-bold tracking-wider">{accountNumber}</p>
                                            <button
                                                onClick={copyAccountNumber}
                                                className="ml-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
                                            >
                                                {copied ? (
                                                    <Check className="w-5 h-5 text-green-400" />
                                                ) : (
                                                    <Copy className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-xs text-white/60">Bank Name</p>
                                        <p className="text-lg font-semibold">{bankName}</p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-white/60">Account Name</p>
                                        <p className="text-lg font-semibold">{accountName}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#F5F3EE] p-6 rounded-2xl space-y-3">
                                <h4 className="font-bold text-[#1A2947]">Booking Summary</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Room:</span>
                                        <span className="font-semibold text-[#1A2947]">{room?.name}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Check-in:</span>
                                        <span className="font-semibold text-[#1A2947]">{checkIn}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Check-out:</span>
                                        <span className="font-semibold text-[#1A2947]">{checkOut}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Guests:</span>
                                        <span className="font-semibold text-[#1A2947]">{guests}</span>
                                    </div>
                                    <div className="border-t border-gray-300 pt-2 flex justify-between">
                                        <span className="font-bold text-[#1A2947]">Total:</span>
                                        <span className="font-bold text-2xl text-[#C89F65]">
                                            ₦{totalPrice.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setStep(1)}
                                    className="flex-1 py-4 bg-gray-200 hover:bg-gray-300 text-[#1A2947] font-semibold rounded-xl transition"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    className="flex-1 py-4 bg-[#FB8B60] hover:bg-[#FF6B3D] text-white font-bold rounded-xl transition"
                                >
                                    I've Made Payment
                                </button>
                            </div>

                            <button
                                onClick={handleEnquiry}
                                className="w-full py-3 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold rounded-xl transition flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Enquire First on WhatsApp
                            </button>
                        </div>
                    )}

                    {/* Step 3: Confirmation */}
                    {step === 3 && (
                        <div className="space-y-6 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <Check className="w-10 h-10 text-green-600" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-[#1A2947] mb-2">Next Steps</h3>
                                <p className="text-gray-600">
                                    Please confirm your payment via WhatsApp or call us directly
                                </p>
                            </div>

                            <div className="bg-[#F5F3EE] p-6 rounded-2xl space-y-4">
                                <button
                                    onClick={handlePaymentConfirmation}
                                    className="w-full py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl transition flex items-center justify-center gap-2"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Confirm on WhatsApp
                                </button>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-[#F5F3EE] text-gray-500">or</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCall}
                                    className="w-full py-4 bg-[#1A2947] hover:bg-[#2D3E5F] text-white font-bold rounded-xl transition flex items-center justify-center gap-2"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Us: {phoneNumber}
                                </button>
                            </div>

                            <p className="text-xs text-gray-500">
                                Our team will confirm your reservation within 30 minutes
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
