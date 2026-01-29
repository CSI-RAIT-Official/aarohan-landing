import { Suspense, useRef, useState, useCallback, memo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown, ExternalLink, ShieldCheck, Zap } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshTransmissionMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

import FloatingShapes from "../FloatingShapes";
import links from "../../utils/links";
import csiLogo from "../../assets/team/committees/csi__logo.png";
import codersClubLogo from "../../assets/team/committees/codersclub.png";
import tpcLogo from "../../assets/team/committees/WhiteRAIT.png";

// Optimized GlassGeometry component with memoization
const GlassGeometry = memo(() => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(t / 4) / 4;
    meshRef.current.rotation.y = Math.sin(t / 4) / 4;
    meshRef.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[2.2, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={8} // Reduced from 16 for better performance
          thickness={1.5}
          anisotropy={0.2}
          anisotropicBlur={0.2}
          roughness={0.3}
          iridescence={0.3}
          distortion={0.5}
          clearcoat={1}
          transmission={0.95}
          color="#008d76"
        />
      </mesh>
    </Float>
  );
});

GlassGeometry.displayName = 'GlassGeometry';

// Memoized static components
const PowerBadge = memo(() => (
  <motion.div className="flex items-center gap-2 bg-[#008d76]/10 border border-[#008d76]/20 text-[#008d76] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
    <Zap size={14} className="fill-current" />
    THE ULTIMATE INNOVATION CHALLENGE
  </motion.div>
));

PowerBadge.displayName = 'PowerBadge';

const RegisterButton = memo(() => (
  <motion.a
    href={links.eventLink}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-[#008d76] hover:opacity-90 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(0,114,126,0.4)]"
  >
    Register Now <ExternalLink size={18} />
  </motion.a>
));

RegisterButton.displayName = 'RegisterButton';

const LearnMoreButton = memo(() => (
  <motion.a
    href="#about"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold transition-colors"
  >
    Learn more
  </motion.a>
));

LearnMoreButton.displayName = 'LearnMoreButton';

const BrandingLogos = memo(() => (
  <div className="flex items-center gap-8 md:gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
    <img 
      src={csiLogo} 
      alt="CSI" 
      className="h-8 md:h-10 w-auto" 
      loading="lazy"
    />
    <img 
      src={codersClubLogo} 
      alt="Coders Club" 
      className="h-8 md:h-10 w-auto" 
      loading="lazy"
    />
    <img 
      src={tpcLogo} 
      alt="TPC" 
      className="h-6 md:h-8 w-auto" 
      loading="lazy"
    />
  </div>
));

BrandingLogos.displayName = 'BrandingLogos';

const ScrollIndicator = memo(() => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
    <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent relative">
      <motion.div 
        animate={{ y: [0, 48, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"
      />
    </div>
  </div>
));

ScrollIndicator.displayName = 'ScrollIndicator';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Throttle mouse position updates
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  // Memoize expensive transforms
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const smoothY = useSpring(textY, { stiffness: 100, damping: 30 });

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-[#030712] text-white"
    >
      {/* Dynamic Background Light - optimized with will-change */}
      <div 
        className="absolute inset-0 z-0 opacity-30 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #008d76 0%, transparent 50%)`,
          willChange: 'background',
        }}
      />
      
      {/* Reduced opacity for better readability */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <FloatingShapes />

      {/* 3D Scene with performance optimizations */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 6], fov: 45 }}
          performance={{ min: 0.5 }} // Lower performance threshold
        >
          <Suspense fallback={null}>
            <Environment preset="night" />
            <GlassGeometry />
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              enablePan={false} // Disable panning for performance
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content Card */}
      <motion.div
        style={{ y: smoothY, opacity }}
        className="relative z-10 w-full max-w-6xl px-6 mt-16 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-16 rounded-[2.5rem] shadow-2xl text-center flex flex-col items-center"
        >
          <PowerBadge />

          <motion.h1 
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            AAROHAN <span className="text-[#008d76]">1.0</span>
          </motion.h1>

          <motion.p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Unleash your potential where <span className="text-white">creativity meets code</span>. 
            Join hundreds of developers in the most anticipated hackathon of the season.
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <RegisterButton />
            <LearnMoreButton />
          </div>
        </motion.div>

        {/* Branding Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
            POWERED BY
          </p>
          <BrandingLogos />
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
};

export default memo(HeroSection);