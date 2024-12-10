import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import  HjbMarketMaking from "@/components/HjbMarketMaking";
 
const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16 bg-gray-100 overflow-hidden w-full">
        {/* Adjust the Hero section and other content */}
        <Hero />
        <WhatWeDoSection />
        <HjbMarketMaking />
        <RecentWork />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
