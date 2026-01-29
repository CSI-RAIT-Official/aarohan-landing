import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Trophy, ShieldCheck } from "lucide-react";
import { useMemo } from "react";

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

// Memoized Benefit Card Component
const BenefitCard = ({ item, index }: { item: typeof benefits[0]; index: number }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`${item.size} group relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] backdrop-blur-md bg-white/5 border border-white/10 hover:border-[#008d76]/50 transition-all duration-300 overflow-hidden`}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#008d76]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#008d76]/10 border border-[#008d76]/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:bg-[#008d76]/20 transition-all duration-300">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#008d76]" />
        </div>
        
        <p className="text-[9px] md:text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase mb-1 md:mb-2">
          {item.subtitle}
        </p>
        
        <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white mb-2 md:mb-3 tracking-tight group-hover:text-[#008d76] transition-colors duration-300">
          {item.title}
        </h3>
        
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

// Memoized Section Header
const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="text-center mb-10 md:mb-12"
  >
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-3 md:mb-4 text-white uppercase px-4">
      WHY <span className="text-[#008d76]">JOIN US?</span>
    </h2>
    <div className="h-1 w-16 md:w-20 bg-[#008d76] mx-auto rounded-full" />
  </motion.div>
);

// Memoized Background Glow
const BackgroundGlow = () => (
  <div className="absolute top-1/2 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#008d76]/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none translate-y-1/2" />
);

const WhyJoinSection = () => {
  // Pre-calculate benefit cards
  const benefitCards = useMemo(() => 
    benefits.map((item, index) => (
      <BenefitCard key={index} item={item} index={index} />
    )), []
  );

  return (
    <section id="why-join" className="py-16 md:py-20 bg-[#030712] relative overflow-hidden">
      <BackgroundGlow />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader />
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {benefitCards}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;