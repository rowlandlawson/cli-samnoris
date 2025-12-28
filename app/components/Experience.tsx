"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import SectionHeading from "./Helper/SectionHeading";


export const SignatureExperience = () => {
  const [selectedExp, setSelectedExp] = useState<(typeof experiences)[number] | null>(null);

  return (
    <section className="relative w-full bg-green-950 py-20 px-4">
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />

      <SectionHeading heading="Our Signature Experience" subheading={""}      />

      {/* Grid of Experiences */}
      <div className="grid md:grid-cols-3 gap-8">
        {experiences.map((exp: (typeof experiences)[number]) => (
          <div
            key={exp.id}
            className="relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          >
            <Image
              src={exp.images[0]}
              alt={exp.title}
              width={500}
              height={400}
              className="object-cover w-full h-64 md:h-72 group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.title}</h3>
              <p className="mt-2 text-sm md:text-base text-gray-200">{exp.description.substring(0, 60)}...</p>

              <Button
                size="sm"
                className="mt-4 bg-[#C89F65] text-white hover:bg-[#8C6A3B] transition rounded-full shadow-lg"
                onClick={() => setSelectedExp(exp)}
              >
                Explore
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Dialog */}
      {selectedExp && (
        <Dialog open={!!selectedExp} onOpenChange={() => setSelectedExp(null)}>
          <DialogContent className="max-w-3xl w-full rounded-xl p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-4">{selectedExp.title}</DialogTitle>
            </DialogHeader>

            {/* Image Carousel (basic swipeable) */}
            <div className="flex overflow-x-auto gap-4 mb-4 pb-2 no-scrollbar">
              {selectedExp.images.map((img: string, i: number) => (
                <Image
                  key={i}
                  src={img}
                  alt={`${selectedExp.title} ${i}`}
                  width={400}
                  height={250}
                  className="rounded-lg shrink-0 object-cover w-80 h-52"
                />
              ))}
            </div>

            <p className="mb-4">{selectedExp.description}</p>

            {/* Perks */}
            <ul className="mb-4 list-disc list-inside space-y-1">
              {selectedExp.perks.map((perk: string, i: number) => (
                <li key={i} className="text-gray-700">{perk}</li>
              ))}
            </ul>

            <div className="flex justify-between items-center mt-6">
              <p className="font-semibold text-lg">{selectedExp.price}</p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg">
                Book Now
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};
