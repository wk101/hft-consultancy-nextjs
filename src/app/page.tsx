// page.tsx or home.tsx
import RootLayout from './layout';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecentWork from "../components/RecentWork";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import WhatWeDoSection from "@/components/WhatWeDoSection";

const Home: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col">
        <Navbar />
        <main className="pt-16 bg-gray-100 overflow-hidden w-full">
          <Hero />
          <WhatWeDoSection />
          <RecentWork />
          <Experience />
          <Contact />
        </main>
      </div>
    </RootLayout>
  );
};

export default Home;
