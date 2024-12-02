// pages/index.tsx
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import WhatWeDoSection from "@/components/WhatWeDoSection";

const Home: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 overflow-hidden">
  <Hero />
  <WhatWeDoSection />
  <RecentWork />
  <Experience />
  <Contact />
</main>
     </div>
  );
};

export default Home;

