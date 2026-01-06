"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameMonth, 
  isSameDay, 
  isPast
} from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, ShieldCheck } from 'lucide-react';
import { BookedDate, getBookedDates, isDateBooked } from '@/lib/ical-parser';
import { cn } from '@/lib/utils';

export function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState<BookedDate[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  useEffect(() => {
    async function loadBookings() {
      const data = await getBookedDates('https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics');
      setBookedDates(data);
      setLoading(false);
    }
    loadBookings();
  }, []);

  const handleDateClick = (day: Date) => {
    if (isPast(day) && !isSameDay(day, new Date())) return;
    if (isDateBooked(day, bookedDates)) return;
    setSelectedDate(day);
  };

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select an available date first!");
      return;
    }
    setBookingStatus('processing');
    // Simulate API call
    setTimeout(() => {
      setBookingStatus('success');
      // After success, we don't just reset immediately, we show a confirmation
    }, 1500);
  };

  const resetBooking = () => {
    setBookingStatus('idle');
    setSelectedDate(null);
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section id="booking" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Availability</h2>
          <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
            Plan your stay with ease. Our calendar is synchronized via iCal to provide real-time availability from external sources.
            Dates marked in red are already reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-10 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-md bg-green-50 border border-green-200" />
              <span className="text-gray-700">Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-md bg-[#FF385C] border border-[#FF385C]" />
              <span className="text-gray-700 font-bold">Your Selection</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-md bg-red-50 border border-red-200" />
              <span className="text-gray-700">Booked</span>
            </div>
          </div>

          <div className="relative overflow-hidden p-8 bg-white border border-gray-100 rounded-[32px] shadow-2xl">
             {bookingStatus === 'success' ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="text-center py-6"
               >
                 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                   <ShieldCheck className="w-10 h-10" />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                 <p className="text-gray-500 mb-8 max-w-xs mx-auto">
                   We've received your inquiry for <strong>{selectedDate ? format(selectedDate, 'MMM d, yyyy') : ''}</strong>. Check your email for confirmation.
                 </p>
                 <button 
                  onClick={resetBooking}
                  className="text-[#FF385C] font-bold hover:underline"
                 >
                   Select another date
                 </button>
               </motion.div>
             ) : (
               <>
                 <div className="mb-8 pb-6 border-b border-gray-100">
                   <span className="text-gray-400 text-xs uppercase font-bold tracking-[0.2em]">Selected Date</span>
                   <div className="text-3xl font-bold mt-2 text-gray-900">
                     {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Pick a night'}
                   </div>
                 </div>
                 <button 
                    onClick={handleBooking}
                    disabled={bookingStatus !== 'idle'}
                    className={cn(
                      "w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl active:scale-[0.98]",
                      "bg-[#222222] hover:bg-black text-white"
                    )}
                 >
                   {bookingStatus === 'idle' && "Request to Book Now"}
                   {bookingStatus === 'processing' && (
                     <>
                       <div className="w-6 h-6 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                       Confirming...
                     </>
                   )}
                 </button>
                 <p className="text-center text-gray-400 text-xs mt-6 font-medium tracking-tight">
                    You won't be charged yet.
                 </p>
               </>
             )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50/50 rounded-[40px] p-10 border border-gray-100 relative"
        >
          <div className="flex items-center justify-between mb-10">
            <h4 className="text-2xl font-bold text-gray-900">
              {format(currentDate, 'MMMM yyyy')}
            </h4>
            <div className="flex gap-3">
              <button 
                onClick={prevMonth}
                className="p-3 hover:bg-white hover:shadow-md rounded-xl transition-all"
                disabled={isSameMonth(currentDate, new Date())}
              >
                <ChevronLeft className={cn("w-6 h-6", isSameMonth(currentDate, new Date()) ? "text-gray-300" : "text-gray-600")} />
              </button>
              <button 
                onClick={nextMonth}
                className="p-3 hover:bg-white hover:shadow-md rounded-xl transition-all"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-6">
            {weekDays.map(day => (
              <div key={day} className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-3">
            {days.map((day, idx) => {
              const booked = isDateBooked(day, bookedDates);
              const isSelected = selectedDate && isSameDay(day, selectedDate);
              const past = isPast(day) && !isSameDay(day, new Date());
              const currentMonth = isSameMonth(day, monthStart);

              return (
                <div 
                  key={idx}
                  onClick={() => handleDateClick(day)}
                  className={cn(
                    "relative aspect-square flex items-center justify-center text-base font-semibold rounded-2xl transition-all duration-200",
                    !currentMonth && "opacity-0 pointer-events-none",
                    past && "text-gray-300 cursor-not-allowed",
                    !past && booked && "bg-gray-100 text-gray-400 cursor-not-allowed",
                    !past && !booked && !isSelected && "bg-white text-gray-700 shadow-sm hover:shadow-md hover:scale-105 cursor-pointer border border-gray-100",
                    isSelected && "bg-[#FF385C] text-white shadow-xl scale-110 z-10 border-none",
                    isSameDay(day, new Date()) && !isSelected && "ring-2 ring-[#FF385C] ring-offset-4 ring-offset-gray-50"
                  )}
                >
                  {format(day, 'd')}
                  {booked && !past && (
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
          {loading && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-md flex items-center justify-center rounded-[40px] z-20">
              <div className="w-10 h-10 border-4 border-[#FF385C] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
