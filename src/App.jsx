import Navbar from "./components/Navbar";
import SidebarCard from "./components/SidebarCard";
import Hero from "./components/Hero";
import Background from "./components/Background";
import ContactFooter from "./components/Contactfooter";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full relative ">

      {/* Background */}
      <Background />

      {/* Navbar (sticky on top) */}
      <div className="flex justify-center pt-5 px-4 sticky top-0 z-50  overflow-hidden">
        <Navbar />
      </div>

      {/* Tech Marquee */}
      <div className="relative">
        <TechMarquee />
      </div>

      {/* Main Content Area */}
      {/* On mobile, allow vertical scrolling; on desktop, hide overflow */}
      <div className="w-full flex justify-center px-4 lg:px-8 mt-6 flex-1 ">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">

          {/* Sidebar - Sticky */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-[80px] z-50">
              <SidebarCard />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div id="Home" className="flex-1 flex flex-col gap-6">
              <Hero />
              <Projects />
            </div>
            <div id="second" className="flex-1 flex flex-col gap-6">
              <Hero />
              <Projects />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div id="Footer" className="mt-10 relative z-10">
        <ContactFooter />
      </div>
    </div>


  );
}


