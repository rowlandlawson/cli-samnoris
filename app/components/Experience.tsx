
import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const treatments = [
  {
    title: "Aromatherapy Massage",
    desc: "A rhythmic and deeply relaxing massage using custom-blended essential oils.",
    duration: "90 min",
    image: "/images/exp3.png"
  },
  {
    title: "Hydra-Radiance Facial",
    desc: "Advanced hydration therapy that leaves skin glowing and youthful.",
    duration: "60 min",
    image: "/images/exp4.png"
  },
  {
    title: "Hot Stone Ritual",
    desc: "Warmed volcanic stones combined with expert touch for profound tension release.",
    duration: "120 min",
    image: "/images/exp2.png"
  },
  {
    title: "Thermal Spring Bath",
    desc: "Mineral-rich waters sourced from local springs for natural detoxification.",
    duration: "Unlimited",
    image: "/images/exp1.png"
  }
];

export const SpaSection: React.FC = () => {
  return (
    <section id="spa" className="py-24 bg-[#011f15] relative">
      {/* Decorative floral texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h3 className="text-primary text-sm font-bold tracking-[0.4em] uppercase">Sanctuary</h3>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
              A Journey into <br/>
              <span className="italic font-light text-primary">Serenity</span>
            </h2>
            <p className="text-gray-300 font-light leading-relaxed max-w-xl">
              Escape the chaos of the world and find your balance at LuxeHaven Spa. Our master therapists use ancient wisdom and modern science to rejuvenate your mind, body, and spirit in an atmosphere of absolute silence and luxury.
            </p>
            <div className="flex items-center space-x-8">
                <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                        <Image key={i} src="/images/bar1.png" width={48} height={48} className="rounded-full border-2 border-[#011f15] shadow-lg" alt="Reviewer" />
                    ))}
                </div>
                <div>
                    <p className="text-white font-bold text-sm">Rated 4.9/5 by our guests</p>
                    <p className="text-primary text-xs uppercase tracking-widest">Wellness Excellence Award 2024</p>
                </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
            <Image 
              src="/images/bar.png" 
              width={1000}
              height={500}
              className="relative w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl border border-white/5"
              alt="Main Spa Area"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 hover:scale-110 transition-transform">
                    <span className="material-icons text-white text-4xl">play_arrow</span>
                </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((t, idx) => (
            <div key={idx} className="bg-surface-dark/40 backdrop-blur-lg border border-white/5 rounded-4xl overflow-hidden hover:border-primary/30 transition-all duration-500 group">
              <div className="h-48 overflow-hidden">
                <Image 
                  src={t.image} 
                  width={400}
                  height={192}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={t.title}
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] text-gray-100 font-bold uppercase tracking-[0.2em]">{t.duration}</span>
                    <span className="material-icons text-gray-100 text-sm">spa</span>
                </div>
                <h4 className="font-display text-xl font-bold text-white transition-colors">{t.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {t.desc}
                </p>
                <a href="#" className="inline-flex gap-6 items-center text-xs font-bold uppercase tracking-widest text-[#C89F65] hover:gap-2 transition-all">
                    Discover More <span className="material-icons text-xs ml-1"><ChevronRight /></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};