"use client";

import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { SuitesSection } from "./components/SuitesSection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Contact } from "./components/Contact";
import { WhatsAppWidget } from "./components/WhatsAppWidget";
import { BookingFlowModal } from "./components/BookingFlowModal";
import { useState } from "react";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<{
    name: string;
    price: number;
    image: string;
  } | undefined>(undefined);

  const handleBookingOpen = (room?: { name: string; price: number; image: string }) => {
    setSelectedRoom(room);
    setIsBookingOpen(true);
  };

  const handleBookingClose = () => {
    setIsBookingOpen(false);
    setSelectedRoom(undefined);
  };

  return (
    <div className="w-full">
      <Hero onBookingOpen={() => handleBookingOpen()} />
      <TrustBadges />
      <SuitesSection onBookingOpen={handleBookingOpen} />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <Contact />

      {/* WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Booking Modal */}
      {isBookingOpen && (
        <BookingFlowModal room={selectedRoom} onClose={handleBookingClose} />
      )}
    </div>
  );
}
