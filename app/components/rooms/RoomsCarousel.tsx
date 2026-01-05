"use client";

import { useState } from "react";
import { Room, RoomGrid  } from "./RoomGrid";
import { RoomDetailsDialog } from "./RoomsDetailsDialog";

export default function RoomsCarousel() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookClick = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) setSelectedRoom(null);
  };

  return (
    <>
      <RoomGrid onBookClick={handleBookClick} />
      <RoomDetailsDialog
        room={selectedRoom}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
