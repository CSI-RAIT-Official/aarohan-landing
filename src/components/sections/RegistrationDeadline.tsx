import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RegistrationDeadline = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const targetDate = "2026-02-20T23:59:00";

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const Box = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl font-black text-[#008d76]"
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-12 bg-[#030712] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Compact Header */}
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              Registration <span className="text-[#008d76]">Ends In</span>
            </h2>
            <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-1">
              Feb 20th • 11:59 PM
            </p>
          </div>

          {/* Scaled Down Timer */}
          <div className="flex gap-3 md:gap-4 items-start">
            <Box value={timeLeft.days} label="Days" />
            <span className="text-xl font-black text-white/20 mt-3">:</span>
            <Box value={timeLeft.hours} label="Hours" />
            <span className="text-xl font-black text-white/20 mt-3">:</span>
            <Box value={timeLeft.minutes} label="Mins" />
            <span className="text-xl font-black text-white/20 mt-3">:</span>
            <Box value={timeLeft.seconds} label="Secs" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegistrationDeadline;