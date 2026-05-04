"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaClock, FaLayerGroup, FaSearch, FaStar } from "react-icons/fa";

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCourses = async () => {
            const res = await fetch("/courses.json");
            const data = await res.json();

            setCourses(data);
            setLoading(false);
        };

        loadCourses();
    }, []);

    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (loading) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-orange-50">
                <span className="loading loading-spinner loading-lg text-orange-500"></span>
            </section>
        );
    }

    return (
        <section className="bg-orange-50 py-16">
            <div className="max-w-7xl mx-auto px-5">
                {/* Page Heading */}
                <div className="text-center mb-10">
                    <p className="text-orange-500 font-semibold">All Courses</p>

                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                        Explore SkillSphere Courses
                    </h1>

                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
                        Browse our available courses and choose the right learning path for
                        your skill development.
                    </p>
                </div>

                {/* Search Input */}
                <div className="max-w-xl mx-auto mb-10">
                    <div className="relative">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

                        <input
                            type="text"
                            placeholder="Search courses by title..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="input input-bordered w-full pl-12 bg-white border-orange-200 focus:outline-orange-400"
                        />
                    </div>

                    <p className="text-center text-sm text-slate-500 mt-3">
                        Showing {filteredCourses.length} course
                        {filteredCourses.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {/* No Result */}
                {filteredCourses.length === 0 ? (
                    <div className="text-center bg-white rounded-3xl p-10 shadow-md border border-orange-100">
                        <h2 className="text-2xl font-bold text-slate-900">
                            No courses found
                        </h2>
                        <p className="text-slate-500 mt-3">
                            Try searching with another course title.
                        </p>
                    </div>
                ) : (
                    /* Course Grid */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <div
                                key={course.id}
                                className="card overflow-hidden bg-white shadow-md border border-orange-100 hover:shadow-xl transition duration-300"
                            >
                                {/* Image */}
                                <figure className="relative h-52 w-full overflow-hidden bg-orange-100">
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition duration-300 hover:scale-105"
                                    />
                                </figure>

                                {/* Card Body */}
                                <div className="card-body">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="badge bg-orange-100 text-orange-600 border-none">
                                            {course.category}
                                        </span>

                                        <span className="badge bg-slate-100 text-slate-600 border-none">
                                            {course.level}
                                        </span>
                                    </div>

                                    <h2 className="card-title text-slate-900 line-clamp-2">
                                        {course.title}
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        Instructor: {course.instructor}
                                    </p>

                                    <p className="text-sm text-slate-600 line-clamp-2">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-2 text-sm">
                                        <div className="flex items-center gap-2 text-orange-500 font-semibold">
                                            <FaStar />
                                            <span>{course.rating}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-slate-500">
                                            <FaClock />
                                            <span>{course.duration}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <FaLayerGroup className="text-orange-500" />
                                        <span>{course.level}</span>
                                    </div>

                                    <div className="card-actions justify-end mt-4">
                                        <Link
                                            href={`/courses/${course.id}`}
                                            className="btn bg-orange-500 text-white border-none hover:bg-orange-600"
                                        >
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllCourses;