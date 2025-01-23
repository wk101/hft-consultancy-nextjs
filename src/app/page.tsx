import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import  HjbMarketMaking from "@/components/HjbMarketMaking";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16 bg-gray-100 overflow-hidden w-full">
        {/* Adjust the Hero section and other content */}
        <Hero />
        <hr/>
        <WhatWeDoSection />
        <hr/>
        <HjbMarketMaking />
        <hr/>
        <RecentWork />
        <hr/>
        <Experience />
        <hr/>
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
