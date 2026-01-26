import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">AAROHAN</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A 24-hour innovation marathon where brilliant minds come together
            to solve real-world challenges
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                What is Code The Future?
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                AROHAN
                1.0
                national-level 24-hour innovation hackathon is
                designed to empower students to transform bold ideas into
                impactful, real-world solutions. The event serves as a
                dynamic launchpad for young innovators, bringing together
                creative minds to collaborate, experiment, and solve
                complex problems using technology.
                </p>
                <p>
                Participants are encouraged to challenge conventional
thinking and address pressing societal and industry-driven
challenges through structured ideation and hands-on
implementation.

                </p>
                <p>
                With a strong focus on social impact, sustainability, and
scalable innovation, the hackathon goes beyond theoretical
concepts to promote practical, outcome-driven problemsolving
                </p>
                <p>
                The experience pushes participants to design solutions that
are not only innovative but also feasible, user-centric, and
future-ready. By fostering an environment of continuous
learning, mentorship, and execution under real-world
constraints, the hackathon inspires teams to build
meaningful, functional prototypes capable of creating
lasting impact
                </p>
              </div>
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block btn-outline"
            >
              Download Brochure
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-8">
              <AnimatedCounter
                end={500}
                suffix="+"
                label="Participants"
                duration={2.5}
              />
            </div>
            <div className="glass-card p-8">
              <AnimatedCounter
                end={50000}
                prefix="$"
                label="Prize Pool"
                duration={2.5}
              />
            </div>
            <div className="glass-card p-8">
              <AnimatedCounter
                end={24}
                suffix="h"
                label="of Coding"
                duration={2}
              />
            </div>
            <div className="glass-card p-8">
              <AnimatedCounter
                end={50}
                suffix="+"
                label="Mentors"
                duration={2}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
