import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Themes", href: "#themes" },
    { name: "Timeline", href: "#timeline" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const contacts = [
    { name: "Fardeen Desai", email: "far.des.rt23@dypatil.edu", phone: "+91 9372794144" },
    { name: "Rachana Bera", email: "rac.ber.rt23@dypatil.edu", phone: "+91 7021259090" },
  ];

  return (
    <footer className="bg-[#030712] relative pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#008d76]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-[#008d76]/10 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <motion.a
              href="#"
              className="text-2xl font-black tracking-tighter text-white inline-block mb-6"
              whileHover={{ scale: 1.02 }}
            >
              AAROHAN <span className="text-[#008d76]">1.0</span>
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Join hundreds of developers for 24 hours of intense creativity and problem-solving.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 141, 118, 0.15)", borderColor: "rgba(0, 141, 118, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#008d76] transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-bold tracking-widest text-[10px] uppercase mb-6">Navigation</h4>
            <div className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-[#008d76] transition-colors text-sm font-medium w-fit"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-6">
            <h4 className="text-white font-bold tracking-widest text-[10px] uppercase mb-6">Contact the Organizers</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-[#008d76] text-xs font-bold uppercase tracking-wider">Official</p>
                <a href="mailto:csi-rait-official@rait.ac.in" className="text-gray-400 hover:text-white transition-colors text-sm block truncate">
                  csi-rait-official@rait.ac.in
                </a>
              </div>
              
              {contacts.map((contact) => (
                <div key={contact.name} className="space-y-1">
                  <p className="text-white text-sm font-semibold">{contact.name}</p>
                  <div className="flex flex-col gap-1">
                    <a href={`mailto:${contact.email}`} className="text-gray-500 hover:text-[#008d76] text-xs flex items-center gap-2">
                      <Mail size={12} /> {contact.email}
                    </a>
                    <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-gray-500 hover:text-[#008d76] text-xs flex items-center gap-2">
                      <Phone size={12} /> {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Centered Credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center">
          <p className="text-gray-500 text-[11px] font-bold tracking-[0.2em] uppercase text-center">
            © {currentYear} <span className="text-white">CSI-RAIT</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;