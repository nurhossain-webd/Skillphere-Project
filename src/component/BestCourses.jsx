"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const BestCourses = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const res = await fetch("/courses.json");
                const courses = await res.json();

                const topCourses = [...courses]
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 3);

                setPopularCourses(topCourses);
            } catch (error) {
                console.error("Failed to load popular courses:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCourses();
    }, []);

    if (loading) {
        return (
            <section className="bg-orange-50 py-16">
                <div className="flex justify-center">
                    <span className="loading loading-spinner loading-lg text-orange-500"></span>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-orange-50 py-16">
            <div className="max-w-7xl mx-auto px-5">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {popularCourses.map((course) => (
                        <div
                            key={course.id}
                            className="card overflow-hidden bg-white shadow-md border border-orange-100 hover:shadow-xl transition duration-300"
                        >
                            <figure className="relative h-52 w-full overflow-hidden bg-orange-100">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition duration-300 hover:scale-105"
                                />
                            </figure>

                            <div className="card-body">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="badge bg-orange-100 text-orange-600 border-none">
                                        {course.category}
                                    </span>

                                    <span className="badge bg-slate-100 text-slate-600 border-none">
                                        {course.level}
                                    </span>
                                </div>

                                <h3 className="card-title text-slate-900 line-clamp-2">
                                    {course.title}
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Instructor: {course.instructor}
                                </p>

                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-2 text-orange-500 font-semibold">
                                        <FaStar />
                                        <span>{course.rating}</span>
                                    </div>

                                    <p className="text-sm text-slate-500">{course.duration}</p>
                                </div>

                                <div className="card-actions justify-end mt-4">
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