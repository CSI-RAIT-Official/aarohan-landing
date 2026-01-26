import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
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
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to get involved? We'd love to hear from you.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
