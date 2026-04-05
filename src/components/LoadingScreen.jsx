import { useState, useEffect } from "react";

const LoadingScreen = ({ onFinished }) => {
  const [lines, setLines] = useState([]);
  const [percent, setPercent] = useState(0);

  const terminalData = [
    "[ OK ] Initializing portfolio kernel v1.0",
    "[ OK ] Loading identity: Youssef El Khafif",
    "[ OK ] Mounting skill tree...",
    "[ OK ] Starting animation_daemon...",
    "[ OK ] Scanning attack surface... (none found)",
    "[ OK ] All systems operational. Welcome.",
  ];

  useEffect(() => {
    // 1. Handle Percent counter
    const progressInterval = setInterval(() => {
      setPercent((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);

    // 2. Handle Terminal Lines appearing
    terminalData.forEach((line, index) => {
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === terminalData.length - 1) {
          // Wait 1 second after the last line before hiding
          setTimeout(onFinished, 1000);
        }
      }, index * 400); // Adjust speed here
    });

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-white p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-1 text-center tracking-tighter">
          youssef.elkhafif
        </h1>
        <p className="text-[10px] text-zinc-500 text-center mb-8 uppercase tracking-widest">
          Full-stack Developer
        </p>

        <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
          <span>loading</span>
          <span>{percent}%</span>
        </div>
        <div className="w-full h-1 bg-zinc-900 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-75" 
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="space-y-1 h-32">
          {lines.map((line, i) => (
            <div key={i} className="text-xs sm:text-sm">
              <span className={line.includes("OK") ? "text-zinc-500" : "text-white"}>
                {line}
              </span>
            </div>
          ))}
          <span className="inline-block w-2 h-4 bg-white animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;