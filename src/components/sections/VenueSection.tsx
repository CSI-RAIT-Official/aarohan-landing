import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Navigation, TrainFront, ExternalLink } from "lucide-react";

const VenueSection = () => {
  return (
    <section id="venue" className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Signature Glow Backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#008d76]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#008d76]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase">
            EVENT <span className="text-[#008d76]">VENUE</span>
          </h2>
          <div className="h-1 w-20 bg-[#008d76] mx-auto rounded-full mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm uppercase tracking-widest font-bold">
            DY Patil University Campus, Nerul
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
          
          {/* Info Bento Grid - 5 Cols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Campus Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-[2rem] group hover:border-[#008d76]/40 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#008d76]/10 border border-[#008d76]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#008d76]/20 transition-all duration-500">
                <MapPin className="w-7 h-7 text-[#008d76]" />
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tight">CAMPUS LOCATION</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ramrao Adik Institute of Technology<br />
                Sector 7, Nerul, Navi Mumbai,<br />
                Maharashtra 400706
              </p>
            </motion.div>

            {/* Quick Stats Bento */}
            <div className="grid grid-cols-2 gap-6">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col items-center text-center">
                <Calendar className="w-6 h-6 text-[#008d76] mb-3" />
                <span className="text-white font-bold text-xs uppercase tracking-tighter">Mar 6-7, 2026</span>
              </div>
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-[2rem] flex flex-col items-center text-center">
                <Clock className="w-6 h-6 text-[#008d76] mb-3" />
                <span className="text-white font-bold text-xs uppercase tracking-tighter">24H Marathon</span>
              </div>
            </div>

            {/* Transit Highlight */}
            <div className="bg-white/[0.03] border border-white/5 p-6 rounded-[2rem] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                <TrainFront className="w-5 h-5 text-[#008d76]" />
              </div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                5 mins from <span className="text-white">Nerul / Juinagar</span> station
              </p>
            </div>
          </div>

          {/* Interactive Map - 7 Cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="h-full min-h-[450px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden p-2 group shadow-2xl">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.48202511486!2d73.0231256752044!3d19.04438468215321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db00160053%3A0x95e9caa07676b993!2sRamrao%20Adik%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1737989999999!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2) brightness(0.7)" }}
  allowFullScreen
  loading="lazy"
  className="rounded-[2rem]"
/>
              
              <div className="absolute bottom-8 right-8">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://goo.gl/maps/39mJm5bY1W9Zq8v68" 
                  target="_blank" 
                  className="bg-[#008d76] text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(0,141,118,0.4)] transition-all"
                >
                  <Navigation size={14} />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VenueSection;