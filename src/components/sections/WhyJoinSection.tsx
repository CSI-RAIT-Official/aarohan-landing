import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Trophy, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Trophy,
    title: "₹50,000",
    subtitle: "PRIZE POOL",
    description: "Rewarding the top innovative solutions with significant seed prizes.",
    size: "md:col-span-2", 
  },
  {
    icon: Briefcase,
    title: "INTERNSHIPS",
    subtitle: "CAREER",
    description: "Direct visibility to top-tier recruiters and industry partners.",
    size: "md:col-span-1",
  },
  {
    icon: GraduationCap,
    title: "MVP WORKSHOP",
    subtitle: "LEARNING",
    description: "Intensive 4-hour session on building functional prototypes.",
    size: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "CERTIFICATES",
    subtitle: "RECOGNITION",
    description: "Official participation recognition for all active teams.",
    size: "md:col-span-1",
  },
  {
    icon: Award,
    title: "APPRECIATION",
    subtitle: "HONORS",
    description: "Special mentions for exceptional technical innovation.",
    size: "md:col-span-1",
  },
];

const WhyJoinSection = () => {
  return (
    <section id="why-join" className="py-20 bg-[#030712] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#008d76]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Unified with other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase">
            WHY <span className="text-[#008d76]">JOIN US?</span>
          </h2>
          <div className="h-1 w-20 bg-[#008d76] mx-auto rounded-full" />
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`${item.size} group relative p-8 rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#008d76]/50 transition-all duration-500 overflow-hidden`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#008d76]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-[#008d76]/10 border border-[#008d76]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#008d76]/20 transition-all duration-500">
                    <Icon className="w-6 h-6 text-[#008d76]" />
                  </div>
                  
                  <p className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase mb-2">
                    {item.subtitle}
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-black text-white mb-3 tracking-tight group-hover:text-[#008d76] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;