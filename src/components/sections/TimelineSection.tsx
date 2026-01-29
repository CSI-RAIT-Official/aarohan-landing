import { motion } from "framer-motion";
import { useMemo, memo } from "react";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

// Memoized timeline data - prevent recreation on every render
const timelineData = [
  {
    title: "Registration",
    description: "Registrations open for all eligible participants. Sign up to secure your spot.",
    date: "Feb 2026",
    time: "Opening Soon",
  },
  {
    title: "Round 1 Submission",
    description: "Registrations close. Teams must submit their PPT within the given timeline.",
    date: "Feb 20, 2026",
    time: "11:59 PM IST",
  },
  {
    title: "Round 1 Results",
    description: "Results and shortlisted teams for Round 2 will be announced.",
    date: "Feb 28, 2026",
    time: "TBA",
  },
  {
    title: "Round 2: Grand Finale",
    description: "Live event: Shortlisted teams build an MVP, present their solution, and showcase a working demo.",
    date: "Mar 6-7, 2026",
    time: "24h Live Session",
  },
];

// Memoized Timeline Item Component
const TimelineItem = memo(({ item, index }: { item: typeof timelineData[0]; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative mb-12 md:mb-16"
    >
      {/* Glowing Node on Timeline */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#030712] border-2 border-[#008d76] z-20 shadow-[0_0_10px_#008d76]" />

      {/* Content Card - optimized for mobile first */}
      <div className={`ml-12 md:ml-0 ${
        isEven ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
      } md:w-5/12`}>
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-[1.5rem] hover:border-[#008d76]/40 transition-colors group hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className="text-[#008d76] font-black text-sm tracking-widest uppercase">
              {item.date}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="text-gray-500 font-bold text-[10px] flex items-center gap-1 uppercase">
              <Clock size={10} /> {item.time}
            </span>
          </div>

          <h3 className="text-xl font-black text-white mb-2 group-hover:text-[#008d76] transition-colors duration-300 uppercase">
            {item.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

TimelineItem.displayName = 'TimelineItem';

// Memoized Background Decoration
const BackgroundGlow = memo(() => (
  <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#008d76]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/4" />
));

BackgroundGlow.displayName = 'BackgroundGlow';

// Memoized Section Header
const TimelineHeader = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="text-center mb-16 md:mb-20"
  >
    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase">
      EVENT <span className="text-[#008d76]">TIMELINE</span>
    </h2>
    <div className="h-1 w-20 bg-[#008d76] mx-auto rounded-full" />
  </motion.div>
));

TimelineHeader.displayName = 'TimelineHeader';

// Memoized Vertical Line
const TimelineLine = memo(() => (
  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#008d76] via-[#008d76]/50 to-transparent" />
));

TimelineLine.displayName = 'TimelineLine';

const TimelineSection = () => {
  // Memoize render logic
  const timelineItems = useMemo(() => 
    timelineData.map((item, index) => (
      <TimelineItem key={index} item={item} index={index} />
    )), []
  );

  return (
    <section 
      id="timeline" 
      className="py-20 md:py-24 bg-[#030712] relative overflow-hidden"
    >
      <BackgroundGlow />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <TimelineHeader />

        <div className="max-w-4xl mx-auto relative">
          <TimelineLine />
          
          <div className="space-y-8 md:space-y-12">
            {timelineItems}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TimelineSection);