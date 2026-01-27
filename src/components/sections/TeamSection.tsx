import { motion } from "framer-motion";
import TeamMemberCard from "../TeamMemberCard";

const facultyCoordinators = [
  { name: "Dr. Amarsinh V. Vidhate", role: "Student Branch Coordinator", image: "/vidhate sir.jpeg" },
  { name: "Dr. Tushar Ghorpade", role: "Faculty Coordinator", image: "/tushar sir.jpeg" },
];

const coreCommittee = [
  { name: "Riddhi Bhanushali", role: "President", image: "/president.jpg" },
  { name: "Prerna Agarwal", role: "Vice President", image: "/vp.jpg" },
  { name: "Sejal Jaiswar", role: "General Secretary", image: "/gs.JPEG" },
  { name: "Parth Patil", role: "Treasurer", image: "/treasurer.JPG" },
  { name: "Vishwajeet Patil", role: "Chief Technical Officer", image: "/cto.jpg" },
  { name: "Shalin Prashant", role: "Chief Event Organizer", image: "/ceo.jpg" },
  { name: "Austin Kurian", role: "Joint Secretary", image: "/js.JPG" }, 
  { name: "Jatin Pathak", role: "Joint Technical Officer", image: "/jto.JPG" },
  { name: "Sahil Jain", role: "Chief Marketing Officer", image: "/cmo.jpeg" },
  { name: "Aadarsh Kumar", role: "Human Resources", image: "/hr.jpeg" },
  { name: "Krishna Bhanushali", role: "Editor-in-Chief", image: "/eic.jpg" },
  { name: "Drishya Tomar", role: "Chief Design Officer", image: "/cdo.jpg" },
  { name: "Ayush Sharma", role: "Chief of Research & Development", image: "/crdo.JPG" },
  { name: "Harshvardhan Singh", role: "Database Administrator", image: "/dba.jpg" },
];

const organizingCommittee = [
  "NEEL VAZE", "Naresh Konar", "Vedika Pathak", "Harsh Prajapat", "VED MANANI", 
  "Josh Mahamunkar", "Swara Kalekar", "Niharika Yadav", "Rachana Bera", "Fardeen Desai", 
  "Kanak Maghnani", "Aditi Bhagat", "Akshat Muchhala", "Gaurav Vojhala", "Divyanshi", 
  "Soham Pandey", "Akshat Matkar", "Nisarg Mokal", "Jignesh Parmar", "Archana Dash", 
  "Yuti Rawool", "Kavya Huliyurdurga", "Mohit Dadhich", "Rushil Vishwakarma", "Mihir Kulkarni", 
  "Shreeya Khadka", "Aaditya Ajit Singh", "GAURANG RANEA", "Aryan Yadav", "Aashi Jain", 
  "Nishika", "Adeeba Mujawar", "Hamsini kuppam", "Bhumi Yadav", "SARAH SAWANT", 
  "Atharva Bhoir", "Rushikesh Patle", "Shreyas Apte", "zidane madre", "Yashana Gupta", 
  "Lakshmi Kamath", "SAEE SALUNKHE", "Ashish Singh", "Atharva chaudhari"
];

const formatName = (str) => str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

const SectionHeader = ({ subtitle }) => (
  <div className="mb-10 flex flex-col items-center md:items-start">
    <h3 className="text-[#008d76] font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
      {subtitle}
    </h3>
    <div className="h-1 w-12 bg-[#008d76] rounded-full" />
  </div>
);

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#008d76]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#008d76]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase">
            THE MINDS BEHIND <span className="text-[#008d76]">AAROHAN 1.0</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto tracking-wide">
            Meet the passionate faculty and student leaders driving <span className="text-white">innovation and excellence</span> within CSI-RAIT.
          </p>
        </motion.div>

        {/* 1. Faculty Section */}
        <div className="mb-32">
          <SectionHeader subtitle="Faculty Leadership" />
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {facultyCoordinators.map((member, index) => (
              <motion.div 
                key={index} 
                className="w-full max-w-[300px]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Core Committee Section */}
        <div className="mb-32">
          <SectionHeader subtitle="Core Committee" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {coreCommittee.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Organizing Committee Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl">
            <SectionHeader subtitle="Organizing Committee" />
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {organizingCommittee.sort().map((name, index) => (
                <motion.span 
                  key={index}
                  whileHover={{ backgroundColor: "rgba(0, 141, 118, 0.2)", borderColor: "rgba(0, 141, 118, 0.4)", color: "white" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest transition-all cursor-default"
                >
                  {formatName(name)}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;