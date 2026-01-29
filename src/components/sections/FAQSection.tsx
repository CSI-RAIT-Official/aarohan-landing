import { useState, useCallback, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

// Memoized FAQ data - prevent recreation on every render
const faqItems = [
  {
    question: "Who can participate in the hackathon?",
    answer: "Aarohan 1.0 is open to all B.Tech and BCA students. Participants can choose a problem statement within the themes of Crowd management, Agriculture, Education, Healthcare, or Cybersecurity.",
  },
  {
    question: "Is there a registration fee?",
    answer: "The initial registration fee is 200. Teams that qualify for the top 20 and move on to Round 2 are required to pay an additional fee of 800.",
  },
  {
    question: "Will accommodation and meals be provided?",
    answer: "Yes, the organizers provide all meals, including breakfast, lunch, high tea, and dinner. Accommodation is also arranged for participants on 6th March.",
  },
  {
    question: "Do participants receive certificates?",
    answer: "Yes, all Round 1 and 2 participants will receive certificates.",
  },
  {
    question: "What is the team size requirement?",
    answer: "Each team must consist of 3-4 members. You will work together to develop a Minimum Viable Product (MVP) based on the solution you proposed in your Round 1 PPT.",
  },
];

// Memoized FAQ Item component
const FAQItem = memo(({ 
  item, 
  index, 
  isOpen, 
  onClick 
}: { 
  item: typeof faqItems[0];
  index: number;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className={`group rounded-[1.5rem] border transition-all duration-300 overflow-hidden ${
        isOpen 
          ? "bg-white/10 border-[#008d76]/50 shadow-[0_0_30px_rgba(0,141,118,0.1)]" 
          : "bg-white/5 border-white/10 hover:border-white/20"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full p-6 flex items-center justify-between text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[#008d76]/30 rounded-[1.5rem]"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-center gap-4 flex-1">
          <HelpCircle 
            size={18} 
            className={isOpen ? "text-[#008d76] flex-shrink-0" : "text-gray-500 flex-shrink-0"} 
          />
          <span className={`font-bold tracking-tight text-base md:text-lg text-left ${
            isOpen ? "text-white" : "text-gray-300"
          }`}>
            {item.question}
          </span>
        </div>
        <div className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${
          isOpen ? "border-[#008d76] bg-[#008d76] text-[#030712]" : "border-white/20 text-white"
        }`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
          >
            <div className="px-6 pb-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 mt-2 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FAQItem.displayName = 'FAQItem';

// Memoized Background Glow
const BackgroundGlow = memo(() => (
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008d76]/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
));

BackgroundGlow.displayName = 'BackgroundGlow';

// Memoized Section Header
const FAQHeader = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="text-center mb-12 md:mb-16"
  >
    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase">
      HAVE <span className="text-[#008d76]">QUESTIONS?</span>
    </h2>
    <div className="h-1 w-20 bg-[#008d76] mx-auto rounded-full mb-6" />
    <p className="text-gray-500 max-w-xl mx-auto text-sm uppercase tracking-widest font-bold">
      Everything you need to know about Aarohan 1.0
    </p>
  </motion.div>
));

FAQHeader.displayName = 'FAQHeader';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Memoize click handler to prevent recreation
  const handleItemClick = useCallback((index: number) => {
    setActiveIndex(prev => prev === index ? null : index);
  }, []);

  // Pre-calculate which items are open to avoid inline calculations
  const isOpenArray = useMemo(() => 
    faqItems.map((_, idx) => idx === activeIndex),
    [activeIndex]
  );

  return (
    <section 
      id="faq" 
      className="py-20 md:py-24 bg-[#030712] relative overflow-hidden"
    >
      <BackgroundGlow />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FAQHeader />

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={isOpenArray[index]}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FAQSection);