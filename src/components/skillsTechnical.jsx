import React from "react";

function SkillsTechnical() {
  const skillsBeyondTechnical = [
    {
      title: "Team Collaboration",
      icon: "👥",
      items: [
        "Worked effectively within a development team",
        "Collaborated on building authentication and user profile features",
        "Shared ideas and contributed to team decisions",
        "Supported teammates to achieve project goals"
      ]
    },
    {
      title: "Communication",
      icon: "💬",
      items: [
        "Improved communication skills as a team leader",
        "Explained technical ideas clearly to teammates",
        "Actively participated in discussions and problem-solving",
        "Adapted communication based on team needs"
      ]
    },
    {
      title: "Problem Solving",
      icon: "🧠",
      items: [
        "Debugged and solved issues in real projects",
        "Contributed to building authentication systems",
        "Worked on user profile features and logic",
        "Approached challenges with analytical thinking"
      ]
    },
    {
      title: "Leadership Experience",
      icon: "🚀",
      items: [
        "Served as a team leader in multiple projects",
        "Helped guide the team and organize tasks",
        "Encouraged collaboration and team spirit",
        "Took initiative when solving problems"
      ]
    }
  ];

  return (
    <section className=" text-white py-16 px-6">
      
      {/* Title */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
          💡 Skills Beyond Technical
        </h2>

        <p className="text-gray-400">
          These skills highlight my ability to collaborate, communicate,
          lead teams, and solve problems effectively in real-world projects.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {skillsBeyondTechnical.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-orange-400 transition"
          >
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-400 text-black w-12 h-12 flex items-center justify-center rounded-lg text-xl">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>
            </div>

            {/* Items */}
            <ul className="space-y-2 text-gray-300">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsTechnical;