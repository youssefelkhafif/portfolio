

import { useState } from "react";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

const projects = [
  {
    title: "Minishell",
    desc: "UNIX shell replicating Bash behavior",
    category: "Low-Level",
    tags: ["C", "UNIX", "Shell"],
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80",
    link: "#",
  },
  {
    title: "Cub3D",
    desc: "3D raycasting engine inspired by Wolfenstein",
    category: "Low-Level",
    tags: ["C", "MiniLibX", "Graphics", "+1"],
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
    link: "https://github.com/yourusername/arcade-dashboard",
  },
  {
    title: "Arcade Dashboard",
    desc: "Full-stack gaming arcade management system",
    category: "Full-Stack",
    tags: ["React", "Node", "MongoDB"],
    img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
    link: "#",
  },
  {
    title: "NetScan",
    desc: "Network scanning and monitoring tool",
    category: "C++",
    tags: ["C++", "Networking", "CLI"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    link: "#",
  },
  {
    title: "CI/CD Pipeline",
    desc: "Automated deployment pipeline with Docker & GitHub Actions",
    category: "DevOps",
    tags: ["Docker", "GitHub Actions", "Nginx"],
    img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
    link: "#",
  },
  {
    title: "WebServer",
    desc: "HTTP/1.1 compliant web server from scratch",
    category: "C++",
    tags: ["C++", "HTTP", "Sockets"],
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    link: "#",
  },
];

const filters = ["All", "Low-Level", "Full-Stack"];

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)} // open modal
      style={{
        borderRadius: 16,
        overflow: "hidden",
        border: hovered ? "1.5px solid rgba(249,115,22,0.5)" : "1.5px solid rgba(255,255,255,0.08)",
        background: "#0d0d14",
        transition: "border-color 0.25s, box-shadow 0.25s",
        boxShadow: hovered ? "0 0 24px rgba(249,115,22,0.12)" : "none",
        cursor: "pointer",
      }}
    >
      <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.4s",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: 12, left: 14,
          background: "rgba(10,10,16,0.85)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 999, padding: "4px 12px",
          fontSize: 11, fontWeight: 600,
          color: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)",
        }}>
          {project.category}
        </div>
      </div>
      <div style={{ padding: "14px 16px 16px" }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: hovered ? "#f97316" : "white", transition: "color 0.2s", marginBottom: 4 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12, lineHeight: 1.5 }}>
          {project.desc}
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#0d0d14",
          borderRadius: 12,
          padding: 24,
          maxWidth: 600,
          width: "90%",
          color: "white",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Project image */}
        <div style={{ position: "relative", height: 200, marginBottom: 16 }}>
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 999,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(6px)",
            }}
          >
            {project.category}
          </div>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 12,
            color: "#facc15", // yellow
          }}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 20,
            lineHeight: 1.5,
          }}
        >
          {project.desc}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                color: "white",
                background: "rgba(255,255,255,0.08)",
                padding: "4px 10px",
                borderRadius: 6,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Conditional repo check */}
        {project.link && project.link !== "#" ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              borderRadius: 6,
              background: "#0d0d14",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "white",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(249,115,22,0.5)",
            }}
          >
            {/* GitHub icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            View Code
          </a>
        ) : (
          <div
            style={{
              padding: "10px 18px",
              borderRadius: 6,
              background: "rgba(249,115,22,0.1)",
              color: "#f97316",
              fontWeight: 600,
            }}
          >
            🔒 Repo Coming Soon
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            marginTop: 20,
            padding: "8px 14px",
            borderRadius: 6,
            background: "rgba(255,255,255,0.1)",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}



export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: "7px 18px", borderRadius: 999, fontSize: 12, fontWeight: 600,
              border: active === f ? "none" : "1.5px solid rgba(255,255,255,0.12)",
              background: active === f ? "#f97316" : "rgba(255,255,255,0.04)",
              color: active === f ? "white" : "rgba(255,255,255,0.6)",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} onClick={setSelected} />
        ))}
      </div>

      {/* Modal */}
      <Modal project={selected} onClose={() => setSelected(null)} />
    </div>
  );
}