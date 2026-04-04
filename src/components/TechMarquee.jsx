const items = [
  { type: "label", text: "Frontend" },
  { type: "icon", name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { type: "icon", name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { type: "icon", name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }, 
  { type: "icon", name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { type: "icon", name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  { type: "label", text: "Backend" },
  { type: "icon", name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { type: "icon", name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { type: "icon", name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  { type: "label", text: "Tools" },
  { type: "icon", name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { type: "icon", name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
];

function Item({ item }) {
  if (item.type === "label") {
    return (
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "8px 20px",
          borderRadius: 999,
          border: "1.5px solid #8B5E3C",
          background: "rgba(30,18,8,0.7)",
          color: "#e8a04a",
          fontWeight: 700,
          fontSize: 13,
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        {item.text}
      </div>
    );
  }

  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "1.5px solid rgba(139,94,60,0.4)",
        background: "rgba(20,14,6,0.8)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {item.img ? (
        <img src={item.img} alt={item.name} style={{ width: 24, height: 24, objectFit: "contain" }} />
      ) : (
        <span style={{ fontSize: 11, fontWeight: 800, color: item.color, background: item.bg, padding: "2px 4px", borderRadius: 4 }}>
          {item.text}
        </span>
      )}
    </div>
  );
}

export default function TechMarquee() {
  const track = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        padding: "10px 0",
        zIndex: 10,
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to right, #050816, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
        background: "linear-gradient(to left, #050816, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 14px;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        // .marquee-track:hover {
        //   animation-play-state: paused;
        // }
      `}</style>

      <div className="marquee-track">
        {track.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </div>
  );
}