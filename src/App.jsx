import { useState } from "react";
import { motion } from "framer-motion"; // 👈 Import Framer Motion
import Navbar from "./components/Navbar";
import SidebarCard from "./components/SidebarCard";
import Hero from "./components/Hero";
import Background from "./components/Background";
import ContactFooter from "./components/Contactfooter";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import JourneyHero from "./components/JourneyHero";
import SkillsTechnical from "./components/skillsTechnical";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Shared animation settings
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onFinished={() => setIsLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen w-full relative">

          {/* Background */}
          <Background />

          {/* Navbar */}
          <div className="flex justify-center pt-5 px-4 sticky top-0 z-50 overflow-hidden">
            <Navbar />
          </div>

          {/* Tech Marquee */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <TechMarquee />
          </motion.div>

          {/* Main Content Area */}
          <div className="w-full flex justify-center px-4 lg:px-8 mt-6 flex-1 ">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6">

              {/* Sidebar */}
              <div className="w-full lg:w-72 flex-shrink-0">
                <div className="sticky top-[80px] z-50">
                  <SidebarCard />
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col gap-6">
                <motion.div
                  id="Home"
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionVariants}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col gap-6"
                >
                  <Hero />
                </motion.div>

                <motion.div
                  id="Skils"
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionVariants}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col gap-6"
                >
                  <Skills />
                </motion.div>

                <motion.div
                  id="Project"
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionVariants}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col gap-6"
                >
                  <Projects />
                </motion.div>

                <motion.div
                  id="Journey"
                  initial="hidden"
                  whileInView="visible"
                  variants={sectionVariants}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex-1 flex flex-col gap-6"
                >
                  <JourneyHero />
                  <Journey />
                  <SkillsTechnical />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            id="Footer"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 relative z-10"
          >
            <ContactFooter />
          </motion.div>
        </div>
      )}
    </>
  );
}
