import { useEffect, useState } from "react";

const codeLines = [
  { lang: "Java", code: 'System.out.println("Hello, I\'m Youssef");' },
  { lang: "Python", code: 'print("Hello, I\'m Youssef")' },
  { lang: "C", code: 'printf("Hello, I\'m Youssef\\n");' },
  { lang: "JS", code: 'console.log("Hello, I\'m Youssef")' },
];

function CodeBlock() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const current = codeLines[lineIndex];

  useEffect(() => {
    setDisplayed("");
    setCharIndex(0);
  }, [lineIndex]);

  useEffect(() => {
    if (charIndex < current.code.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => prev + current.code[charIndex]);
        setCharIndex((c) => c + 1);
      }, 40);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((i) => (i + 1) % codeLines.length);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [charIndex, current]);

  return (
    <div style={{
      background: "rgba(10,10,20,0.85)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 12,
      padding: "12px 16px",
      backdropFilter: "blur(10px)",
      marginBottom: 24,
      maxWidth: 420,
    }}>
      {/* Traffic lights + lang */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: 8, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
          {current.lang}
        </span>
      </div>
      {/* Code line */}
      <div style={{ fontFamily: "monospace", fontSize: 13, color: "#4ade80" }}>
        <span style={{ color: "rgba(255,255,255,0.35)", marginRight: 8 }}>&gt;</span>
        <span style={{ color: "#f97316" }}>{displayed}</span>
        <span style={{
          display: "inline-block", width: 2, height: 14,
          background: "#f97316", marginLeft: 1,
          animation: "blink 1s step-end infinite",
          verticalAlign: "middle",
        }} />
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <div
      className="flex-1 flex flex-col justify-center"
      style={{ padding: "0 16px" }}
    >
      <CodeBlock />

      <h1 style={{
        fontSize: "clamp(48px, 6vw, 80px)",
        fontWeight: 900,
        lineHeight: 1.05,
        color: "white",
        marginBottom: 0,
        letterSpacing: "-1px",
      }}>
        Full-Stack 
      </h1>
      <h1 style={{
        fontSize: "clamp(48px, 6vw, 80px)",
        fontWeight: 900,
        lineHeight: 1.05,
        color: "#f97316",
        marginBottom: 20,
        letterSpacing: "-1px",
      }}>
        Developer
      </h1>

      <p style={{
        color: "rgba(255,255,255,0.45)",
        fontSize: 14,
        lineHeight: 1.7,
        maxWidth: 480,
        marginBottom: 28,
      }}>
        Full Stack Developer driven by curiosity and continuous learning,
         with hands-on experience in modern web technologies, systems programming, and DevOps.
          Focused on building scalable, high-performance applications.
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <a href="#Project" style={{
          padding: "11px 28px",
          borderRadius: 12,
          background: "#f97316",
          color: "white",
          fontWeight: 700,
          fontSize: 13,
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(249,115,22,0.4)",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => e.target.style.boxShadow = "0 4px 28px rgba(249,115,22,0.6)"}
          onMouseLeave={e => e.target.style.boxShadow = "0 4px 20px rgba(249,115,22,0.4)"}
        >
          View Projects
        </a>
        <a href="#Footer" style={{
          padding: "11px 28px",
          borderRadius: 12,
          background: "transparent",
          color: "rgba(255,255,255,0.75)",
          fontWeight: 600,
          fontSize: 13,
          border: "1.5px solid rgba(255,255,255,0.15)",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.target.style.borderColor = "rgba(255,255,255,0.35)"; e.target.style.color = "white"; }}
          onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "rgba(255,255,255,0.75)"; }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}