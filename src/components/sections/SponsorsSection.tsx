import { motion } from "framer-motion";
import SponsorGrid from "../SponsorGrid";

const sponsors = [
  // Title Sponsors
  { name: "TechCorp Global", logo: "", tier: "title" as const },
  { name: "Innovation Labs", logo: "", tier: "title" as const },
  // Gold Sponsors
  { name: "Cloud Systems Inc", logo: "", tier: "gold" as const },
  { name: "AI Solutions", logo: "", tier: "gold" as const },
  { name: "DevTools Pro", logo: "", tier: "gold" as const },
  // Silver Sponsors
  { name: "StartupHub", logo: "", tier: "silver" as const },
  { name: "CodeCraft", logo: "", tier: "silver" as const },
  { name: "DataDriven Co", logo: "", tier: "silver" as const },
  { name: "TechVentures", logo: "", tier: "silver" as const },
  // Bronze Sponsors
  { name: "WebDev Co", logo: "", tier: "bronze" as const },
  { name: "AppFactory", logo: "", tier: "bronze" as const },
  { name: "ByteSize", logo: "", tier: "bronze" as const },
  { name: "CodeNinja", logo: "", tier: "bronze" as const },
  { name: "TechStack", logo: "", tier: "bronze" as const },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="section-padding relative">
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
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're grateful to our amazing sponsors who make this event possible.
            Want to sponsor? Get in touch!
          </p>
        </motion.div>

        <SponsorGrid sponsors={sponsors} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Interested in becoming a sponsor?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline inline-block"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
