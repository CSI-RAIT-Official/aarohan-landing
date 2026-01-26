import { motion } from "framer-motion";
import TeamMemberCard from "../TeamMemberCard";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Lead Organizer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Sarah Johnson",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Mike Williams",
    role: "Sponsorship Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Emily Brown",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "David Kim",
    role: "Logistics Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    linkedin: "#",
  },
  {
    name: "Lisa Wang",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Lee",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Rachel Green",
    role: "Operations Head",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-padding relative">
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
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Code The Future who work
            tirelessly to make this event a success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
