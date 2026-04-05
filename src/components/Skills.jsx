const skills = {
  Frontend: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ],
  Backend: [
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ],
  Tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  ],
};

export default function Skills() {
  return (
    <div className="text-white">

      {/* HERO */}
      <div className="w-full flex items-center px-6 lg:px-16 py-20">
        <div className="max-w-5xl">

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
            <span className="text-gray-200">TECHNICAL</span>
            <br />
            <span className="text-orange-400">SKILLS</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
            Built through intensive training at{" "}
            <span className="text-orange-400 font-semibold">Lions Geek</span>,
            focusing on modern web and software development.
          </p>

        </div>
      </div>

      {/* SKILLS */}
      <div className="max-w-6xl mx-auto px-6 space-y-8 pb-16">

        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="border border-orange-500/30 rounded-2xl p-6 bg-black/40 backdrop-blur-md shadow-lg"
          >
            <h2 className="text-orange-400 text-lg font-semibold mb-4">
              {category}
            </h2>

            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg 
                  border border-orange-500/30 bg-black/60 
                  hover:border-orange-400 hover:bg-black/80 
                  hover:scale-105
                  transition duration-300"
                >
                  <img src={item.icon} alt={item.name} className="w-5 h-5" />
                  <span className="text-sm text-gray-200">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}