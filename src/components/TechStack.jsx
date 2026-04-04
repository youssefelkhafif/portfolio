import { useState } from "react";
import Navbar from "./components/Navbar";
import SidebarCard from "./components/SidebarCard";
import Hero from "./components/Hero";
import Background from "./components/Background";
import ContactFooter from "./components/ContactFooter";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";

export default function App() {
  const [activePage, setActivePage] = useState(0);

  const renderPage = () => {
    switch (activePage) {
      case 0: // Home
        return (
          <div className="flex flex-col lg:flex-row gap-6 p-6 h-full">
            <SidebarCard />
            <Hero />
          </div>
        );
      case 1: // Work / Projects
        return <Projects />;
      case 4: // Contact
        return <ContactFooter />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-white/30 text-lg">Coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div
      className="text-white flex flex-col"
      style={{ height: "100vh", width: "100vw", overflow: "hidden", position: "relative" }}
    >
      <Background />

      {/* Navbar */}
      <div className="flex justify-center pt-5 px-4 flex-shrink-0" style={{ zIndex: 10, position: "relative" }}>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
      </div>

      {/* Marquee strip */}
      <div className="flex-shrink-0" style={{ position: "relative", zIndex: 10 }}>
        <TechMarquee />
      </div>

      {/* Page content */}
      <div className="flex-1 min-h-0" style={{ zIndex: 10, position: "relative" }}>
        {renderPage()}
      </div>
    </div>
  );
}