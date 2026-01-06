"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Neighborhood</span>
            <h2 className="text-5xl font-black mb-8 leading-tight">Perfectly Positioned.</h2>
            <p className="text-xl text-gray-500 leading-relaxed font-light mb-10">
              Located in the exclusive enclave of the Costa del Sol, Villa Oasis offers the perfect balance between sequestered privacy and proximity to the Mediterranean's most vibrant destinations.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                  <Navigation className="w-6 h-6 text-[#FF385C]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Malaga Airport</h4>
                  <p className="text-gray-500">25 minutes by private transfer</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                  <MapPin className="w-6 h-6 text-[#FF385C]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Puerto Banús</h4>
                  <p className="text-gray-500">10 minutes to luxury dining & shopping</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl group"
          >
            <Image
              src="/images/map.png"
              alt="Villa Oasis Location Map"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5" />
            
            {/* Pulsing Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#FF385C] rounded-full opacity-20 animate-ping" />
                <div className="absolute -inset-2 bg-[#FF385C] rounded-full opacity-40 animate-pulse" />
                <div className="relative w-6 h-6 bg-[#FF385C] rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center justify-between border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Secret Location</p>
                  <p className="text-sm font-bold">Marbella, Spain</p>
                </div>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-xs font-bold">Directions</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
