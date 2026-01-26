import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ThemeCard from "../ThemeCard";

const themes = [
  {
    icon: "🏥",
    title: "Healthcare Innovation",
    description:
      "Build solutions that improve patient care, medical diagnostics, or healthcare accessibility using AI and emerging technologies.",
  },
  {
    icon: "🌱",
    title: "Sustainability & Climate",
    description:
      "Create tech-driven approaches to combat climate change, promote sustainable practices, and protect our environment.",
  },
  {
    icon: "📚",
    title: "EdTech Revolution",
    description:
      "Transform education through technology with innovative learning platforms, accessibility tools, and engagement solutions.",
  },
  {
    icon: "💰",
    title: "FinTech Solutions",
    description:
      "Develop financial technology solutions that promote inclusion, security, and innovation in banking and payments.",
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Push the boundaries of artificial intelligence with creative applications that solve real-world problems.",
  },
  {
    icon: "🏙️",
    title: "Smart Cities",
    description:
      "Design solutions for urban challenges including transportation, infrastructure, and community engagement.",
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
            Hackathon <span className="gradient-text">Themes</span>
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
