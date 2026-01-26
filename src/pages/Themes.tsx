import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemesSection from "@/components/sections/ThemesSection";

export default function Themes(){
    return(
        <div className="min-h-screen bg-background">
            <Navbar/>
            <main>
                <ThemesSection/>
            </main>
            <Footer/>
        </div>
    );
}