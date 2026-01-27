import { motion } from "framer-motion";

const themes = [
  {
    icon: "👥",
    title: "Crowd Management",
    tag: "Social Safety",
    description: "Transform the way we navigate shared environments. Create harmony in movement for public squares and transit terminals.",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    tag: "Sustainability",
    description: "Bridge traditional wisdom with food security. Optimize resources to build a sustainable cycle for productivity.",
  },
  {
    icon: "🎓",
    title: "Education",
    tag: "Accessibility",
    description: "Democratize knowledge with adaptive tools. Ensure talent is never limited by geography or status.",
  },
  {
    icon: "🩺",
    title: "Healthcare",
    tag: "Wellness",
    description: "Shift from reactive treatment to proactive wellness. Design human-centric solutions that save lives at scale.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    tag: "Digital Trust",
    description: "Build invisible shields to protect privacy and global systems in our increasingly connected lives.",
  },
];

const ThemesSection = () => {
  return (
    <section id="themes" className="py-24 relative bg-[#030712] overflow-hidden">
      {/* Signature Glow Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#008d76]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#008d76]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="max-w-3xl mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">
              CHALLENGE <span className="text-[#008d76]">THEMES</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#008d76] mb-6 rounded-full hidden md:block" />
            <p className="text-gray-500 text-lg uppercase tracking-widest font-bold text-sm">
              Critical domains for <span className="text-white">real-world transformation</span>.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <ThemeCard key={index} theme={theme} index={index} />
          ))}
          
          
        </div>
      </div>
    </section>
  );
};

const ThemeCard = ({ theme, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 transition-all duration-500 group-hover:bg-white/10 group-hover:border-[#008d76]/50 overflow-hidden shadow-2xl">
        {/* Glow corner effect */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#008d76]/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-12">
            <span className="text-5xl filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
              {theme.icon}
            </span>
            <span className="text-[#008d76]/50 font-black text-[10px] tracking-[0.3em] uppercase pt-2">
              TM // 0{index + 1}
            </span>
          </div>

          <div className="mt-auto">
            <div className="inline-flex items-center gap-2 mb-4">
               <div className="w-1 h-1 rounded-full bg-[#008d76]" />
               <span className="text-[#008d76] text-[10px] font-black uppercase tracking-widest">
                {theme.tag}
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#008d76] transition-colors tracking-tighter uppercase">
              {theme.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              {theme.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemesSection;