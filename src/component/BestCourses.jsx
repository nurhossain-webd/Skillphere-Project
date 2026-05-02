import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const BestCourses = async () => {
    const res = await fetch("https://skillphere-project.vercel.app/courses.json");

    const courses = await res.json();

    const popularCourses = [...courses]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 3);

    return (
        <section className="bg-orange-50 py-16">
            <div className="max-w-7xl mx-auto px-5">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <p className="text-orange-500 font-semibold">Popular Courses</p>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        Top Rated Courses
                    </h2>

                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Explore our highest-rated courses and start learning from expert
                        instructors today.
                    </p>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularCourses.map((course) => (
                        <div
                            key={course.id}
                            className="card bg-white shadow-md border border-orange-100 hover:shadow-xl transition duration-300"
                        >
                            {/* Image */}
                            <figure className="relative h-52 w-full">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover"
                                />
                            </figure>

                            {/* Card Body */}
                            <div className="card-body">
                                <h3 className="card-title text-slate-900">
                                    {course.title}
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Instructor: {course.instructor}
                                </p>

                                <div className="flex items-center gap-2 text-orange-500 font-semibold">
                                    <FaStar />
                                    <span>{course.rating}</span>
                                </div>

                                <div className="card-actions justify-end mt-3">
                                    <Link
                                        href={`/courses/${course.id}`}
                                        className="btn bg-orange-500 text-white border-none hover:bg-orange-600"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestCourses;