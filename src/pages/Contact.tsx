import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import VenueSection from "@/components/sections/VenueSection";

export default function Team(){
    return(
        <div className="min-h-screen bg-background">
            <Navbar/>
            <main>
                <VenueSection/>
                <ContactSection/>
            </main>
            <Footer/>
        </div>
    );
}