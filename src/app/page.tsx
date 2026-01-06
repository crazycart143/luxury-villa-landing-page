"use client";

import { Hero } from "@/components/hero";
import { Gallery } from "@/components/gallery";
import { Amenities } from "@/components/amenities";
import { BookingCalendar } from "@/components/booking-calendar";
import { motion } from "framer-motion";

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
            <a href="#" className="hover:text-[#FF385C] transition-colors">Experience</a>
            <a href="#gallery" className="hover:text-[#FF385C] transition-colors">The Villa</a>
            <a href="#amenities" className="hover:text-[#FF385C] transition-colors">Amenities</a>
            <a href="#booking" className="hover:text-[#FF385C] transition-colors">Availability</a>
          </div>
          <a href="#booking" className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#FF385C] transition-all hover:scale-105 shadow-lg active:scale-95">
            Book Stay
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Property Details Intro */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Refined Luxury</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Your private sanctuary, <br/>thoughtfully curated for the elite.</h2>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            Nestled in total privacy, Villa Oasis combines cutting-edge architecture with organic comfort. 
            Every detail has been refined to provide an unparalleled escape for those who seek the extraordinary.
          </p>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Stats/Highlights */}
      <section className="py-20 bg-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          <div>
            <div className="text-5xl font-black mb-2">450m²</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Living Space</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">4</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Suites</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">12m</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">Infinity Pool</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">0.5km</div>
            <div className="text-gray-400 text-sm uppercase tracking-widest">To Ocean</div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gray-500 via-transparent to-transparent"></div>
      </section>

      {/* Amenities Section */}
      <Amenities />

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Testimonials</span>
              <h2 className="text-5xl font-black mb-6 leading-[1.1]">Guest stays, <br/>lasting memories.</h2>
              <div className="flex gap-2 mb-8">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-[#FF385C]"></div>)}
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 shadow-sm"
              >
                <p className="text-xl text-gray-600 mb-8 italic font-light">"An absolute masterpiece of design. The synchronicity between the indoor and outdoor spaces is something I haven't seen before."</p>
                <div className="font-bold">— Julian V.</div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 shadow-sm md:mt-12"
              >
                <p className="text-xl text-gray-600 mb-8 italic font-light">"The privacy here is unmatched. We spent entire days by the infinity pool without a care in the world. Simply divine."</p>
                <div className="font-bold">— Elena S.</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking/Calendar Section */}
      <BookingCalendar />

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-20">
          <div className="lg:col-span-2">
            <div className="text-3xl font-black tracking-tighter mb-8 italic">
              VILLA OASIS
            </div>
            <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
              A private collection property offering curated experiences for the discerning traveler. 
              Book your private sanctuary today.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white/50">Explore</h4>
            <div className="flex flex-col gap-5 text-gray-300 font-medium">
              <a href="#" className="hover:text-[#FF385C] transition-colors">The Experience</a>
              <a href="#gallery" className="hover:text-[#FF385C] transition-colors">Villa Gallery</a>
              <a href="#booking" className="hover:text-[#FF385C] transition-colors">Live Availability</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white/50">Details</h4>
            <address className="not-italic text-gray-300 font-medium flex flex-col gap-4">
              <p>Costa del Sol, SPAIN</p>
              <p>concierge@villa-oasis.com</p>
              <p>+34 (900) 123-456</p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} VILLA OASIS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
