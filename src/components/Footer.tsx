import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Heart } from "lucide-react";

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

  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 gradient-bg opacity-20" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <motion.a
              href="#"
              className="font-heading text-2xl font-bold gradient-text inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              HACKATHON
            </motion.a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Code The Future - Where innovation meets collaboration. Join us
              for 24 hours of intense coding and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center sm:text-left">
            © {currentYear} Code The Future. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by
            the organizing team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
