import { lazy, Suspense } from 'react';
import "@fontsource/oswald/300.css";
import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/oswald/600.css";
import "@fontsource/oswald/700.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

//  non-lazy for initial load
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

// Lazy load 
const WhyJoinSection = lazy(() => import("@/components/sections/WhyJoinSection"));
const TimelineSection = lazy(() => import("@/components/sections/TimelineSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const RegistrationDeadline = lazy(() => import("@/components/sections/RegistrationDeadline"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        
        <Suspense fallback={<div className="min-h-[200px] animate-pulse" />}>
          <RegistrationDeadline />
          <WhyJoinSection />
          <TimelineSection />
          <FAQSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;