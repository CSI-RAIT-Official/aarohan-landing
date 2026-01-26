import { motion } from "framer-motion";
import TimelineItem from "../TimelineItem";

const timelineData = [
  {
    title: "Registration Opens",
    description: "Sign up on Unstop and form your team of up to 4 members. Early birds get exclusive swag!",
    date: "Feb 15, 2024",
    time: "12:00 PM IST",
  },
  {
    title: "Registration Closes",
    description: "Last call for team registrations. Make sure your team is complete and ready.",
    date: "Mar 1, 2024",
    time: "11:59 PM IST",
  },
  {
    title: "Hackathon Begins",
    description: "Opening ceremony, theme announcement, and the 24-hour countdown starts!",
    date: "Mar 15, 2024",
    time: "9:00 AM IST",
  },
  {
    title: "Submission Deadline",
    description: "Submit your project including source code, demo video, and presentation deck.",
    date: "Mar 16, 2024",
    time: "9:00 AM IST",
  },
  {
    title: "Judging Phase",
    description: "Expert judges evaluate all submissions based on innovation, impact, and execution.",
    date: "Mar 16-17, 2024",
    time: "All Day",
  },
  {
    title: "Winner Announcement",
    description: "Grand finale ceremony with prize distribution and networking session.",
    date: "Mar 18, 2024",
    time: "5:00 PM IST",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding relative">
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
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars! Here's everything you need to know about the
            key dates and milestones.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 md:space-y-0">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
