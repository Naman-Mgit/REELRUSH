"use client"

import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/ui/HeroSection";
import ReelGrid from "./components/ui/ReelGrid";
import FeatureSection from "./components/ui/FeatureSection";
import Footer from "./components/ui/Footer";
export default function Home() {
  
  return (
    
      <>
        <div className="min-h-screen bg-reel-dark text-white">
         <Navbar/>
         <HeroSection/>
         <ReelGrid/>
         <FeatureSection/>
         <Footer/>
        </div>
      </>
      
     
  );
}
