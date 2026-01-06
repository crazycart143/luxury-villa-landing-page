"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/images/hero.png", alt: "Villa Exterior", className: "md:col-span-2 md:row-span-2" },
  { src: "/images/living-room.png", alt: "Living Room", className: "col-span-1" },
  { src: "/images/bedroom.png", alt: "Master Bedroom", className: "col-span-1" },
  { src: "/images/kitchen.png", alt: "Modern Kitchen", className: "md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 max-w-[1400px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Glimpse</span>
        <h2 className="text-5xl font-black mb-8 leading-tight">Architecture in <br/>Harmony.</h2>
        <div className="w-20 h-1.5 bg-[#FF385C]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-[32px] group ${img.className} border border-gray-100`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
              <span className="text-white font-bold text-2xl tracking-tighter italic">{img.alt}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
