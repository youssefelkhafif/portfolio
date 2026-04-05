function JourneyHero() {
    return (
        <section className="relative w-full py-16 px-6 overflow-hidden">

            {/* Background (dark + stars effect) */}
            <div className="absolute inset-0 " />

            {/* subtle stars */}
            <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />

            {/* Content */}
            <div className="relative max-w-5xl mx-auto">

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-orange-400 text-3xl">🚆</span>

                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        My Journey
                    </h1>
                </div>

                {/* Subtitle */}
                <p className="text-gray-400 text-lg max-w-2xl">
                    Following the tracks of education, leadership, and personal growth
                </p>

            </div>
        </section>
    );
}

export default JourneyHero;