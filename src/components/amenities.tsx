"use client";

import { motion } from "framer-motion";
import { Wifi, Waves, Car, Coffee, Tv, Wind, Utensils, ShieldCheck } from "lucide-react";

const amenities = [
  { icon: Waves, name: "Private Pool", description: "Infinity pool with heating option" },
  { icon: Wifi, name: "High-speed Wi-Fi", description: "500 Mbps fiber connection" },
  { icon: Car, name: "Free Parking", description: "Private garage for 2 cars" },
  { icon: Wind, name: "Air Conditioning", description: "Climate control in every room" },
  { icon: Utensils, name: "Gourmet Kitchen", description: "Fully equipped with high-end appliances" },
  { icon: Tv, name: "Smart TV", description: "65-inch with Netflix and Disney+" },
  { icon: Coffee, name: "Coffee Machine", description: "Nespresso with complimentary pods" },
  { icon: ShieldCheck, name: "Security", description: "24/7 alarm system and safe" },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-32 bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-24"
        >
          <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Essentials</span>
          <h2 className="text-5xl font-black mb-8 leading-tight">Curated for <br/>supreme comfort.</h2>
          <div className="w-20 h-1.5 bg-[#FF385C]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-[20px] flex items-center justify-center mb-10 group-hover:bg-[#FF385C] group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-3 duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{item.name}</h3>
              <p className="text-gray-500 leading-relaxed font-light text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
