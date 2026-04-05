function Journey() {

    const journey = [
        {
            period: "2025 - 2026",
            type: "EDUCATION",
            title: "Full-Stack Web Development Program",
            place: "LionsGeek",
            location: "Casablanca, Morocco",
            description:
                "Intensive full-stack development program focused on building modern web applications using both frontend and backend technologies.",
            details: [
                "Training in HTML, CSS, Tailwind, JavaScript, and React",
                "Backend development with PHP, Laravel, and MySQL",
                "Hands-on projects covering real-world applications",
                "Collaboration and problem-solving in a team environment"
            ],
            note: "Expected completion: April - May 2026"
        },
        {
            period: "2025",
            type: "EDUCATION",
            title: "High School Diploma - Baccalaureate (Physics)",
            place: "High School",
            location: "Casablanca, Morocco",
            description:
                "Graduated with a Baccalaureate in Physics (PC), building a strong analytical and problem-solving foundation.",
            details: [
                "Focused on mathematics and physics",
                "Developed logical thinking and analytical skills",
                "Prepared for technical and engineering studies"
            ]
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto py-10 space-y-8">

            {journey.map((item) => (
                <div
                    key={item.title}
                    className="bg-white/5 backdrop-blur-lg border border-orange-400/20 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/10 transition duration-300"
                >

                    {/* Badges */}
                    <div className="flex gap-3 mb-4">
                        <span className="bg-orange-500/20 text-orange-400 text-sm px-3 py-1 rounded-full">
                            {item.period}
                        </span>
                        <span className="bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full">
                            {item.type}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white">
                        {item.title}
                    </h2>

                    {/* Place */}
                    <h3 className="text-orange-400 font-medium mt-1">
                        {item.place}
                    </h3>

                    {/* Location */}
                    <p className="text-gray-400 text-sm mb-3">
                        {item.location}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                        {item.note && (
                            <>
                                <br />
                                <span className="text-gray-400">
                                    {item.note}
                                </span>
                            </>
                        )}
                    </p>

                    {/* Achievements */}
                    <div>
                        <h4 className="text-gray-200 font-semibold mb-2">
                            Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                            {item.details.map((detail, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-2 text-gray-300"
                                >
                                    <span className="text-orange-400 mt-1">•</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            ))}

        </div>
    );
}

export default Journey;