const skills = {
  Languages: [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  ],
  Frameworks: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  ],
  DevOps: [
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "NGINX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
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