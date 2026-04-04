import { images } from "../constant";

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

export default function SidebarCard() {
  return (
<div className="w-full lg:w-72 flex-shrink-0 bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-lg flex flex-col gap-4 hover:border-orange-400/40">          
      {/* Profile image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={images.cat}
          className="w-full object-cover rounded-xl grayscale"
          alt="profile"
          style={{ aspectRatio: "4/3" }}
        />
      </div>

      {/* Name & title */}
      <div>
        <h2 className="text-lg font-bold text-white">Youssef El Khafif</h2>
        <p className="text-orange-400 text-xs font-semibold mt-0.5">
          Software Engineer / Junior Full-stack Developer
        </p>
      </div>

      {/* Contact info */}
      <div className="flex flex-col gap-2.5">
        {[
          { icon: <MapPinIcon />, text: "Casablanca, Morocco" },
          { icon: <MailIcon />,   text: "youssefkhafif35@gmail.com" },
          { icon: <PhoneIcon />,  text: "+212 659 311 360" },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-2.5 text-white/65 text-xs">
            <span className="text-white/40 flex-shrink-0">{item.icon}</span>
            {item.text}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* Social buttons */}
      <div className="flex gap-2">
        <a
          href="#"
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-medium transition-all duration-200"
        >
          <GithubIcon /> GitHub
        </a>
        <a
          href="#"
          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-medium transition-all duration-200"
        >
          <LinkedinIcon /> LinkedIn
        </a>
      </div>

      {/* Download button */}
      <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white text-xs font-bold shadow-[0_4px_14px_rgba(249,115,22,0.35)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.5)] active:scale-[0.98] transition-all duration-200">
        <DownloadIcon />
        Download Resume
      </button>
    </div>
  );
}