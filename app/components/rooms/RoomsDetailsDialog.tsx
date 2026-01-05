"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Room } from "./RoomGrid";
import { Star } from "lucide-react";

interface RoomDetailsDialogProps {
  room: Room | null;
  open: boolean;
  onClose: (open: boolean) => void;
}

export const RoomDetailsDialog: React.FC<RoomDetailsDialogProps> = ({ room, open, onClose }) => {
  if (!room) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{room.name}</DialogTitle>
        </DialogHeader>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(room.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
          ))}
        </div>

        <p className="font-semibold mb-2">Amenities:</p>
        <ul className="list-disc ml-6 space-y-1 mb-6">
          {room.amenities.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>

        {/* Booking Panel */}
        <div className="border p-4 rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Book Your Stay</h3>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm">Check-in</label>
              <input type="date" className="w-full border rounded p-2" />
            </div>

            <div>
              <label className="text-sm">Check-out</label>
              <input type="date" className="w-full border rounded p-2" />
            </div>

            <div className="col-span-2">
              <label className="text-sm">Guests</label>
              <input type="number" min="1" className="w-full border rounded p-2" />
            </div>
          </div>

          <Button className="w-full bg-black text-white hover:bg-gray-800">
            Confirm Booking – ${room.price}/night
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
