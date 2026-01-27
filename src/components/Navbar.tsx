import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import aarohanLogo from "../assets/csi aarohan logo.png";
import links from "../utils/links.js";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Themes", href: "/themes" },
  { name: "Timeline", href: "#timeline" },
  { name: "Team", href: "/team" },
  { name: "Venue", href: "/contact" },
  { name: "Contact", href: "/contact" },
];

const { eventLink } = links;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const isHomePage = window.location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      const path = window.location.pathname.replace("/", "");
      setActiveSection(path);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.slice(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavigation = (href) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    if (!isHomePage) {
      window.location.href = `/${href}`;
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          {/* Logo Section */}
<motion.a
  href="/"
  className="relative flex items-center justify-center"
  whileHover={{ scale: 1.02 }}
>
  <img
    src={aarohanLogo}
    alt="AAROHAN 1.0 Logo"
    className="h-10 md:h-12 w-auto object-contain brightness-110 contrast-125"
    // The classes above ensure your logo stays sharp and fits the header height
  />
</motion.a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8 px-8 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
              {navLinks.map((link) => {
                const key = link.href.replace("#", "").replace("/", "");
                const isActive = activeSection === key;

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative ${
                      isActive ? "text-[#008d76]" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#008d76]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <motion.a
              href={eventLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              className="bg-[#008d76] text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(0,141,118,0.3)] flex items-center gap-2"
            >
              Register Now <ExternalLink size={14} />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 bg-white/5 rounded-lg border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[55] bg-[#030712]/90 lg:hidden flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col gap-6 w-full max-w-sm text-center">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(link.href)}
                  className="text-2xl font-black tracking-tighter text-white hover:text-[#008d76] uppercase transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                href={eventLink}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 bg-[#008d76] text-white font-black py-4 rounded-2xl uppercase tracking-widest shadow-[0_0_30px_rgba(0,141,118,0.4)]"
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;