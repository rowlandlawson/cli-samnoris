"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { X, ZoomIn, Play } from "lucide-react";

export const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryImages = [
        { src: "/img/samclit1.jpg", category: "Suites", alt: "Luxury suite interior" },
        {
            src: "/img/samclitv1.mp4",
            thumbnail: "/img/thumbnail1.jpg", 
            category: "Suites",
            alt: "Executive suite video"
        },
        {
            src: "/img/samclitv2.mp4",
            thumbnail: "/img/thumbnail2.jpg", 
            category: "Suites",
            alt: "Executive suite video"
        },
        {
            src: "/img/samclitv3.mp4",
            thumbnail: "/img/thumbnail3.jpg",
            category: "Suites",
            alt: "Executive suite video"
        },
    ];

    // Helper function to check if source is a video
    const isVideo = (src: string) => {
        return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
    };

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <p className="text-[#C89F65] text-sm font-bold uppercase tracking-[0.3em]">
                        Gallery
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1A2947]">
                        See Our <span className="italic font-light">Luxury</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Take a visual tour of our exceptional facilities and amenities
                    </p>
                </div>

                {/* Instagram Handle */}
                <div className="text-center mb-12">
                    <a
                        href="https://instagram.com/clisamnoris_hotel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#1A2947] hover:text-[#C89F65] transition font-semibold"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        @clisamnoris_hotel
                    </a>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((item, index) => {
                        const isVideoItem = isVideo(item.src);
                        const displaySrc = isVideoItem && item.thumbnail ? item.thumbnail : item.src;

                        return (
                            <div
                                key={index}
                                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                                onClick={() => setSelectedImage(item.src)}
                            >
                                <Image
                                    src={displaySrc}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay for videos */}
                                {isVideoItem && (
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <Play className="w-8 h-8 text-[#1A2947] ml-1" fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Overlay for images */}
                                {!isVideoItem && (
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ZoomIn className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                )}

                                {/* Category tag */}
                                <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-[#1A2947] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.category}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/80 hover:text-white transition z-10"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div
                            className="relative max-w-6xl max-h-[90vh] w-full h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {isVideo(selectedImage) ? (
                                <video
                                    src={selectedImage}
                                    className="w-full h-full object-contain"
                                    controls
                                    autoPlay
                                    loop
                                />
                            ) : (
                                <Image
                                    src={selectedImage}
                                    alt="Gallery image"
                                    fill
                                    className="object-contain"
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
