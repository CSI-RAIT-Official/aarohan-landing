import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import JudgingCard from "../JudgingCard";

const round1Criteria = [
  {
    name: "Innovation & Creativity",
    description:
      "How unique and creative is the solution? Does it present a novel approach to the problem?",
    points: 25,
  },
  {
    name: "Technical Implementation",
    description:
      "Quality of code, architecture decisions, and effective use of technology stack.",
    points: 25,
  },
  {
    name: "Problem-Solution Fit",
    description:
      "How well does the solution address the stated problem? Is there a clear understanding of the challenge?",
    points: 25,
  },
  {
    name: "Presentation & Demo",
    description:
      "Quality of the pitch, clarity of explanation, and effectiveness of the demonstration.",
    points: 25,
  },
];

const round2Criteria = [
  {
    name: "Scalability",
    description:
      "Can the solution scale to handle real-world usage? Is the architecture designed for growth?",
    points: 20,
  },
  {
    name: "User Experience",
    description:
      "Is the product intuitive and user-friendly? Does it provide a seamless experience?",
    points: 20,
  },
  {
    name: "Business Viability",
    description:
      "Does the solution have potential for real-world application? Is there a sustainable business model?",
    points: 20,
  },
  {
    name: "Impact & Social Value",
    description:
      "What positive impact can this solution create? How does it benefit society or the environment?",
    points: 20,
  },
  {
    name: "Team Collaboration",
    description:
      "How well did the team work together? Effective communication and role distribution.",
    points: 20,
  },
];

const JudgingSection = () => {
  return (
    <section id="judging" className="section-padding relative">
      <div className="absolute inset-0 gradient-bg opacity-30" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Judging <span className="gradient-text">Criteria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understand how your project will be evaluated. Each criterion is
            designed to assess different aspects of your solution.
          </p>
        </motion.div>

        {/* Round 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-lg font-bold">
              1
            </span>
            Round 1 - Initial Evaluation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {round1Criteria.map((criteria, index) => (
              <JudgingCard key={index} {...criteria} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Round 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-heading font-semibold mb-8 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent text-lg font-bold">
              2
            </span>
            Round 2 - Final Judging
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {round2Criteria.map((criteria, index) => (
              <JudgingCard key={index} {...criteria} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Register on Unstop
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default JudgingSection;
