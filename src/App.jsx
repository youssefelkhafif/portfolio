import Navbar from "./components/Navbar";
import SidebarCard from "./components/SidebarCard";
import Hero from "./components/Hero";
import Background from "./components/Background";
import ContactFooter from "./components/Contactfooter";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="text-white flex flex-col min-h-screen relative ">
      
      <Background />

      {/* Navbar */}
      <div className="flex justify-center pt-5 px-4 relative z-10">
        <Navbar />
      </div>

      {/* Tech */}
      <div className="relative z-10">
        <TechMarquee />
      </div>

      {/* Main Layout */}
      <div className="w-full flex justify-center px-4 lg:px-8 mt-6 relative z-10">
        
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 ">
          
          {/* Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0 ">
            <div className="lg:sticky lg:top-10 ">
              <SidebarCard />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-6">
            <Hero />
            <Projects />
            <Projects />
            <Projects />
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 relative z-10">
        <ContactFooter />
      </div>

    </div>
  );
}