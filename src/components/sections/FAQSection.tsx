import { motion } from "framer-motion";
import FAQAccordion from "../FAQAccordion";

const faqItems = [
  {
    question: "Who can participate in the hackathon?",
    answer:
      "The hackathon is open to students, professionals, and enthusiasts from all backgrounds. Whether you're a seasoned developer or just starting your coding journey, everyone is welcome! Participants must be at least 18 years old or have parental consent if under 18.",
  },
  {
    question: "What is the team size requirement?",
    answer:
      "Teams can consist of 2-4 members. You can register as an individual and join a team later, or register with your pre-formed team. We also have a team formation channel on Discord to help individuals find teammates before the event.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No! Participation in the hackathon is completely free. We believe in making innovation accessible to everyone. All you need to bring is your creativity, laptop, and enthusiasm!",
  },
  {
    question: "What can I build during the hackathon?",
    answer:
      "You can build any software project that aligns with the announced themes. This includes web apps, mobile apps, APIs, AI/ML models, IoT solutions, or any combination. Hardware-only projects are not eligible, but hardware-software integrations are welcome.",
  },
  {
    question: "Can I start working on my project before the hackathon?",
    answer:
      "No, all coding must be done during the 24-hour hackathon period. However, you can brainstorm ideas, research technologies, and create wireframes beforehand. Open-source libraries and frameworks are allowed.",
  },
  {
    question: "What do I need to submit at the end?",
    answer:
      "You'll need to submit: 1) Your source code (via GitHub), 2) A 3-minute demo video, 3) A presentation deck (max 10 slides), and 4) A brief project description. Detailed submission guidelines will be shared during the event.",
  },
  {
    question: "How will the judging work?",
    answer:
      "Judging happens in two rounds. Round 1 screens all submissions based on innovation, technical implementation, problem-solution fit, and presentation. Top teams advance to Round 2, where they present live to our panel of industry expert judges.",
  },
  {
    question: "What are the prizes?",
    answer:
      "The total prize pool is $50,000! This includes cash prizes for top 3 teams, special category awards, and sponsored prizes. All participants receive certificates, and top performers get exclusive internship and job opportunities with our partner companies.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
