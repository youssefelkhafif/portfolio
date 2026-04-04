import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Stars
    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.2,
      alpha: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.015 + 0.005,
      offset: Math.random() * Math.PI * 2,
    }));

    // Planets
    const planets = [
      { x: 0.78, y: 0.22, r: 38, color: "#1a3a5c", ring: true,  floatAmp: 12, floatSpeed: 0.0007, phase: 0 },
      { x: 0.88, y: 0.58, r: 20, color: "#2d1a4a", ring: false, floatAmp: 8,  floatSpeed: 0.0005, phase: 1 },
      { x: 0.62, y: 0.78, r: 14, color: "#1a3a2a", ring: false, floatAmp: 10, floatSpeed: 0.0009, phase: 2 },
    ];

    // Asteroids
    const asteroids = Array.from({ length: 7 }, () => {
      const sides = 7 + Math.floor(Math.random() * 3);
      const verts = Array.from({ length: sides }, (_, j) => {
        const a = (j / sides) * Math.PI * 2;
        const rr = 6 + Math.random() * 5;
        return { x: Math.cos(a) * rr, y: Math.sin(a) * rr };
      });
      return {
        x: (0.5 + Math.random() * 0.45) * window.innerWidth,
        y: (0.15 + Math.random() * 0.75) * window.innerHeight,
        verts,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        floatAmp: 6 + Math.random() * 8,
        floatSpeed: 0.0004 + Math.random() * 0.0006,
        phase: Math.random() * Math.PI * 2,
      };
    });

    // Rockets
    const rockets = [
      { x: 0.70, y: 0.18, floatAmp: 10, floatSpeed: 0.0006, phase: 0.5 },
      { x: 0.83, y: 0.72, floatAmp: 14, floatSpeed: 0.0008, phase: 2.0 },
    ];

    function lighten(hex, amt) {
      const n = parseInt(hex.slice(1), 16);
      const r = Math.min(255, (n >> 16) + amt);
      const g = Math.min(255, ((n >> 8) & 0xff) + amt);
      const b = Math.min(255, (n & 0xff) + amt);
      return `rgb(${r},${g},${b})`;
    }

    function drawPlanet(px, py, planet) {
      ctx.save();
      ctx.translate(px, py);

      if (planet.ring) {
        ctx.save();
        ctx.scale(2.4, 0.45);
        ctx.beginPath();
        ctx.ellipse(0, 0, planet.r, planet.r * 0.4, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `${planet.color}99`;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
      }

      const grad = ctx.createRadialGradient(-planet.r * 0.3, -planet.r * 0.3, 0, 0, 0, planet.r);
      grad.addColorStop(0, lighten(planet.color, 55));
      grad.addColorStop(0.5, planet.color);
      grad.addColorStop(1, lighten(planet.color, -55));
      ctx.beginPath();
      ctx.arc(0, 0, planet.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, planet.r, 0, Math.PI * 2);
      ctx.clip();
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        ctx.ellipse(0, i * planet.r * 0.35, planet.r, planet.r * 0.08, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.04)";
        ctx.fill();
      }
      ctx.restore();

      ctx.restore();
    }

    function drawAsteroid(ast, t) {
      ctx.save();
      ctx.translate(
        ast.x + Math.sin(t * ast.floatSpeed + ast.phase) * ast.floatAmp,
        ast.y + Math.cos(t * ast.floatSpeed * 1.3 + ast.phase) * ast.floatAmp * 0.6
      );
      ctx.rotate(ast.rot + t * ast.rotSpeed);

      ctx.beginPath();
      ctx.moveTo(ast.verts[0].x, ast.verts[0].y);
      ast.verts.forEach(v => ctx.lineTo(v.x, v.y));
      ctx.closePath();
      ctx.fillStyle = "#5a4530";
      ctx.strokeStyle = "#7a6040";
      ctx.lineWidth = 0.8;
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.restore();
    }

    function drawRocket(rx, ry) {
      ctx.save();
      ctx.translate(rx, ry);
      ctx.rotate(-0.5);
      ctx.globalAlpha = 0.72;

      // Flame
      const flameGrad = ctx.createLinearGradient(0, 18, 0, 38);
      flameGrad.addColorStop(0, "#ff8800cc");
      flameGrad.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.moveTo(-5, 20);
      ctx.quadraticCurveTo(0, 36, 5, 20);
      ctx.fillStyle = flameGrad;
      ctx.fill();

      // Body
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.bezierCurveTo(8, -10, 9, 4, 9, 18);
      ctx.lineTo(-9, 18);
      ctx.bezierCurveTo(-9, 4, -8, -10, 0, -18);
      ctx.fillStyle = "#1a1a2e";
      ctx.strokeStyle = "#e8a04a";
      ctx.lineWidth = 1;
      ctx.fill();
      ctx.stroke();

      // Window
      ctx.beginPath();
      ctx.arc(0, 2, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#3a5a8a";
      ctx.strokeStyle = "#e8a04a";
      ctx.lineWidth = 0.8;
      ctx.fill();
      ctx.stroke();

      // Fins
      ctx.beginPath();
      ctx.moveTo(-9, 14); ctx.lineTo(-16, 22); ctx.lineTo(-9, 18); ctx.closePath();
      ctx.fillStyle = "#e8a04a"; ctx.fill();

      ctx.beginPath();
      ctx.moveTo(9, 14); ctx.lineTo(16, 22); ctx.lineTo(9, 18); ctx.closePath();
      ctx.fillStyle = "#e8a04a"; ctx.fill();

      ctx.globalAlpha = 1;
      ctx.restore();
    }

    let t = 0;
    function draw() {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space bg
      const bg = ctx.createRadialGradient(
        canvas.width * 0.75, canvas.height * 0.35, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.9
      );
      bg.addColorStop(0, "#0d1b3e");
      bg.addColorStop(0.5, "#050816");
      bg.addColorStop(1, "#020408");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula blobs
      [
        { x: 0.75, y: 0.35, r: 200, color: "rgba(80,30,180,0.10)" },
        { x: 0.60, y: 0.65, r: 150, color: "rgba(0,160,100,0.07)" },
      ].forEach(b => {
        const grad = ctx.createRadialGradient(
          b.x * canvas.width, b.y * canvas.height, 0,
          b.x * canvas.width, b.y * canvas.height, b.r
        );
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x * canvas.width, b.y * canvas.height, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Stars
      stars.forEach(s => {
        const alpha = s.alpha * (0.6 + 0.4 * Math.sin(t * s.speed + s.offset));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
        ctx.fill();
      });

      // Planets
      planets.forEach(p => {
        const px = p.x * canvas.width;
        const py = p.y * canvas.height + Math.sin(t * p.floatSpeed + p.phase) * p.floatAmp;
        drawPlanet(px, py, p);
      });

      // Asteroids
      asteroids.forEach(ast => drawAsteroid(ast, t));

      // Rockets
      rockets.forEach(r => {
        const rx = r.x * canvas.width + Math.cos(t * r.floatSpeed * 0.7 + r.phase) * 5;
        const ry = r.y * canvas.height + Math.sin(t * r.floatSpeed + r.phase) * r.floatAmp;
        drawRocket(rx, ry);
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: -1, display: "block", width: "100vw", height: "100vh" }}
    />
  );
}