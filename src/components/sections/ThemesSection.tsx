import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThemeCard from "../ThemeCard";

const themes = [
  {
    icon: "👥",
    title: "Crowd Management",
    description:
      "Design intelligent systems to monitor, manage, and optimize crowd flow for safer and more efficient public spaces, events, and transportation hubs.",
  },
  {
    icon: "🌾",
    title: "Agriculture",
    description:
      "Build smart agricultural solutions to boost productivity, sustainability, and resource efficiency using data-driven and tech-enabled approaches.",
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "Reimagine learning with innovative tools that enhance accessibility, engagement, and personalized education for students and educators alike.",
  },
  {
    icon: "🩺",
    title: "Healthcare",
    description:
      "Leverage technology to improve diagnosis, patient care, accessibility, and healthcare delivery through smart, scalable digital solutions.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Develop secure and resilient digital solutions to protect data, systems, and users from cyber threats, ensuring privacy, trust, and reliability in an increasingly connected world.",
  },
];


const ThemesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, themes.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="themes" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            AAROHAN <span className="gradient-text">Themes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your challenge. Each theme presents unique opportunities to
            make a real impact.
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: -currentIndex * (100 / itemsPerPage) + "%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6"
              style={{ width: `${(themes.length / itemsPerPage) * 100}%` }}
            >
              {themes.map((theme, index) => (
                <div
                  key={index}
                  style={{ width: `${100 / themes.length}%` }}
                  className="flex-shrink-0 px-2"
                >
                  <ThemeCard {...theme} index={index} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full glass-card flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full glass-card flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>
        </div>

        {/* Mobile Grid */}
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6">
          {themes.map((theme, index) => (
            <ThemeCard key={index} {...theme} index={index} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
