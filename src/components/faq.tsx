"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 3:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out can be arranged based on availability."
  },
  {
    question: "Is the pool heated?",
    answer: "Yes, our infinity pool features an eco-friendly heating system that maintains a comfortable temperature year-round."
  },
  {
    question: "Are pets allowed in the villa?",
    answer: "To maintain the pristine condition of our interiors, we generally have a no-pet policy. However, exceptions can be made for small, well-behaved pets with an additional cleaning fee."
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Absolutely. Our concierge team can arrange private luxury transfers from Malaga Airport (AGP) directly to the villa gates."
  },
  {
    question: "Is there a minimum stay requirement?",
    answer: "During peak season (June - August), we have a 5-night minimum stay. For the rest of the year, the minimum stay is 3 nights."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-[#FDFDFD]">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#FF385C] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Information</span>
          <h2 className="text-5xl font-black mb-6 leading-tight">Frequently Asked</h2>
          <div className="w-20 h-1.5 bg-[#FF385C] mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-100 rounded-[24px] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-gray-800 group-hover:text-[#FF385C] transition-colors line-clamp-1">
                  {faq.question}
                </span>
                <div className={cn(
                  "p-2 rounded-full transition-all",
                  openIndex === index ? "bg-[#FF385C] text-white rotate-0" : "bg-gray-50 text-gray-400 rotate-90"
                )}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 text-gray-500 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
