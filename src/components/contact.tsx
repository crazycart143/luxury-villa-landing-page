"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Concierge</span>
            <h2 className="text-5xl font-black mb-8 leading-tight">Begin your <br/>journey here.</h2>
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-12">
              Our dedicated house manager is available 24/7 to ensure your stay is flawless. Contact us for bespoke arrangements, private chefs, or local recommendations.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF385C] transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold">concierge@villa-oasis.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF385C] transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Call Directly</p>
                  <p className="text-lg font-bold">+34 (900) 123-456</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            {status === 'sent' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-10"
              >
                <div className="w-20 h-20 bg-[#FF385C] rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(255,56,92,0.4)]">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Received</h3>
                <p className="text-gray-400">Our team will respond to your inquiry personally within the hour.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-[#FF385C] font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF385C] transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF385C] transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea required rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#FF385C] transition-colors resize-none" placeholder="Tell us about your plans..." />
                </div>
                <button 
                  disabled={status === 'sending'}
                  className="w-full bg-[#FF385C] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#FF385C]/90 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF385C]/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
