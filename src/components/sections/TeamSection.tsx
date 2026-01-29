import { motion } from "framer-motion";
import TeamMemberCard from "../TeamMemberCard";

// Import all images at the top
import VidhateSir from "../../assets/team/core/vidhate sir.jpeg";
import TusharSir from "../../assets/team/core/tushar sir.jpeg";
import President from "../../assets/team/core/president.jpg";
import VicePresident from "../../assets/team/core/vp.jpg";
import GeneralSecretary from "../../assets/team/core/gs.jpeg";
import Treasurer from "../../assets/team/core/treasurer.jpg";
import CTO from "../../assets/team/core/cto.jpg";
import CEO from "../../assets/team/core/ceo.jpg";
import JointSecretary from "../../assets/team/core/js.jpg";
import JTO from "../../assets/team/core/jto.jpg";
import CMO from "../../assets/team/core/cmo.jpeg";
import HR from "../../assets/team/core/hr.jpeg";
import EIC from "../../assets/team/core/eic.jpg";
import CDO from "../../assets/team/core/cdo.jpg";
import CRDO from "../../assets/team/core/crdo.jpg";
import DBA from "../../assets/team/core/dba.jpg";

// Data arrays
const facultyCoordinators = [
  { name: "Dr. Amarsinh V. Vidhate", role: "Student Branch Coordinator", image: VidhateSir },
  { name: "Dr. Tushar Ghorpade", role: "Faculty Coordinator", image: TusharSir },
];

const coreCommittee = [
  { name: "Riddhi Bhanushali", role: "President", image: President },
  { name: "Prerna Agarwal", role: "Vice President", image: VicePresident },
  { name: "Sejal Jaiswar", role: "General Secretary", image: GeneralSecretary },
  { name: "Parth Patil", role: "Treasurer", image: Treasurer },
  { name: "Vishwajeet Patil", role: "Chief Technical Officer", image: CTO },
  { name: "Shalin Prashant", role: "Chief Event Organizer", image: CEO },
  { name: "Austin Kurian", role: "Joint Secretary", image: JointSecretary },
  { name: "Jatin Pathak", role: "Joint Technical Officer", image: JTO },
  { name: "Sahil Jain", role: "Chief Marketing Officer", image: CMO },
  { name: "Aadarsh Kumar", role: "Human Resources", image: HR },
  { name: "Krishna Bhanushali", role: "Editor-in-Chief", image: EIC },
  { name: "Drishya Tomar", role: "Chief Design Officer", image: CDO },
  { name: "Ayush Sharma", role: "Chief of Research & Development", image: CRDO },
  { name: "Harshvardhan Singh", role: "Database Administrator", image: DBA },
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

// Helper function
const formatName = (str: string) => 
  str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// Simple SectionHeader component without memo
const SectionHeader = ({ subtitle }: { subtitle: string }) => (
  <div className="mb-8 md:mb-10 flex flex-col items-center md:items-start">
    <h3 className="text-[#008d76] font-black text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
      {subtitle}
    </h3>
    <div className="h-1 w-12 bg-[#008d76] rounded-full" />
  </div>
);

const TeamSection = () => {
  // Sort organizing committee
  const sortedOrganizingCommittee = [...organizingCommittee].sort((a, b) => 
    a.localeCompare(b)
  );

  return (
    <section id="team" className="py-20 md:py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#008d76]/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#008d76]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase px-4">
            THE MINDS BEHIND <span className="text-[#008d76]">AAROHAN 1.0</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto tracking-wide px-4">
            Meet the passionate faculty and student leaders driving <span className="text-white">innovation and excellence</span> within CSI-RAIT.
          </p>
        </motion.div>

        {/* 1. Faculty Section */}
        <div className="mb-24 md:mb-32">
          <SectionHeader subtitle="Faculty Leadership" />
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
            {facultyCoordinators.map((member, index) => (
              <motion.div 
                key={index} 
                className="w-full max-w-[280px] md:max-w-[300px]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Core Committee Section */}
        <div className="mb-24 md:mb-32">
          <SectionHeader subtitle="Core Committee" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {coreCommittee.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: Math.floor(index / 4) * 0.1 }}
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
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-10 lg:p-16 shadow-2xl">
            <SectionHeader subtitle="Organizing Committee" />
            
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {sortedOrganizingCommittee.map((name, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: Math.floor(index / 10) * 0.1 }}
                  whileHover={{ backgroundColor: "rgba(0, 141, 118, 0.2)", borderColor: "rgba(0, 141, 118, 0.4)", color: "white" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-white/10 bg-white/5 text-gray-500 text-[9px] md:text-xs font-bold uppercase tracking-wider transition-all cursor-default select-none"
                  title={formatName(name)}
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