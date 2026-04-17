import { usePresence } from "framer-motion";
import { useState, useEffect } from "react";

// --- Icons ---
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BookmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const navLinks = [
  { icon: <HomeIcon />, label: "Home", path: "#Home" },
  { icon: <BriefcaseIcon />, label: "About", path: "#Journey" },
  { icon: <WrenchIcon />, label: "Skills", path: "#Skils" },
  { icon: <LayersIcon />, label: "Project", path: "#Project" },
  { icon: <FileIcon />, label: "Contact", path: "#Footer" },
];

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [time, setTime] = useState("");
  const onlineCount = usePresence();
  // const [userCount, setUserCount] = useState(39);

  // Clock Logic
  useEffect(() => {
    const update = () => {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes().toString().padStart(2, "0");
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m} ${ampm}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Simulated Live User Count (Fluctuates slightly)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setUserCount(prev => {
  //       const change = Math.random() > 0.5 ? 1 : -1;
  //       const newCount = prev + change;
  //       return newCount < 1 ? 1 : newCount; // Keep at least 1 user online
  //     });
  //   }, 8000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <nav className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#12151f] border border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-md w-fit">
      <button className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-white/5 transition-colors group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold shadow-md flex-shrink-0">
          YU
        </div>
        <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors whitespace-nowrap">
          Youssef.
        </span>
      </button>
      <div className="w-px h-6 bg-white/10 mx-1" />
      <div className="flex items-center gap-0.5">
        {navLinks.map((link, i) => (
          <a
            href={link.path}
            key={link.label}
            onClick={() => setActive(i)}
            title={link.label}
            className={`p-2.5 rounded-xl transition-all duration-200 ${
              active === i ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70 hover:bg-white/5"
            }`}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="w-px h-6 bg-white/10 mx-1" />
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/[0.07]">
        <span className="text-orange-400"><ClockIcon /></span>
        <span className="text-white/80 text-xs font-mono font-medium tracking-wide whitespace-nowrap">{time}</span>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/[0.07]">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-white/40"><UsersIcon /></span>
        <span className="text-white/80 text-xs font-medium" title="People viewing right now">{onlineCount}</span>
      </div>
      <button className="p-2.5 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/5 transition-all duration-200">
        <BookmarkIcon />
      </button>
      <a href="/youssef_elkhafif_cv.pdf" download="Youssef_ElKhafif_CV.pdf" className="ml-1">
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white text-sm font-bold shadow-[0_4px_14px_rgba(249,115,22,0.4)] hover:shadow-[0_4px_18px_rgba(249,115,22,0.6)] transition-all duration-200 active:scale-95">
          <DownloadIcon />
          CV
        </button>
      </a>
    </nav>
  );
}