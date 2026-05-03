import React from "react";
import {
    FaBookOpen,
    FaClock,
    FaBullseye,
    FaCalendarCheck,
    FaLightbulb,
    FaBrain,
} from "react-icons/fa";

const LearningTips = () => {
    const tips = [
        {
            id: 1,
            icon: <FaBullseye />,
            title: "Set Clear Goals",
            description:
                "Before starting a course, write down what skill you want to learn and what project you want to build.",
        },
        {
            id: 2,
            icon: <FaClock />,
            title: "Use Time Blocks",
            description:
                "Study in focused time blocks, such as 25 minutes of learning followed by a 5-minute break.",
        },
        {
            id: 3,
            icon: <FaBookOpen />,
            title: "Take Short Notes",
            description:
                "Write down important ideas, commands, formulas, or steps while learning so you can review them later.",
        },
        {
            id: 4,
            icon: <FaCalendarCheck />,
            title: "Create a Weekly Plan",
            description:
                "Divide your course into small weekly targets so you do not feel overloaded before deadlines.",
        },
        {
            id: 5,
            icon: <FaBrain />,
            title: "Practice After Learning",
            description:
                "Do not only watch lessons. Build small projects or solve tasks after each topic to remember better.",
        },
        {
            id: 6,
            icon: <FaLightbulb />,
            title: "Review Before Moving On",
            description:
                "Spend a few minutes reviewing the previous lesson before starting a new one. This improves long-term memory.",
        },
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-5">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <p className="text-orange-500 font-semibold">Learning Tips</p>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        Study Smarter, Not Harder
                    </h2>

                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Improve your learning journey with simple study techniques and time
                        management habits.
                    </p>
                </div>

                {/* Tips Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tips.map((tip) => (
                        <div
                            key={tip.id}
                            className="group rounded-3xl border border-orange-100 bg-orange-50 p-6 shadow-sm hover:bg-white hover:shadow-xl transition duration-300"
                        >
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white group-hover:scale-110 transition duration-300">
                                {tip.icon}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {tip.title}
                            </h3>

                            <p className="text-slate-600 leading-7">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningTips;