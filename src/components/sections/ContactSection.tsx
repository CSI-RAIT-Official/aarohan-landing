import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const organizers = [
    { 
      name: "Fardeen Desai", 
      email: "far.des.rt23@dypatil.edu", 
      phone: "+91 93727 94144" 
    },
    { 
      name: "Rachana Bera", 
      email: "rac.ber.rt23@dypatil.edu", 
      phone: "+91 70212 59090" 
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#008d76]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#008d76]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase">
            GET IN <span className="text-[#008d76]">TOUCH</span>
          </h2>
          <div className="h-1 w-20 bg-[#008d76] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm uppercase tracking-widest font-bold">
            Reach out to the team for any queries
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {/* Organizer Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {organizers.map((org, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-[2.5rem] group hover:border-[#008d76]/50 transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#008d76]/10 border border-[#008d76]/20 flex items-center justify-center text-[#008d76] text-xl font-black group-hover:bg-[#008d76] group-hover:text-white transition-all duration-500">
                    {org.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl uppercase tracking-tight mb-3">{org.name}</h3>
                    <div className="space-y-3">
                      <a href={`mailto:${org.email}`} className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-[#008d76] transition-colors">
                        <Mail size={16} /> {org.email}
                      </a>
                      <a href={`tel:${org.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-[#008d76] transition-colors">
                        <Phone size={16} /> {org.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Venue Card - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 rounded-full bg-[#008d76]/10 flex items-center justify-center text-[#008d76] mb-4">
              <MapPin size={28} />
            </div>
            <h4 className="text-white font-black text-lg uppercase tracking-widest mb-2">Venue</h4>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              DY Patil University, Ramrao Adik Institute of Technology, <br />
              Sector 7, Nerul, Navi Mumbai, Maharashtra 400706.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;