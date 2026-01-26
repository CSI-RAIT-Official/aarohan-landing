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
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyJoinSection from "@/components/sections/WhyJoinSection";
import TimelineSection from "@/components/sections/TimelineSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/Footer";
import RegistrationDeadline from "@/components/sections/RegistrationDeadline";
//import VenueSection from "@/components/sections/VenueSection";
//import ContactSection from "@/components/sections/ContactSection";
// import ThemesSection from "@/components/sections/ThemesSection";
// import SponsorsSection from "@/components/sections/SponsorsSection";
// import TeamSection from "@/components/sections/TeamSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        
        <AboutSection />
        <RegistrationDeadline />
        <WhyJoinSection />
        <TimelineSection />
        <FAQSection />

        {/* <VenueSection /> */}
        {/* <ThemesSection /> */}
       
        {/* <SponsorsSection /> */}
        {/* <TeamSection /> */}
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
