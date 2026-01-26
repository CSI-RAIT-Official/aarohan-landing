import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  index: number;
}

const TeamMemberCard = ({
  name,
  role,
  image,
  linkedin,
  github,
  twitter,
  index,
}: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card-hover p-6 text-center group"
    >
      {/* Profile Image */}
      <div className="relative mx-auto w-28 h-28 mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-60 group-hover:opacity-100 transition-opacity blur-md" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-colors">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <h4 className="font-heading font-semibold text-lg text-foreground mb-1">
        {name}
      </h4>
      <p className="text-primary text-sm mb-4">{role}</p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center gap-3"
      >
        {linkedin && (
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Linkedin size={16} />
          </motion.a>
        )}
        {github && (
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Github size={16} />
          </motion.a>
        )}
        {twitter && (
          <motion.a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Twitter size={16} />
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberCard;
