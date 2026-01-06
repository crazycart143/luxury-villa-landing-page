"use client";

import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Amenities } from "@/components/amenities";
import { BookingCalendar } from "@/components/booking-calendar";
import { Location } from "@/components/location";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { motion } from "framer-motion";
import { Maximize, Bed, Waves, Compass } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-gray-900 flex items-center gap-2 italic">
            VILLA OASIS
          </div>
          <div className="hidden md:flex gap-10 font-semibold text-gray-500 text-sm uppercase tracking-widest">
            <a href="#gallery" className="hover:text-[#FF385C] transition-colors">The Villa</a>
            <a href="#amenities" className="hover:text-[#FF385C] transition-colors">Amenities</a>
            <a href="#location" className="hover:text-[#FF385C] transition-colors">Location</a>
            <a href="#booking" className="hover:text-[#FF385C] transition-colors">Book Stay</a>
          </div>
          <a href="#contact" className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#FF385C] transition-all hover:scale-105 shadow-lg active:scale-95">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Property Details Intro */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center border-b border-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Refined Luxury</span>
          <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight tracking-[calc(var(--tracking-tighter)*2)]">Your private sanctuary, <br/>curated for the elite.</h2>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            Nestled in total privacy, Villa Oasis combines cutting-edge architecture with organic comfort. 
            Every detail has been refined to provide an unparalleled escape for those who seek the extraordinary.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Stats/Highlights */}
      <section className="py-32 bg-[#FDFDFD] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
            {[
              { label: "Living Space", value: "450m²", icon: <Maximize className="w-8 h-8" /> },
              { label: "Luxury Suites", value: "4", icon: <Bed className="w-8 h-8" /> },
              { label: "Infinity Pool", value: "12m", icon: <Waves className="w-8 h-8" /> },
              { label: "To The Ocean", value: "0.5km", icon: <Compass className="w-8 h-8" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center md:items-start group"
              >
                <div className="mb-8 text-black/20 group-hover:text-[#FF385C] transition-colors duration-500">
                  {stat.icon}
                </div>
                <div className="text-6xl font-black mb-3 tracking-tighter text-gray-900 leading-none">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 group-hover:text-gray-900 transition-colors duration-500">
                  {stat.label}
                </div>
                {/* Minimalist Accent Line */}
                <div className="w-8 h-1 bg-gray-100 mt-6 group-hover:w-16 group-hover:bg-[#FF385C] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <Amenities />

      {/* Location Section */}
      <Location />

      {/* Testimonials */}
      <section className="py-40 px-6 bg-gray-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
            <div className="lg:col-span-1 sticky top-32">
              <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
              <h2 className="text-5xl font-black mb-8 leading-[1.1]">Guest stays, <br/>lasting memories.</h2>
              <div className="flex gap-2 mb-8">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#FF385C]"></div>)}
              </div>
              <p className="text-gray-500 font-light leading-relaxed">
                We take pride in delivering an experience that exceeds expectations. Read what our distinguished guests have to say about their sanctuary.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-12 rounded-[40px] bg-white border border-gray-100 shadow-xl shadow-gray-200/20"
              >
                <div className="text-[#FF385C] text-6xl font-serif mb-6">"</div>
                <p className="text-xl text-gray-700 mb-10 italic font-light leading-relaxed">An absolute masterpiece of design. The synchronicity between the indoor and outdoor spaces is something I haven't seen before. The privacy here is a literal treasure.</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full" />
                  <div>
                    <div className="font-bold text-lg">Julian V.</div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Berlin, Germany</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-12 rounded-[40px] bg-white border border-gray-100 shadow-xl shadow-gray-200/20 md:mt-20"
              >
                <div className="text-[#FF385C] text-6xl font-serif mb-6">"</div>
                <p className="text-xl text-gray-700 mb-10 italic font-light leading-relaxed">The concierge service was impeccable. We spent entire days by the infinity pool without a single distraction. It’s hard to imagine staying anywhere else.</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full" />
                  <div>
                    <div className="font-bold text-lg">Elena S.</div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">London, UK</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking/Calendar Section */}
      <BookingCalendar />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-black text-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-24">
          <div className="lg:col-span-2">
            <div className="text-4xl font-black tracking-tighter mb-10 italic">
              VILLA OASIS
            </div>
            <p className="text-gray-400 max-w-md text-xl font-light leading-relaxed">
              A private collection property offering curated experiences for the discerning traveler. 
              Book your private sanctuary today.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-white/30">Navigation</h4>
            <div className="flex flex-col gap-6 text-gray-300 font-bold tracking-tight">
              <a href="#" className="hover:text-[#FF385C] transition-colors">Experience</a>
              <a href="#gallery" className="hover:text-[#FF385C] transition-colors">Villa Gallery</a>
              <a href="#location" className="hover:text-[#FF385C] transition-colors">Location</a>
              <a href="#booking" className="hover:text-[#FF385C] transition-colors">Live Availability</a>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10 text-white/30">Connect</h4>
            <address className="not-italic text-gray-300 font-bold flex flex-col gap-6">
              <p>Marbella, SPAIN</p>
              <p>concierge@villa-oasis.com</p>
              <p>+34 (900) 123-456</p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-600 text-xs font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} VILLA OASIS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
