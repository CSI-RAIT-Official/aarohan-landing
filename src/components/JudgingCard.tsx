import { motion } from "framer-motion";

interface JudgingCardProps {
  name: string;
  description: string;
  points: number;
  index: number;
}

const JudgingCard = ({ name, description, points, index }: JudgingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card-hover p-6 group"
    >
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h4>
        <div className="flex items-center gap-1 bg-primary/20 px-3 py-1 rounded-full">
          <span className="text-primary font-bold">{points}</span>
          <span className="text-primary/70 text-xs">pts</span>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
      
      {/* Progress bar showing weightage */}
      <div className="mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${points}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default JudgingCard;
