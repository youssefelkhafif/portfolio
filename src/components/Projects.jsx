// import { useState } from "react";
// // import SidebarCard from "./SidebarCard";

// const ArrowIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
//   </svg>
// );

// const projects = [
//   {
//     title: "Minishell",
//     desc: "UNIX shell replicating Bash behavior",
//     category: "Low-Level",
//     tags: ["C", "UNIX", "Shell"],
//     img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80",
//     link: "#",
//   },
//   {
//     title: "Cub3D",
//     desc: "3D raycasting engine inspired by Wolfenstein",
//     category: "Low-Level",
//     tags: ["C", "MiniLibX", "Graphics", "+1"],
//     img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80",
//     link: "#",
//   },
//   {
//     title: "Arcade Dashboard",
//     desc: "Full-stack gaming arcade management system",
//     category: "Full-Stack",
//     tags: ["React", "Node", "MongoDB"],
//     img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
//     link: "#",
//   },
//   {
//     title: "NetScan",
//     desc: "Network scanning and monitoring tool",
//     category: "C++",
//     tags: ["C++", "Networking", "CLI"],
//     img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
//     link: "#",
//   },
//   {
//     title: "CI/CD Pipeline",
//     desc: "Automated deployment pipeline with Docker & GitHub Actions",
//     category: "DevOps",
//     tags: ["Docker", "GitHub Actions", "Nginx"],
//     img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
//     link: "#",
//   },
//   {
//     title: "WebServer",
//     desc: "HTTP/1.1 compliant web server from scratch",
//     category: "C++",
//     tags: ["C++", "HTTP", "Sockets"],
//     img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
//     link: "#",
//   },
// ];

// const filters = ["All", "Low-Level", "Full-Stack", "C++", "DevOps"];

// function ProjectCard({ project }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         borderRadius: 16,
//         overflow: "hidden",
//         border: hovered ? "1.5px solid rgba(249,115,22,0.5)" : "1.5px solid rgba(255,255,255,0.08)",
//         background: "#0d0d14",
//         position: "relative",
//         transition: "border-color 0.25s, box-shadow 0.25s",
//         boxShadow: hovered ? "0 0 24px rgba(249,115,22,0.12)" : "none",
//         cursor: "pointer",
//       }}
      
//     >
//       {/* Image */}
//       <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
//         <img
//           src={project.img}
//           alt={project.title}
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             transition: "transform 0.4s",
//             transform: hovered ? "scale(1.05)" : "scale(1)",
//           }}
//         />
//         {/* Dark overlay */}
//         <div style={{
//           position: "absolute", inset: 0,
//           background: hovered
//             ? "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)"
//             : "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)",
//           transition: "background 0.3s",
//         }} />

//         {/* Category badge */}
//         <div style={{
//           position: "absolute", bottom: 12, left: 14,
//           background: "rgba(10,10,16,0.85)",
//           border: "1px solid rgba(255,255,255,0.12)",
//           borderRadius: 999,
//           padding: "4px 12px",
//           fontSize: 11,
//           fontWeight: 600,
//           color: "rgba(255,255,255,0.85)",
//           backdropFilter: "blur(8px)",
//         }}>
//           {project.category}
//         </div>

//         {/* Arrow button on hover */}
//         <a
//           href={project.link}
//           style={{
//             position: "absolute", top: 12, right: 12,
//             width: 34, height: 34,
//             borderRadius: "50%",
//             background: "#f97316",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             color: "white",
//             opacity: hovered ? 1 : 0,
//             transform: hovered ? "scale(1)" : "scale(0.7)",
//             transition: "opacity 0.25s, transform 0.25s",
//             textDecoration: "none",
//             boxShadow: "0 4px 14px rgba(249,115,22,0.5)",
//           }}
//         >
//           <ArrowIcon />
//         </a>
//       </div>

//       {/* Content */}
//       <div style={{ padding: "14px 16px 16px" }}>
//         <h3 style={{
//           fontSize: 17,
//           fontWeight: 700,
//           color: hovered ? "#f97316" : "white",
//           transition: "color 0.2s",
//           marginBottom: 4,
//         }}>
//           {project.title}
//         </h3>
//         <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12, lineHeight: 1.5 }}>
//           {project.desc}
//         </p>
//         <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
//           {project.tags.map((tag) => (
//             <span key={tag} style={{
//               fontSize: 11,
//               color: "rgba(255,255,255,0.45)",
//               fontWeight: 500,
//             }}>
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Projects() {
//   const [active, setActive] = useState("All");

//   const filtered = active === "All"
//     ? projects
//     : projects.filter((p) => p.category === active);

//   return (
//     <div style={{ display: "flex", height: "100%", gap: 24, padding: "0 24px 16px", boxSizing: "border-box" }}
//     >

//       {/* Fixed sidebar
//       <div style={{ flexShrink: 0, width: 260 }}>
//         <SidebarCard />
//       </div> */}

//       {/* Right content */}
//       <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden" }}>

//         {/* Filter tabs */}
//         <div style={{ display: "flex", gap: 8, marginBottom: 16, flexShrink: 0 }}>
//           {filters.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActive(f)}
//               style={{
//                 padding: "7px 18px",
//                 borderRadius: 999,
//                 fontSize: 12,
//                 fontWeight: 600,
//                 border: active === f ? "none" : "1.5px solid rgba(255,255,255,0.12)",
//                 background: active === f ? "#f97316" : "rgba(255,255,255,0.04)",
//                 color: active === f ? "white" : "rgba(255,255,255,0.6)",
//                 cursor: "pointer",
//                 transition: "all 0.2s",
//               }}
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         {/* Scrollable project grid */}
//         <div style={{
//           flex: 1,
//           overflowY: "auto",
//           paddingRight: 4,
//           scrollbarWidth: "thin",
//           scrollbarColor: "rgba(249,115,22,0.3) transparent",
//         }}>
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: 16,
//           }}>
//             {filtered.map((project) => (
//               <ProjectCard key={project.title} project={project} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
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
    link: "#",
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

const filters = ["All", "Low-Level", "Full-Stack", "C++", "DevOps"];

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        border: hovered ? "1.5px solid rgba(249,115,22,0.5)" : "1.5px solid rgba(255,255,255,0.08)",
        background: "#0d0d14",
        position: "relative",
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
        <a href={project.link} style={{
          position: "absolute", top: 12, right: 12,
          width: 34, height: 34, borderRadius: "50%",
          background: "#f97316",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0.7)",
          transition: "opacity 0.25s, transform 0.25s",
          textDecoration: "none",
          boxShadow: "0 4px 14px rgba(249,115,22,0.5)",
        }}>
          <ArrowIcon />
        </a>
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

export default function Projects() {
  const [active, setActive] = useState("All");
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
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}