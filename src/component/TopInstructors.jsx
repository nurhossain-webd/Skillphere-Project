import Image from "next/image";
import React from "react";
import { FaStar, FaUsers } from "react-icons/fa";

const TopInstructors = () => {
    const instructors = [
        {
            id: 1,
            name: "John Doe",
            role: "Full-Stack Web Developer",
            students: "4.8K",
            rating: 4.9,
            image: "/images/instructors/instructor-1.avif",
        },
        {
            id: 2,
            name: "Sarah Mitchell",
            role: "UI/UX Design Expert",
            students: "3.6K",
            rating: 4.8,
            image: "/images/instructors/instructor-2.avif",
        },
        {
            id: 3,
            name: "Emily Carter",
            role: "Data Science Instructor",
            students: "5.2K",
            rating: 4.9,
            image: "/images/instructors/instructor-3.avif",
        },
        {
            id: 4,
            name: "Michael Brown",
            role: "Digital Marketing Strategist",
            students: "2.9K",
            rating: 4.7,
            image: "/images/instructors/instructor-4.avif",
        },
    ];

    return (
        <section className="bg-orange-50 py-16">
            <div className="max-w-7xl mx-auto px-5">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <p className="text-orange-500 font-semibold">Top Instructors</p>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        Learn From Industry Experts
                    </h2>

                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Meet our experienced instructors who help students build practical
                        and career-ready skills.
                    </p>
                </div>

                {/* Instructor Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {instructors.map((instructor) => (
                        <div
                            key={instructor.id}
                            className="rounded-3xl bg-white border border-orange-100 p-6 text-center shadow-md hover:shadow-xl transition duration-300"
                        >
                            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-orange-100">
                                <Image
                                    src={instructor.image}
                                    alt={instructor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-slate-900">
                                {instructor.name}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">{instructor.role}</p>

                            <div className="mt-5 flex items-center justify-center gap-4 text-sm">
                                <div className="flex items-center gap-2 text-orange-500 font-semibold">
                                    <FaStar />
                                    <span>{instructor.rating}</span>
                                </div>

                                <div className="flex items-center gap-2 text-slate-500">
                                    <FaUsers />
                                    <span>{instructor.students}</span>
                                </div>
                            </div>

                            <button className="btn mt-6 w-full border-none bg-orange-500 text-white hover:bg-orange-600">
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopInstructors;