import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  time: string;
  index: number;
  isLast?: boolean;
}

const TimelineItem = ({
  title,
  description,
  date,
  time,
  index,
  isLast = false,
}: TimelineItemProps) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-center gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* Content */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`flex-1 glass-card-hover p-6 ${
          isLeft ? "md:text-right" : "md:text-left"
        } text-left`}
      >
        <div className="text-primary font-medium text-sm mb-1">{date}</div>
        <div className="text-muted-foreground text-xs mb-3">{time}</div>
        <h3 className="text-lg font-heading font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </motion.div>

      {/* Timeline Node */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className="w-4 h-4 rounded-full bg-primary neon-glow z-10"
        />
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="w-0.5 timeline-line absolute top-4 h-24 md:h-32"
          />
        )}
      </div>

      {/* Empty space for alignment */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export default TimelineItem;
