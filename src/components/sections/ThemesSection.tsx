import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ThemeCard from "../ThemeCard"; // Assuming this handles the styling


const themes = [
  {
    icon: "👥",
    title: "Crowd Management",
    description:
      "Transform the way we inhabit and navigate shared environments. Your mission is to create harmony in movement, ensuring that public squares, transit terminals, and massive cultural gatherings remain safe and fluid. By understanding the pulse of human motion, you will design systems that anticipate congestion and protect the well-being of every individual in the crowd.",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    description:
      "Bridge the gap between traditional wisdom and the urgent demands of global food security. Focus on empowering the hands that feed the world by optimizing every drop of water and every acre of land. Your goal is to build a sustainable cycle where productivity thrives without exhausting our natural resources, ensuring a resilient future for our food systems.",
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "Democratize the pursuit of knowledge by building tools that adapt to the learner, rather than forcing the learner to adapt to the system. You are tasked with creating pathways that make quality instruction accessible to every corner of the globe, fostering curiosity and ensuring that talent is never limited by geography, physical ability, or economic status.",
  },
  {
    icon: "🩺",
    title: "Healthcare",
    description:
      "Redefine the boundaries of modern medicine by shifting the focus from reactive treatment to proactive wellness. Design solutions that bring high-quality care to the doorstep of those who need it most, streamlining the journey from diagnosis to recovery. Your challenge is to make health systems more human-centric, equitable, and capable of saving lives at scale.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Establish a foundation of absolute trust in our increasingly digital lives. As our world becomes more connected, the vulnerability of our personal and collective information grows. Your objective is to build invisible shields that protect privacy and maintain the integrity of our global systems, ensuring that the digital future remains a safe space for innovation and expression.",
  },
];
const ThemesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="themes" className="py-24 relative bg-black overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-left mb-20" // Align left to match the image style
        >
          {/* Headline UI Matching the Image */}


 <h2 className="section-title">
            Aarohan 1.0 <span className="gradient-text">THEMES</span>
          </h2>
          {/* Subtle underline to anchor the section */}
          <div className="h-2 w-32 bg-[#00E5D1] mt-6" />
        </motion.div>

        {/* Flex container prevents overlapping by distributing space */}
        <div className="flex flex-col md:flex-row gap-4 min-h-[500px] w-full items-stretch">
          {themes.map((theme, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  flex: isAnyHovered ? (isHovered ? 3 : 0.8) : 1,
                  filter: isAnyHovered && !isHovered ? "grayscale(1) opacity(0.4)" : "grayscale(0) opacity(1)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="relative cursor-pointer overflow-hidden rounded-3xl"
              >
                <div className={`h-full p-8 border border-white/10 glass-card flex flex-col justify-between transition-all duration-500 ${isHovered ? 'bg-[#00E5D1]/10 border-[#00E5D1]/50' : 'bg-white/5'}`}>
                  <div className="relative z-10">
                    <span className="text-4xl mb-6 block">{theme.icon}</span>
                    <h3 className={`text-2xl font-bold mb-4 transition-colors ${isHovered ? 'text-[#00E5D1]' : 'text-white'}`}>
                      {theme.title}
                    </h3>
                    
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                      }}
                      className={`text-sm text-gray-300 leading-relaxed ${!isHovered && 'hidden'}`}
                    >
                      {theme.description}
                    </motion.p>
                  </div>

                  <div className="mt-6 flex items-center justify-between relative z-10">
                    <span className="text-xs font-mono text-white/30">0{index + 1}</span>
                    {isHovered && (
                      <motion.div 
                        layoutId="arrow"
                        className="w-10 h-10 rounded-full bg-[#00E5D1] flex items-center justify-center"
                      >
                        <div className="w-2.5 h-2.5 border-t-2 border-r-2 border-black rotate-45" />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .glass-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
        /* Using a condensed font weight if available in your project */
        h2 {
          font-family: 'Inter Tight', 'Impact', sans-serif;
        }

        
      `}</style>
    </section>
  );
};

export default ThemesSection;