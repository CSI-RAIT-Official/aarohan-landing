import { motion } from "framer-motion";
import { Download, Users, Trophy, Clock, Layers } from "lucide-react";
import AnimatedCounter from "../AnimatedCounter";

const AboutSection = () => {
  const stats = [
    { end: 500, suffix: "+", label: "Participants", icon: <Users className="text-[#008d76]" size={24} /> },
    { end: 50000, prefix: "₹", label: "Prize Pool", icon: <Trophy className="text-[#008d76]" size={24} /> },
    { end: 24, suffix: "h", label: "of Coding", icon: <Clock className="text-[#008d76]" size={24} /> },
    { end: 2, label: "No. of Rounds", icon: <Layers className="text-[#008d76]" size={24} /> }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#030712] text-white">
      {/* Background Glows to match Hero */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008d76]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#008d76]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
            ABOUT <span className="text-[#008d76]">AAROHAN 1.0</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#008d76] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Text Content - Spans 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#008d76]/20 flex items-center justify-center text-[#008d76] text-sm">01</span>
                The Vision
              </h3>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  AAROHAN 1.0 is a national-level <span className="text-white font-medium">24-hour innovation marathon</span> designed to empower students to transform bold ideas into impactful, real-world solutions.
                </p>
                <p>
                  With a focus on <span className="text-[#008d76]">social impact and sustainability</span>, we challenge conventional thinking to promote practical, outcome-driven problem-solving.
                </p>
              </div>

              <motion.a
                href="/AAROHAN 1.0 Brochure.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all w-full sm:w-max"
              >
                <Download size={20} /> Download Brochure
              </motion.a>
            </div>
          </motion.div>

          {/* Stats Grid - Spans 5 cols */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:border-[#008d76]/40 transition-colors"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black mb-1">
                  <AnimatedCounter
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;