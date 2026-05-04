import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire, FaStar } from "react-icons/fa";

const TrendingCourses = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses.json`, {
        cache: "no-store",
    });

    const courses = await res.json();

    // Trending means selected from high rating + different categories
    const trendingCourses = [...courses]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-5">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <p className="text-orange-500 font-semibold flex items-center justify-center gap-2">
                        <FaFire />
                        Trending Courses
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        Courses Students Are Loving Now
                    </h2>

                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Discover popular learning programs that are currently attracting
                        students from different skill areas.
                    </p>
                </div>

                {/* Trending Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingCourses.map((course) => (
                        <div
                            key={course.id}
                            className="group rounded-3xl overflow-hidden bg-orange-50 border border-orange-100 shadow-sm hover:shadow-xl transition duration-300"
                        >
                            <div className="relative h-44 w-full overflow-hidden">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                />

                                <span className="absolute top-3 left-3 badge border-none bg-orange-500 text-white">
                                    Trending
                                </span>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <span className="badge border-none bg-white text-orange-600">
                                        {course.category}
                                    </span>

                                    <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm">
                                        <FaStar />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>

                                <h3 className="font-bold text-slate-900 line-clamp-2">
                                    {course.title}
                                </h3>

                                <p className="text-sm text-slate-500 mt-2">
                                    By {course.instructor}
                                </p>

                                <Link
                                    href={`/courses/${course.id}`}
                                    className="btn btn-sm mt-5 w-full border-none bg-orange-500 text-white hover:bg-orange-600"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingCourses;